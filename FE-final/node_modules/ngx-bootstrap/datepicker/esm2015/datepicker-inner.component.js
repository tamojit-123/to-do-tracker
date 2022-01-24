import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateFormatter } from './date-formatter';
export class DatePickerInnerComponent {
    constructor() {
        this.monthColLimit = 0;
        this.yearColLimit = 0;
        this.selectionDone = new EventEmitter(undefined);
        this.update = new EventEmitter(false);
        this.activeDateChange = new EventEmitter(undefined);
        this.stepDay = {};
        this.stepMonth = {};
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new DateFormatter();
    }
    get activeDate() {
        return this._activeDate;
    }
    set activeDate(value) {
        this._activeDate = value;
    }
    // todo: add formatter value to Date object
    ngOnInit() {
        // todo: use date for unique value
        this.uniqueId = `datepicker--${Math.floor(Math.random() * 10000)}`;
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    }
    // this.refreshView should be called here to reflect the changes on the fly
    ngOnChanges(changes) {
        this.refreshView();
        this.checkIfActiveDateGotUpdated(changes.activeDate);
    }
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    checkIfActiveDateGotUpdated(activeDate) {
        if (activeDate && !activeDate.firstChange) {
            const previousValue = activeDate.previousValue;
            if (previousValue &&
                previousValue instanceof Date &&
                previousValue.getTime() !== activeDate.currentValue.getTime()) {
                this.activeDateChange.emit(this.activeDate);
            }
        }
    }
    setCompareHandler(handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    }
    compare(date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    }
    setRefreshViewHandler(handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    }
    refreshView() {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    }
    dateFilter(date, format) {
        return this.dateFormatter.format(date, format, this.locale);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isActive(dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createDateObject(date, format) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.date = this.fixTimeZone(dateObject.date);
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    split(arr, size) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    }
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    fixTimeZone(date) {
        const hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    }
    select(date, isManual = true) {
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual && this.datepickerMode) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            }
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    }
    move(direction) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep && this.activeDate) {
            const year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            const month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
        }
    }
    toggleMode(_direction) {
        const direction = _direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        if (this.datepickerMode) {
            this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        }
        this.refreshView();
    }
    getCustomClassForDate(date) {
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        const customClassObject = this.customClass.find((customClass) => {
            return (customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === this.datepickerMode);
        }, this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    }
    compareDateDisabled(date1Disabled, date2) {
        if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
        }
        if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
        }
        return undefined;
    }
    isDisabled(date) {
        let isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach((disabledDate) => {
                if (this.compareDateDisabled(disabledDate, date) === 0) {
                    isDateDisabled = true;
                }
            });
        }
        if (this.dayDisabled) {
            isDateDisabled =
                isDateDisabled ||
                    this.dayDisabled.indexOf(date.getDay()) > -1;
        }
        if (isDateDisabled) {
            return isDateDisabled;
        }
        const minDate = Number(this.minDate && this.compare(date, this.minDate));
        if (!isNaN(minDate)) {
            return minDate < 0;
        }
        const maxDate = Number(this.maxDate && this.compare(date, this.maxDate));
        if (!isNaN(maxDate)) {
            return maxDate > 0;
        }
        return false;
    }
}
DatePickerInnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-inner',
                template: `
    <!--&lt;!&ndash;ng-keydown="keydown($event)"&ndash;&gt;-->
    <div *ngIf='datepickerMode' class='well well-sm bg-faded p-a card' role='application'>
      <ng-content></ng-content>
    </div>
  `
            },] }
];
DatePickerInnerComponent.propDecorators = {
    locale: [{ type: Input }],
    datepickerMode: [{ type: Input }],
    startingDay: [{ type: Input }],
    yearRange: [{ type: Input }],
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
    onlyCurrentMonth: [{ type: Input }],
    shortcutPropagation: [{ type: Input }],
    customClass: [{ type: Input }],
    monthColLimit: [{ type: Input }],
    yearColLimit: [{ type: Input }],
    dateDisabled: [{ type: Input }],
    dayDisabled: [{ type: Input }],
    initDate: [{ type: Input }],
    selectionDone: [{ type: Output }],
    update: [{ type: Output }],
    activeDateChange: [{ type: Output }],
    activeDate: [{ type: Input }]
};
//# sourceMappingURL=datepicker-inner.component.js.map