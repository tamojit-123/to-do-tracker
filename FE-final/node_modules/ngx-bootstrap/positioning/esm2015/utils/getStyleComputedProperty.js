export function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    const window = element.ownerDocument.defaultView;
    const css = window === null || window === void 0 ? void 0 : window.getComputedStyle(element, null);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return property ? css && css[property] : css;
}
//# sourceMappingURL=getStyleComputedProperty.js.map