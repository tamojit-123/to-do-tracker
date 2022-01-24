import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TabsetConfig {
    constructor() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
        /** provides possibility to set keyNavigations enable or disable, by default is enable */
        this.isKeysAllowed = true;
        /** aria label for tab list */
        this.ariaLabel = 'Tabs';
    }
}
TabsetConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function TabsetConfig_Factory() { return new TabsetConfig(); }, token: TabsetConfig, providedIn: "root" });
TabsetConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=tabset.config.js.map