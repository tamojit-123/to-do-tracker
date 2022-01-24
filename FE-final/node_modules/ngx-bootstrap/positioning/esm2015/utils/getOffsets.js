export function getOffsets(data) {
    var _a, _b, _c, _d;
    return {
        width: data.offsets.target.width,
        height: data.offsets.target.height,
        left: Math.floor((_a = data.offsets.target.left) !== null && _a !== void 0 ? _a : 0),
        top: Math.round((_b = data.offsets.target.top) !== null && _b !== void 0 ? _b : 0),
        bottom: Math.round((_c = data.offsets.target.bottom) !== null && _c !== void 0 ? _c : 0),
        right: Math.floor((_d = data.offsets.target.right) !== null && _d !== void 0 ? _d : 0)
    };
}
//# sourceMappingURL=getOffsets.js.map