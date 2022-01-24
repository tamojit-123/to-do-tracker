/**
 * Get offsets to the target
 */
import { getOppositePlacement } from './getOppositePlacement';
import { getOuterSizes } from './getOuterSizes';
export function getTargetOffsets(target, hostOffsets, position) {
    var _a, _b, _c;
    const placement = position.split(' ')[0];
    // Get target node sizes
    const targetRect = getOuterSizes(target);
    // Add position, width and height to our offsets object
    const targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
    };
    // depending by the target placement we have to compute its offsets slightly differently
    const isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    const mainSide = isHoriz ? 'top' : 'left';
    const secondarySide = isHoriz ? 'left' : 'top';
    const measurement = isHoriz ? 'height' : 'width';
    const secondaryMeasurement = !isHoriz ? 'height' : 'width';
    targetOffsets[mainSide] =
        ((_a = hostOffsets[mainSide]) !== null && _a !== void 0 ? _a : 0) +
            hostOffsets[measurement] / 2 -
            targetRect[measurement] / 2;
    targetOffsets[secondarySide] = placement === secondarySide
        ? ((_b = hostOffsets[secondarySide]) !== null && _b !== void 0 ? _b : 0) - targetRect[secondaryMeasurement]
        : (_c = hostOffsets[getOppositePlacement(secondarySide)]) !== null && _c !== void 0 ? _c : 0;
    return targetOffsets;
}
//# sourceMappingURL=getTargetOffsets.js.map