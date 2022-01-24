const parse = (value, def = 0) => value ? parseFloat(value) : def;
const ɵ0 = parse;
export function getOuterSizes(element) {
    const window = element.ownerDocument.defaultView;
    const styles = window === null || window === void 0 ? void 0 : window.getComputedStyle(element);
    const x = parse(styles === null || styles === void 0 ? void 0 : styles.marginTop) + parse(styles === null || styles === void 0 ? void 0 : styles.marginBottom);
    const y = parse(styles === null || styles === void 0 ? void 0 : styles.marginLeft) + parse(styles === null || styles === void 0 ? void 0 : styles.marginRight);
    return {
        width: Number(element.offsetWidth) + y,
        height: Number(element.offsetHeight) + x
    };
}
export { ɵ0 };
//# sourceMappingURL=getOuterSizes.js.map