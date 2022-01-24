/**
 * Get offsets to the reference element
 */
import { findCommonOffsetParent } from './findCommonOffsetParent';
import { getOffsetRectRelativeToArbitraryNode } from './getOffsetRectRelativeToArbitraryNode';
import { getFixedPositionOffsetParent } from './getFixedPositionOffsetParent';
export function getReferenceOffsets(target, host, fixedPosition) {
    const commonOffsetParent = fixedPosition
        ? getFixedPositionOffsetParent(target)
        : findCommonOffsetParent(target, host);
    return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
}
//# sourceMappingURL=getReferenceOffsets.js.map