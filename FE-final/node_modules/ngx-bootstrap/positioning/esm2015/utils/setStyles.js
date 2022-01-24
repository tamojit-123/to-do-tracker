import { isNumeric } from './isNumeric';
export function setStyles(element, styles, renderer) {
    if (!element || !styles) {
        return;
    }
    Object.keys(styles).forEach((prop) => {
        let unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
            isNumeric(styles[prop])) {
            unit = 'px';
        }
        if (renderer) {
            renderer.setStyle(element, prop, `${String(styles[prop])}${unit}`);
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        element.style[prop] = String(styles[prop]) + unit;
    });
}
//# sourceMappingURL=setStyles.js.map