import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
export class AccordionConfig {
    constructor() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
        /** turn on/off animation */
        this.isAnimated = false;
    }
}
AccordionConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function AccordionConfig_Factory() { return new AccordionConfig(); }, token: AccordionConfig, providedIn: "root" });
AccordionConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=accordion.config.js.map