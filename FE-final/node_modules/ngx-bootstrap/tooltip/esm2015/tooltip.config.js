import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** Default values provider for tooltip */
export class TooltipConfig {
    constructor() {
        /** sets disable adaptive position */
        this.adaptivePosition = true;
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
        /** delay before showing the tooltip */
        this.delay = 0;
    }
}
TooltipConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function TooltipConfig_Factory() { return new TooltipConfig(); }, token: TooltipConfig, providedIn: "root" });
TooltipConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
//# sourceMappingURL=tooltip.config.js.map