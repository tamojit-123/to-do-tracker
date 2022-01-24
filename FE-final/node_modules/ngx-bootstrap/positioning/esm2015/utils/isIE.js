/**
 * Determines if the browser is Internet Explorer
 */
import { isBrowser } from './isBrowser';
// todo: valorkin fix and drop IE support :evil:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
const isIE10 = isBrowser && !!(window.MSInputMethodContext && /MSIE 10/.test(navigator.userAgent));
export function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}
//# sourceMappingURL=isIE.js.map