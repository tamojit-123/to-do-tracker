import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatepickerConfig } from './datepicker.config';
export const DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
};
export class DatePickerComponent {
    constructor(config) {
        /** sets datepicker mode, supports: `day`, `month`, `year` */
        this.datepickerMode = 'day';
        /** if false week numbers will be hidden */
        this.showWeeks = true;
        /** number of months displayed in a single row of month picker */
        this.monthColLimit = 3;
        /** number of years displayed in a single row of year picker */
        this.yearColLimit = 5;
        this.selectionDone = new EventEmitter(undefined);
        /** callback to invoke when the activeDate is changed. */
        this.activeDateChange = new EventEmitter(undefined);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onChange = Function.prototype;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    /** currently active date */
    get activeDate() {
        return this._activeDate || this._now;
    }
    set activeDate(value) {
        this._activeDate = value;
    }
    configureOptions() {
        Object.assign(this, this.config);
    }
    onUpdate(event) {
        this.activeDate = event;
        this.onChange(event);
    }
    onSelectionDone(event) {
        this.selectionDone.emit(event);
    }
    onActiveDateChange(event) {
        this.activeDateChange.emit(event);
    }
    // todo: support null value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    writeValue(value) {
        var _a, _b;
        if (((_a = this._datePicker) === null || _a === void 0 ? void 0 : _a.compare(value, this._activeDate)) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            (_b = this._datePicker) === null || _b === void 0 ? void 0 : _b.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'datepicker',
                template: `
    <datepicker-inner [activeDate]="activeDate"
                      (update)="onUpdate($event)"
                      [locale]="config.locale"
                      [datepickerMode]="datepickerMode"
                      [initDate]="initDate"
                      [minDate]="minDate"
                      [maxDate]="maxDate"
                      [minMode]="minMode"
                      [maxMode]="maxMode"
                      [showWeeks]="showWeeks"
                      [formatDay]="formatDay"
                      [formatMonth]="formatMonth"
                      [formatYear]="formatYear"
                      [formatDayHeader]="formatDayHeader"
                      [formatDayTitle]="formatDayTitle"
                      [formatMonthTitle]="formatMonthTitle"
                      [startingDay]="startingDay"
                      [yearRange]="yearRange"
                      [customClass]="customClass"
                      [dateDisabled]="dateDisabled"
                      [dayDisabled]="dayDisabled"
                      [onlyCurrentMonth]="onlyCurrentMonth"
                      [shortcutPropagation]="shortcutPropagation"
                      [monthColLimit]="monthColLimit"
                      [yearColLimit]="yearColLimit"
                      (selectionDone)="onSelectionDone($event)"
                      (activeDateChange)="onActiveDateChange($event)">
      <daypicker tabindex="0"></daypicker>
      <monthpicker tabindex="0"></monthpicker>
      <yearpicker tabindex="0"></yearpicker>
    </datepicker-inner>
    `,
                providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
            },] }
];
DatePickerComponent.ctorParameters = () => [
    { type: DatepickerConfig }
];
DatePickerComponent.propDecorators = {
    datepickerMode: [{ type: Input }],
    initDate: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    minMode: [{ type: Input }],
    maxMode: [{ type: Input }],
    showWeeks: [{ type: Input }],
    formatDay: [{ type: Input }],
    formatMonth: [{ type: Input }],
    formatYear: [{ type: Input }],
    formatDayHeader: [{ type: Input }],
    formatDayTitle: [{ type: Input }],
    formatMonthTitle: [{ type: Input }],
    startingDay: [{ type: Input }],
    yearRange: [{ type: Input }],
    onlyCurrentMonth: [{ type: Input }],
    shortcutPropagation: [{ type: Input }],
    monthColLimit: [{ type: Input }],
    yearColLimit: [{ type: Input }],
    customClass: [{ type: Input }],
    dateDisabled: [{ type: Input }],
    dayDisabled: [{ type: Input }],
    activeDate: [{ type: Input }],
    selectionDone: [{ type: Output }],
    activeDateChange: [{ type: Output }],
    _datePicker: [{ type: ViewChild, args: [DatePickerInnerComponent, { static: true },] }]
};
//# sourceMappingURL=datepicker.component.js.map