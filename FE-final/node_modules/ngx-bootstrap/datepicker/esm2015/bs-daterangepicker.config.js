import { Injectable } from '@angular/core';
import { BsDatepickerConfig } from './bs-datepicker.config';
import * as i0 from "@angular/core";
export class BsDaterangepickerConfig extends BsDatepickerConfig {
    constructor() {
        super(...arguments);
        // DatepickerRenderOptions
        this.displayMonths = 2;
    }
}
BsDaterangepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function BsDaterangepickerConfig_Factory() { return new BsDaterangepickerConfig(); }, token: BsDaterangepickerConfig, providedIn: "root" });
BsDaterangepickerConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=bs-daterangepicker.config.js.map