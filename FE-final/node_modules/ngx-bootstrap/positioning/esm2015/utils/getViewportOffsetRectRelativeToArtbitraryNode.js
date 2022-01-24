import { getClientRect } from './getClientRect';
import { getOffsetRectRelativeToArbitraryNode } from './getOffsetRectRelativeToArbitraryNode';
import { getScroll } from './getScroll';
export function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll = false) {
    const html = element.ownerDocument.documentElement;
    const relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    const width = Math.max(html.clientWidth, window.innerWidth || 0);
    const height = Math.max(html.clientHeight, window.innerHeight || 0);
    const scrollTop = !excludeScroll ? getScroll(html) : 0;
    const scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    const offset = {
        top: scrollTop - Number(relativeOffset === null || relativeOffset === void 0 ? void 0 : relativeOffset.top) + Number(relativeOffset === null || relativeOffset === void 0 ? void 0 : relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset === null || relativeOffset === void 0 ? void 0 : relativeOffset.left) + Number(relativeOffset === null || relativeOffset === void 0 ? void 0 : relativeOffset.marginLeft),
        width,
        height
    };
    return getClientRect(offset);
}
//# sourceMappingURL=getViewportOffsetRectRelativeToArtbitraryNode.js.map