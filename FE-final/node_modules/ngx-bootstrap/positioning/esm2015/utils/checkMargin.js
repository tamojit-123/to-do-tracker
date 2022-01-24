import { getBsVer } from 'ngx-bootstrap/utils';
const availablePositions = {
    top: ['top', 'top start', 'top end'],
    bottom: ['bottom', 'bottom start', 'bottom end'],
    start: ['start', 'start top', 'start bottom'],
    end: ['end', 'end top', 'end bottom']
};
export function checkPopoverMargin(placement, checkPosition) {
    if (!getBsVer().isBs5) {
        return false;
    }
    return availablePositions[checkPosition].includes(placement);
}
export function checkMargins(placement) {
    if (!getBsVer().isBs5) {
        return '';
    }
    if (checkPopoverMargin(placement, 'end')) {
        return 'ms-2';
    }
    if (checkPopoverMargin(placement, 'start')) {
        return 'me-2';
    }
    if (checkPopoverMargin(placement, 'top')) {
        return 'mb-2';
    }
    if (checkPopoverMargin(placement, 'bottom')) {
        return 'mt-2';
    }
    return '';
}
//# sourceMappingURL=checkMargin.js.map