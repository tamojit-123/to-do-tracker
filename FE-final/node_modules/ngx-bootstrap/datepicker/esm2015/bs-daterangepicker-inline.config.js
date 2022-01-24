import { Injectable } from '@angular/core';
import { BsDatepickerConfig } from './bs-datepicker.config';
import * as i0 from "@angular/core";
export class BsDaterangepickerInlineConfig extends BsDatepickerConfig {
    constructor() {
        super(...arguments);
        // DatepickerRenderOptions
        this.displayMonths = 2;
        /** turn on/off animation */
        this.isAnimated = false;
    }
}
BsDaterangepickerInlineConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function BsDaterangepickerInlineConfig_Factory() { return new BsDaterangepickerInlineConfig(); }, token: BsDaterangepickerInlineConfig, providedIn: "root" });
BsDaterangepickerInlineConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=bs-daterangepicker-inline.config.js.map