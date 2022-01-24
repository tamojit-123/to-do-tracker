import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** Provides default configuration values for timepicker */
export class TimepickerConfig {
    constructor() {
        /** hours change step */
        this.hourStep = 1;
        /** minutes change step */
        this.minuteStep = 5;
        /** seconds changes step */
        this.secondsStep = 10;
        /** if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM */
        this.showMeridian = true;
        /** meridian labels based on locale */
        this.meridians = ['AM', 'PM'];
        /** if true hours and minutes fields will be readonly */
        this.readonlyInput = false;
        /** if true hours and minutes fields will be disabled */
        this.disabled = false;
        /** if true scroll inside hours and minutes inputs will change time */
        this.mousewheel = true;
        /** if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard */
        this.arrowkeys = true;
        /** if true spinner arrows above and below the inputs will be shown */
        this.showSpinners = true;
        /** show seconds in timepicker */
        this.showSeconds = false;
        /** show minutes in timepicker */
        this.showMinutes = true;
        /** placeholder for hours field in timepicker */
        this.hoursPlaceholder = 'HH';
        /** placeholder for minutes field in timepicker */
        this.minutesPlaceholder = 'MM';
        /** placeholder for seconds field in timepicker */
        this.secondsPlaceholder = 'SS';
        /** hours aria label */
        this.ariaLabelHours = 'hours';
        /** minutes aria label */
        this.ariaLabelMinutes = 'minutes';
        /** seconds aria label */
        this.ariaLabelSeconds = 'seconds';
    }
}
TimepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function TimepickerConfig_Factory() { return new TimepickerConfig(); }, token: TimepickerConfig, providedIn: "root" });
TimepickerConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=timepicker.config.js.map