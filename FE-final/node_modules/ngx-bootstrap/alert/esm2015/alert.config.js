import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AlertConfig {
    constructor() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
}
AlertConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlertConfig_Factory() { return new AlertConfig(); }, token: AlertConfig, providedIn: "root" });
AlertConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=alert.config.js.map