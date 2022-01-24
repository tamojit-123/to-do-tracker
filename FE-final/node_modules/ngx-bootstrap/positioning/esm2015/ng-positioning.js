import { MapPlacementInToRL } from './models';
import { arrow, flip, initData, preventOverflow, shift } from './modifiers';
import { getOffsets, getReferenceOffsets, setStyles, updateContainerClass } from './utils';
export class Positioning {
    position(hostElement, targetElement /*, round = true*/) {
        return this.offset(hostElement, targetElement /*, false*/);
    }
    offset(hostElement, targetElement /*, round = true*/) {
        return getReferenceOffsets(targetElement, hostElement);
    }
    positionElements(hostElement, targetElement, position, appendToBody, options) {
        const chainOfModifiers = [flip, shift, preventOverflow, arrow];
        const _position = MapPlacementInToRL[position];
        const data = initData(targetElement, hostElement, _position, options);
        if (!data) {
            return;
        }
        return chainOfModifiers.reduce((modifiedData, modifier) => modifier(modifiedData), data);
    }
}
const positionService = new Positioning();
export function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
    const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    if (!data) {
        return;
    }
    const offsets = getOffsets(data);
    setStyles(targetElement, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: `translate3d(${offsets.left}px, ${offsets.top}px, 0px)`
    }, renderer);
    if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
    }
    updateContainerClass(data, renderer);
}
//# sourceMappingURL=ng-positioning.js.map