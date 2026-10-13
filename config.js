// Public settings only. No secrets here: the Apps Script URL is a public endpoint by design.
window.OKOLO_CONFIG = {
  // Google Apps Script web app URL (…/exec). Empty = demo mode: nothing is sent, answers stay in this browser.
  endpoint: '',
  maxFileMB: 10,
  fileTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'application/pdf'],
  storageKey: 'okolo-brief-v1'
};
