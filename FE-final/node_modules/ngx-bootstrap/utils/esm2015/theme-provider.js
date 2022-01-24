import { window } from './facade/browser';
export var BsVerions;
(function (BsVerions) {
    BsVerions["isBs3"] = "bs3";
    BsVerions["isBs4"] = "bs4";
    BsVerions["isBs5"] = "bs5";
})(BsVerions || (BsVerions = {}));
let guessedVersion;
function _guessBsVersion() {
    if (typeof window.document === 'undefined') {
        return 'bs4';
    }
    const spanEl = window.document.createElement('span');
    spanEl.innerText = 'testing bs version';
    spanEl.classList.add('d-none');
    spanEl.classList.add('visually-hidden');
    window.document.head.appendChild(spanEl);
    const rect = spanEl.getBoundingClientRect();
    const overflowStyle = window.getComputedStyle(spanEl).overflow;
    window.document.head.removeChild(spanEl);
    if (!rect || (rect && rect.top !== 0)) {
        return 'bs3';
    }
    if (overflowStyle && overflowStyle === 'hidden') {
        return 'bs5';
    }
    return 'bs4';
}
export function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
export function isBs3() {
    if (typeof window === 'undefined') {
        return true;
    }
    if (typeof window.__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return window.__theme === 'bs3';
}
export function isBs4() {
    if (isBs3())
        return false;
    if (guessedVersion)
        return guessedVersion === 'bs4';
    guessedVersion = _guessBsVersion();
    return guessedVersion === 'bs4';
}
export function isBs5() {
    if (isBs3() || isBs4())
        return false;
    if (guessedVersion)
        return guessedVersion === 'bs5';
    guessedVersion = _guessBsVersion();
    return guessedVersion === 'bs5';
}
export function getBsVer() {
    return {
        isBs3: isBs3(),
        isBs4: isBs4(),
        isBs5: isBs5()
    };
}
export function currentBsVersion() {
    const bsVer = getBsVer();
    const resVersion = Object.keys(bsVer).find(key => bsVer[key]);
    return BsVerions[resVersion];
}
//# sourceMappingURL=theme-provider.js.map