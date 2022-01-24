import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
export class PopoverConfig {
    constructor() {
        /** sets disable adaptive position */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
        /** delay before showing the tooltip */
        this.delay = 0;
    }
}
PopoverConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PopoverConfig_Factory() { return new PopoverConfig(); }, token: PopoverConfig, providedIn: "root" });
PopoverConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=popover.config.js.map