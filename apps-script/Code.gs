/**
 * OKOLO brief backend: Google Apps Script web app.
 * Receives the form payload, writes one row per brief to Google Sheets (one column per question ID),
 * saves uploads to Drive, creates a Notion page and emails the client and the owner.
 *
 * Secrets live in Project Settings → Script properties, never in the site code:
 *   SHEET_ID      Google Sheet id (from its URL)
 *   FOLDER_ID     Drive folder id for uploads
 *   OWNER_EMAIL   where new briefs are announced
 *   SENDER_EMAIL  address the client copy comes from (optional). Must be a Gmail "Send mail as" alias,
 *                 e.g. hello@okolo.studio. Without it, mail goes from the Google account itself.
 *   NOTION_TOKEN  Notion internal integration secret (optional)
 *   NOTION_DB     Notion database id (optional)
 */
const SYS = ['submitted', 'started', 'lang', 'mode', 'name', 'brand', 'email', 'tags', 'path', 'files'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    const p = PropertiesService.getScriptProperties().getProperties();
    const fileLinks = saveFiles_(d, p.FOLDER_ID);
    writeRow_(d, fileLinks, p.SHEET_ID);
    try { if (p.NOTION_TOKEN && p.NOTION_DB) notion_(d, fileLinks, p); } catch (err) { console.error('Notion', err); }
    mail_(d, fileLinks, p.OWNER_EMAIL, p.SENDER_EMAIL);
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() { return json_({ ok: true, service: 'okolo-brief' }); }

function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function saveFiles_(d, folderId) {
  if (!d.files || !d.files.length || !folderId) return [];
  const root = DriveApp.getFolderById(folderId);
  const sub = root.createFolder(Utilities.formatDate(new Date(), 'Europe/Tallinn', 'yyyy-MM-dd HH:mm') + ' · ' + (d.brand || d.name || 'brief'));
  return d.files.map(f => {
    const blob = Utilities.newBlob(Utilities.base64Decode(f.data), f.type, f.q + ' · ' + f.name);
    return { q: f.q, name: f.name, url: sub.createFile(blob).getUrl() };
  });
}

function writeRow_(d, files, sheetId) {
  const sh = SpreadsheetApp.openById(sheetId).getSheets()[0];
  let head = sh.getLastColumn() ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0] : [];
  if (!head.length) { head = SYS.slice(); sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight('bold'); sh.setFrozenRows(1); }
  // add a column for any question the sheet has not seen yet
  const add = Object.keys(d.answers).filter(k => head.indexOf(k) < 0);
  if (add.length) { sh.getRange(1, head.length + 1, 1, add.length).setValues([add]).setFontWeight('bold'); head = head.concat(add); }
  const sys = { submitted: new Date(d.submitted), started: d.started ? new Date(d.started) : '', lang: d.lang, mode: d.mode, name: d.name, brand: d.brand, email: d.email, tags: d.tags, path: d.path, files: files.map(f => f.url).join('\n') };
  const row = head.map(h => (h in sys ? sys[h] : (d.answers[h] || '')));
  sh.appendRow(row);
}

function label_(id) { return id; }

function summary_(d) {
  return Object.keys(d.answers).filter(k => d.answers[k]).map(k => k + ': ' + d.answers[k]).join('\n');
}

// Send from the studio address when it is a verified Gmail alias, otherwise fall back to the account address.
function send_(m, from) {
  if (from && GmailApp.getAliases().indexOf(from) >= 0) {
    const o = { from: from, name: m.name || 'OKOLO', replyTo: m.replyTo || from };
    if (m.htmlBody) o.htmlBody = m.htmlBody;
    GmailApp.sendEmail(m.to, m.subject, m.body, o);
  } else {
    MailApp.sendEmail(m);
  }
}

function esc_(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

// Same design as the Zoho signature (okolo-brief/signature/signature.html); mark is hosted on okolo.studio.
const SIGNATURE_TEXT = '\n\n—\nDaniil Vesselovski\nDesigner & founder, OKOLO Studio\nhello@okolo.studio · instagram.com/okolo.studio · t.me/okolo_studio';
const SIGNATURE = '<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;color:#3B332A;"><tr>'
  + '<td style="padding:0 14px 0 0;vertical-align:middle;"><img src="https://okolo.studio/assets/okolo-mark-192.png" width="56" height="56" alt="OKOLO" style="display:block;width:56px;height:56px;border:0;"></td>'
  + '<td style="padding:0 0 0 14px;border-left:2px solid #8FB3F0;vertical-align:middle;">'
  + '<div style="font-size:15px;line-height:20px;font-weight:bold;color:#3B332A;">Daniil Vesselovski</div>'
  + '<div style="font-size:13px;line-height:18px;color:#7A6B57;">Designer &amp; founder, OKOLO Studio</div>'
  + '<div style="font-size:13px;line-height:18px;padding-top:6px;"><a href="mailto:hello@okolo.studio" style="color:#3B332A;text-decoration:none;">hello@okolo.studio</a>'
  + '<span style="color:#8FB3F0;">&nbsp;·&nbsp;</span><a href="https://instagram.com/okolo.studio" style="color:#3B332A;text-decoration:none;">Instagram</a>'
  + '<span style="color:#8FB3F0;">&nbsp;·&nbsp;</span><a href="https://t.me/okolo_studio" style="color:#3B332A;text-decoration:none;">Telegram</a></div>'
  + '</td></tr></table>';

function mail_(d, files, owner, from) {
  const ru = d.lang === 'ru';
  const fl = files.length ? '\n\n' + (ru ? 'Файлы:' : 'Files:') + '\n' + files.map(f => f.name + ' — ' + f.url).join('\n') : '';
  if (d.email) {
    const subj = ru ? 'Твой бриф для OKOLO: ' + (d.brand || '') : 'Your OKOLO brief: ' + (d.brand || '');
    const body = (ru
      ? 'Привет, ' + d.name + '!\n\nСпасибо за бриф! Ниже все твои ответы, чтобы они были под рукой.\n\nВ течение 3 рабочих дней я напишу тебе, чтобы договориться о созвоне.\n\n'
      : 'Hi ' + d.name + '!\n\nThanks for the brief! All your answers are below so you have them at hand.\n\nI’ll get in touch within 3 working days to set up a call.\n\n') + summary_(d) + fl;
    const html = '<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#3B332A;">'
      + esc_(body).replace(/(https:\/\/\S+)/g, '<a href="$1" style="color:#3B332A;">$1</a>').replace(/\n/g, '<br>') + '</div><br><br>' + SIGNATURE;
    send_({ to: d.email, subject: subj, body: body + SIGNATURE_TEXT, htmlBody: html, name: 'Daniil · OKOLO Studio', replyTo: from || owner || '' }, from);
  }
  if (owner) {
    send_({ to: owner, name: 'OKOLO Brief', subject: 'Новый бриф: ' + (d.brand || '—') + ' · ' + (d.answers.C10 || '') + ' · ' + (d.answers.W03 || ''),
      body: d.name + ' <' + d.email + '>\nРежим: ' + d.mode + ' · Язык: ' + d.lang + '\n\n' + summary_(d) + fl, replyTo: d.email || owner }, from);
  }
}

function notion_(d, files, p) {
  const text = s => [{ text: { content: String(s || '').slice(0, 1900) } }];
  const blocks = Object.keys(d.answers).filter(k => d.answers[k]).map(k => ({ object: 'block', type: 'paragraph', paragraph: { rich_text: [{ text: { content: k + ': ' }, annotations: { bold: true } }, { text: { content: String(d.answers[k]).slice(0, 1900) } }] } }));
  files.forEach(f => blocks.push({ object: 'block', type: 'bookmark', bookmark: { url: f.url } }));
  const body = {
    parent: { database_id: p.NOTION_DB },
    properties: {
      'Бренд': { title: text(d.brand || d.name || 'Бриф') },
      'Имя': { rich_text: text(d.name) },
      'Email': { email: d.email || null },
      'Режим': { select: { name: d.mode } },
      'Язык': { select: { name: d.lang } },
      'Что нужно': { rich_text: text(d.answers.C10) },
      'Бюджет': { rich_text: text(d.answers.W03) },
      'Сроки': { rich_text: text(d.answers.W01) },
      'Статус': { select: { name: 'Новый' } },
      'Дата': { date: { start: d.submitted } }
    },
    children: blocks.slice(0, 95)
  };
  const r = UrlFetchApp.fetch('https://api.notion.com/v1/pages', {
    method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    headers: { Authorization: 'Bearer ' + p.NOTION_TOKEN, 'Notion-Version': '2022-06-28' },
    payload: JSON.stringify(body)
  });
  if (r.getResponseCode() >= 300) throw new Error(r.getContentText());
}
