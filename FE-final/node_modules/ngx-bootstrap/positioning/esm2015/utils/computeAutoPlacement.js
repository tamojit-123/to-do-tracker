/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 */
import { getBoundaries } from './getBoundaries';
import { PlacementForBs5 } from '../models';
import { getBsVer } from 'ngx-bootstrap/utils';
function getArea({ width, height }) {
    return width * height;
}
export function computeAutoPlacement(placement, refRect, target, host, allowedPositions = ['top', 'bottom', 'right', 'left'], boundariesElement = 'viewport', padding = 0) {
    var _a, _b, _c, _d;
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    const boundaries = getBoundaries(target, host, padding, boundariesElement);
    const rects = {
        top: {
            width: (_a = boundaries.width) !== null && _a !== void 0 ? _a : 0,
            height: refRect.top && boundaries.top ? refRect.top - boundaries.top : 0
        },
        right: {
            width: boundaries.right && refRect.right ? boundaries.right - refRect.right : 0,
            height: (_b = boundaries.height) !== null && _b !== void 0 ? _b : 0
        },
        bottom: {
            width: (_c = boundaries.width) !== null && _c !== void 0 ? _c : 0,
            height: boundaries.bottom && refRect.bottom ? boundaries.bottom - refRect.bottom : 0
        },
        left: {
            width: refRect.left && boundaries.left ? refRect.left - boundaries.left : 0,
            height: (_d = boundaries.height) !== null && _d !== void 0 ? _d : 0
        }
    };
    const sortedAreas = Object.keys(rects)
        .map((key) => (Object.assign(Object.assign({ key }, rects[key]), { area: getArea(rects[key]) })))
        .sort((a, b) => b.area - a.area);
    let filteredAreas = sortedAreas.filter(({ width, height }) => {
        return width >= target.clientWidth
            && height >= target.clientHeight;
    });
    filteredAreas = filteredAreas.filter((position) => {
        return allowedPositions
            .some((allowedPosition) => {
            return allowedPosition === position.key;
        });
    });
    const computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    const variation = placement.split(' ')[1];
    // for tooltip on auto position
    target.className = target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${getBsVer().isBs5 ? PlacementForBs5[computedPlacement] : computedPlacement}`);
    return computedPlacement + (variation ? `-${variation}` : '');
}
//# sourceMappingURL=computeAutoPlacement.js.map