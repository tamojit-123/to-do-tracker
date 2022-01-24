import { Subscription } from 'rxjs';
export class BsDatepickerAbstractComponent {
    constructor() {
        this.containerClass = '';
        this.customRanges = [];
        this.chosenRange = [];
        this._daysCalendarSub = new Subscription();
    }
    set minDate(value) {
        var _a;
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setMinDate(value);
    }
    set maxDate(value) {
        var _a;
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setMaxDate(value);
    }
    set daysDisabled(value) {
        var _a;
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDaysDisabled(value);
    }
    set datesDisabled(value) {
        var _a;
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDatesDisabled(value);
    }
    set datesEnabled(value) {
        var _a;
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDatesEnabled(value);
    }
    set isDisabled(value) {
        var _a;
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDisabled(value);
    }
    set dateCustomClasses(value) {
        var _a;
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDateCustomClasses(value);
    }
    set dateTooltipTexts(value) {
        var _a;
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDateTooltipTexts(value);
    }
    set daysCalendar$(value) {
        this._daysCalendar$ = value;
        this._daysCalendarSub.unsubscribe();
        this._daysCalendarSub.add(this._daysCalendar$.subscribe(value => {
            this.multipleCalendars = !!value && value.length > 1;
        }));
    }
    get daysCalendar$() {
        return this._daysCalendar$;
    }
    // todo: valorkin fix
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
    setViewMode(event) { }
    // eslint-disable-next-line
    navigateTo(event) { }
    // eslint-disable-next-line
    dayHoverHandler(event) { }
    // eslint-disable-next-line
    weekHoverHandler(event) { }
    // eslint-disable-next-line
    monthHoverHandler(event) { }
    // eslint-disable-next-line
    yearHoverHandler(event) { }
    // eslint-disable-next-line
    daySelectHandler(day) { }
    // eslint-disable-next-line
    monthSelectHandler(event) { }
    // eslint-disable-next-line
    yearSelectHandler(event) { }
    // eslint-disable-next-line
    setRangeOnCalendar(dates) { }
    // eslint-disable-next-line
    setToday() { }
    // eslint-disable-next-line
    clearDate() { }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _stopPropagation(event) {
        event.stopPropagation();
    }
}
//# sourceMappingURL=bs-datepicker-container.js.map