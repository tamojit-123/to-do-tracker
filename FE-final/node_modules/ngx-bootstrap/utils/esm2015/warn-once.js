import { isDevMode } from '@angular/core';
const _messagesHash = {};
const _hideMsg = typeof console === 'undefined' || !('warn' in console);
export function warnOnce(msg) {
    if (!isDevMode() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    console.warn(msg);
}
//# sourceMappingURL=warn-once.js.map