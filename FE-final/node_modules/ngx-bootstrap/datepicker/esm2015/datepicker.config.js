import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DatepickerConfig {
    constructor() {
        this.locale = 'en';
        this.datepickerMode = 'day';
        this.startingDay = 0;
        this.yearRange = 20;
        this.minMode = 'day';
        this.maxMode = 'year';
        this.showWeeks = true;
        this.formatDay = 'DD';
        this.formatMonth = 'MMMM';
        this.formatYear = 'YYYY';
        this.formatDayHeader = 'dd';
        this.formatDayTitle = 'MMMM YYYY';
        this.formatMonthTitle = 'YYYY';
        this.onlyCurrentMonth = false;
        this.monthColLimit = 3;
        this.yearColLimit = 5;
        this.shortcutPropagation = false;
    }
}
DatepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function DatepickerConfig_Factory() { return new DatepickerConfig(); }, token: DatepickerConfig, providedIn: "root" });
DatepickerConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=datepicker.config.js.map