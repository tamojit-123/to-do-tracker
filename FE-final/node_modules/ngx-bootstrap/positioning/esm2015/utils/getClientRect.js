export function getClientRect(offsets) {
    return Object.assign(Object.assign({}, offsets), { right: (offsets.left || 0) + offsets.width, bottom: (offsets.top || 0) + offsets.height });
}
//# sourceMappingURL=getClientRect.js.map