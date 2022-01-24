import { getClientRect, getOuterSizes, getStyleComputedProperty } from '../utils';
export function arrow(data) {
    var _a, _b, _c, _d, _e, _f;
    let targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    const arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    const isVertical = ['left', 'right'].indexOf(data.placement.split(' ')[0]) !== -1;
    const len = isVertical ? 'height' : 'width';
    const sideCapitalized = isVertical ? 'Top' : 'Left';
    const side = sideCapitalized.toLowerCase();
    const altSide = isVertical ? 'left' : 'top';
    const opSide = isVertical ? 'bottom' : 'right';
    const arrowElementSize = getOuterSizes(arrowElement)[len];
    const placementVariation = data.placement.split(' ')[1];
    // top/left side
    if (((_a = data.offsets.host[opSide]) !== null && _a !== void 0 ? _a : 0) - arrowElementSize < ((_b = targetOffsets[side]) !== null && _b !== void 0 ? _b : 0)) {
        (targetOffsets)[side] -=
            ((_c = targetOffsets[side]) !== null && _c !== void 0 ? _c : 0) - (((_d = data.offsets.host[opSide]) !== null && _d !== void 0 ? _d : 0) - arrowElementSize);
    }
    // bottom/right side
    if (Number((data).offsets.host[side]) + Number(arrowElementSize) > ((_e = targetOffsets[opSide]) !== null && _e !== void 0 ? _e : 0)) {
        (targetOffsets)[side] +=
            Number((data).offsets.host[side]) + Number(arrowElementSize) - Number((targetOffsets)[opSide]);
    }
    targetOffsets = getClientRect(targetOffsets);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    const css = getStyleComputedProperty(data.instance.target);
    const targetMarginSide = parseFloat(css[`margin${sideCapitalized}`]) || 0;
    const targetBorderSide = parseFloat(css[`border${sideCapitalized}Width`]) || 0;
    // compute center of the target
    let center;
    if (!placementVariation) {
        center = Number((data).offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    }
    else {
        const targetBorderRadius = parseFloat(css.borderRadius) || 0;
        const targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
        center = side === placementVariation ?
            Number((data).offsets.host[side]) + targetSideArrowOffset :
            Number((data).offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
    }
    let sideValue = center - ((_f = targetOffsets[side]) !== null && _f !== void 0 ? _f : 0) - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - (arrowElementSize + 5), sideValue), 0);
    data.offsets.arrow = {
        [side]: Math.round(sideValue),
        [altSide]: '' // make sure to unset any eventual altSide value from the DOM node
    };
    data.instance.arrow = arrowElement;
    return data;
}
//# sourceMappingURL=arrow.js.map