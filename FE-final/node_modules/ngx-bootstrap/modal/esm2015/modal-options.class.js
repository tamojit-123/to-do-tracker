import { Injectable, InjectionToken } from '@angular/core';
export class ModalOptions {
}
ModalOptions.decorators = [
    { type: Injectable }
];
export const modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {},
    closeInterceptor: void 0
};
export const MODAL_CONFIG_DEFAULT_OVERRIDE = new InjectionToken('override-default-config');
export const CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show' // bs4
};
export const SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
export const TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
export const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc',
    BACK: 'browser-back-navigation-clicked'
};
//# sourceMappingURL=modal-options.class.js.map