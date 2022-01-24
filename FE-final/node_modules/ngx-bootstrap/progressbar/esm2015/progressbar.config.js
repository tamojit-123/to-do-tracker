import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ProgressbarConfig {
    constructor() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
}
ProgressbarConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProgressbarConfig_Factory() { return new ProgressbarConfig(); }, token: ProgressbarConfig, providedIn: "root" });
ProgressbarConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=progressbar.config.js.map