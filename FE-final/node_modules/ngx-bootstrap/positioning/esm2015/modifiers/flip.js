import { computeAutoPlacement, getBoundaries, getClientRect, getOppositeVariation, getTargetOffsets, isModifierEnabled } from '../utils';
export function flip(data) {
    data.offsets.target = getClientRect(data.offsets.target);
    if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
    }
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    let placement = data.placement.split(' ')[0];
    let variation = data.placement.split(' ')[1] || '';
    const offsetsHost = data.offsets.host;
    const target = data.instance.target;
    const host = data.instance.host;
    const adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
    const flipOrder = [placement, adaptivePosition];
    flipOrder.forEach((step, index) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        if (placement !== step || flipOrder.length === index + 1) {
            return;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        const overlapsRef = (placement === 'left' &&
            Math.floor((_a = data.offsets.target.right) !== null && _a !== void 0 ? _a : 0) > Math.floor((_b = data.offsets.host.left) !== null && _b !== void 0 ? _b : 0)) ||
            (placement === 'right' &&
                Math.floor((_c = data.offsets.target.left) !== null && _c !== void 0 ? _c : 0) < Math.floor((_d = data.offsets.host.right) !== null && _d !== void 0 ? _d : 0)) ||
            (placement === 'top' &&
                Math.floor((_e = data.offsets.target.bottom) !== null && _e !== void 0 ? _e : 0) > Math.floor((_f = data.offsets.host.top) !== null && _f !== void 0 ? _f : 0)) ||
            (placement === 'bottom' &&
                Math.floor((_g = data.offsets.target.top) !== null && _g !== void 0 ? _g : 0) < Math.floor((_h = data.offsets.host.bottom) !== null && _h !== void 0 ? _h : 0));
        const overflowsLeft = Math.floor((_j = data.offsets.target.left) !== null && _j !== void 0 ? _j : 0) < Math.floor((_k = boundaries.left) !== null && _k !== void 0 ? _k : 0);
        const overflowsRight = Math.floor((_l = data.offsets.target.right) !== null && _l !== void 0 ? _l : 0) > Math.floor((_m = boundaries.right) !== null && _m !== void 0 ? _m : 0);
        const overflowsTop = Math.floor((_o = data.offsets.target.top) !== null && _o !== void 0 ? _o : 0) < Math.floor((_p = boundaries.top) !== null && _p !== void 0 ? _p : 0);
        const overflowsBottom = Math.floor((_q = data.offsets.target.bottom) !== null && _q !== void 0 ? _q : 0) > Math.floor((_r = boundaries.bottom) !== null && _r !== void 0 ? _r : 0);
        const overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        const isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        const flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
            (isVertical && variation === 'right' && overflowsRight) ||
            (!isVertical && variation === 'left' && overflowsTop) ||
            (!isVertical && variation === 'right' && overflowsBottom));
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? ` ${variation}` : '');
            data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
    });
    return data;
}
//# sourceMappingURL=flip.js.map