import { getBoundingClientRect } from './getBoundingClientRect';
import { getClientRect } from './getClientRect';
import { getScrollParent } from './getScrollParent';
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { includeScroll } from './includeScroll';
import { isIE as runIsIE } from './isIE';
import { isNumber } from './isNumeric';
export function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition = false) {
    var _a, _b, _c, _d, _e, _f;
    const isIE10 = runIsIE(10);
    const isHTML = parent.nodeName === 'HTML';
    const childrenRect = getBoundingClientRect(children);
    const parentRect = getBoundingClientRect(parent);
    const scrollParent = getScrollParent(children);
    const styles = getStyleComputedProperty(parent);
    const borderTopWidth = parseFloat(styles.borderTopWidth);
    const borderLeftWidth = parseFloat(styles.borderLeftWidth);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
        parentRect.top = Math.max((_a = parentRect.top) !== null && _a !== void 0 ? _a : 0, 0);
        parentRect.left = Math.max((_b = parentRect.left) !== null && _b !== void 0 ? _b : 0, 0);
    }
    let offsets = getClientRect({
        top: ((_c = childrenRect.top) !== null && _c !== void 0 ? _c : 0) - ((_d = parentRect.top) !== null && _d !== void 0 ? _d : 0) - borderTopWidth,
        left: ((_e = childrenRect.left) !== null && _e !== void 0 ? _e : 0) - ((_f = parentRect.left) !== null && _f !== void 0 ? _f : 0) - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;
    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
        const marginTop = parseFloat(styles.marginTop);
        const marginLeft = parseFloat(styles.marginLeft);
        if (isNumber(offsets.top)) {
            offsets.top -= borderTopWidth - marginTop;
        }
        if (isNumber(offsets.bottom)) {
            offsets.bottom -= borderTopWidth - marginTop;
        }
        if (isNumber(offsets.left)) {
            offsets.left -= borderLeftWidth - marginLeft;
        }
        if (isNumber(offsets.right)) {
            offsets.right -= borderLeftWidth - marginLeft;
        }
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }
    if (isIE10 && !fixedPosition
        ? parent.contains(scrollParent)
        : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
    }
    return offsets;
}
//# sourceMappingURL=getOffsetRectRelativeToArbitraryNode.js.map