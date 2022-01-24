import { PlacementForBs5 } from '../models';
import { checkMargins } from './checkMargin';
import { getBsVer } from 'ngx-bootstrap/utils';
export function updateContainerClass(data, renderer) {
    const target = data.instance.target;
    let containerClass = target.className;
    const dataPlacement = getBsVer().isBs5 ? PlacementForBs5[data.placement] : data.placement;
    if (data.placementAuto) {
        containerClass = containerClass.replace(/bs-popover-auto/g, `bs-popover-${dataPlacement}`);
        containerClass = containerClass.replace(/ms-2|me-2|mb-2|mt-2/g, '');
        containerClass = containerClass.replace(/bs-tooltip-auto/g, `bs-tooltip-${dataPlacement}`);
        containerClass = containerClass.replace(/\sauto/g, ` ${dataPlacement}`);
        if (containerClass.indexOf('popover') !== -1) {
            containerClass = containerClass + ' ' + checkMargins(dataPlacement);
        }
        if (containerClass.indexOf('popover') !== -1 && containerClass.indexOf('popover-auto') === -1) {
            containerClass += ' popover-auto';
        }
        if (containerClass.indexOf('tooltip') !== -1 && containerClass.indexOf('tooltip-auto') === -1) {
            containerClass += ' tooltip-auto';
        }
    }
    containerClass = containerClass.replace(/left|right|top|bottom|end|start/g, `${dataPlacement.split(' ')[0]}`);
    if (renderer) {
        renderer.setAttribute(target, 'class', containerClass);
        return;
    }
    target.className = containerClass;
}
//# sourceMappingURL=updateContainerClass.js.map