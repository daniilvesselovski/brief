// Public settings only. No secrets here: the Apps Script URL is a public endpoint by design.
window.OKOLO_CONFIG = {
  // Google Apps Script web app URL (…/exec). Empty = demo mode: nothing is sent, answers stay in this browser.
  endpoint: 'https://script.google.com/macros/s/AKfycbxPwMYJ3-0_UL-t1utyk4DxWoj4I3zIIpONWGieDYqcC1kCqKPijRMbebMYsQj2zF8K/exec',
  maxFileMB: 10,
  fileTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'application/pdf'],
  storageKey: 'okolo-brief-v1'
};
