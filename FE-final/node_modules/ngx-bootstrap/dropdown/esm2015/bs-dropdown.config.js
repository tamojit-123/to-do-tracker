import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** Default dropdown configuration */
export class BsDropdownConfig {
    constructor() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
        /** default dropdown auto closing behavior */
        this.insideClick = false;
        /** turn on/off animation */
        this.isAnimated = false;
    }
}
BsDropdownConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function BsDropdownConfig_Factory() { return new BsDropdownConfig(); }, token: BsDropdownConfig, providedIn: "root" });
BsDropdownConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=bs-dropdown.config.js.map