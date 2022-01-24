import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
export class BsDatepickerConfig {
    constructor() {
        /** sets use adaptive position */
        this.adaptivePosition = false;
        /** sets use UTC date time format */
        this.useUtc = false;
        /** turn on/off animation */
        this.isAnimated = false;
        /**
         * The view that the datepicker should start in
         */
        this.startView = 'day';
        /**
         * If true, returns focus to the datepicker / daterangepicker input after date selection
         */
        this.returnFocusToInput = false;
        /** CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
         * Allows to hide week numbers in datepicker
         */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        /**
         * Date format for date range input field
         */
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
        /**
         * Shows 'today' button
         */
        this.showTodayButton = false;
        /**
         * Shows clear button
         */
        this.showClearButton = false;
        /**
         * Positioning of 'today' button
         */
        this.todayPosition = 'center';
        /**
         * Positioning of 'clear' button
         */
        this.clearPosition = 'right';
        /**
         * Label for 'today' button
         */
        this.todayButtonLabel = 'Today';
        /**
         * Label for 'clear' button
         */
        this.clearButtonLabel = 'Clear';
        /**
         * Label for 'custom range' button
         */
        this.customRangeButtonLabel = 'Custom Range';
    }
}
BsDatepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function BsDatepickerConfig_Factory() { return new BsDatepickerConfig(); }, token: BsDatepickerConfig, providedIn: "root" });
BsDatepickerConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=bs-datepicker.config.js.map