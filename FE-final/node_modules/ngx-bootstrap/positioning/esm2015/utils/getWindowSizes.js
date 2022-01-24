import { isIE } from './isIE';
function getSize(axis, body, html, computedStyle) {
    const _body = body;
    const _html = html;
    const _computedStyle = computedStyle;
    return Math.max(_body[`offset${axis}`], _body[`scroll${axis}`], _html[`client${axis}`], _html[`offset${axis}`], _html[`scroll${axis}`], isIE(10)
        ? (parseInt(_html[`offset${axis}`], 10) +
            parseInt(_computedStyle[`margin${axis === 'Height' ? 'Top' : 'Left'}`], 10) +
            parseInt(_computedStyle[`margin${axis === 'Height' ? 'Bottom' : 'Right'}`], 10))
        : 0);
}
export function getWindowSizes(document) {
    const body = document.body;
    const html = document.documentElement;
    const computedStyle = isIE(10) ? getComputedStyle(html) : void 0;
    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}
//# sourceMappingURL=getWindowSizes.js.map