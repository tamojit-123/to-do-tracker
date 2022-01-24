import { Component, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { take } from 'rxjs/operators';
import { getFullYear, getMonth } from 'ngx-bootstrap/chronos';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { datepickerAnimation } from '../../datepicker-animations';
import { BsDatepickerAbstractComponent } from '../../base/bs-datepicker-container';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
export class BsDatepickerContainerComponent extends BsDatepickerAbstractComponent {
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
        super();
        this._config = _config;
        this._store = _store;
        this._element = _element;
        this._actions = _actions;
        this._positionService = _positionService;
        this.valueChange = new EventEmitter();
        this.animationState = 'void';
        this._subs = [];
        this._effects = _effects;
        _renderer.setStyle(_element.nativeElement, 'display', 'block');
        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
    }
    set value(value) {
        var _a;
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setValue(value);
    }
    ngOnInit() {
        var _a, _b;
        this._positionService.setOptions({
            modifiers: { flip: { enabled: this._config.adaptivePosition } },
            allowedPositions: ['top', 'bottom']
        });
        (_a = this._positionService.event$) === null || _a === void 0 ? void 0 : _a.pipe(take(1)).subscribe(() => {
            this._positionService.disable();
            if (this._config.isAnimated) {
                this.animationState = this.isTopPosition ? 'animated-up' : 'animated-down';
                return;
            }
            this.animationState = 'unanimated';
        });
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this.containerClass = this._config.containerClass;
        this.showTodayBtn = this._config.showTodayButton;
        this.todayBtnLbl = this._config.todayButtonLabel;
        this.todayPos = this._config.todayPosition;
        this.showClearBtn = this._config.showClearButton;
        this.clearBtnLbl = this._config.clearButtonLabel;
        this.clearPos = this._config.clearPosition;
        this.customRangeBtnLbl = this._config.customRangeButtonLabel;
        (_b = this._effects) === null || _b === void 0 ? void 0 : _b.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .select((state) => state.selectedDate)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .subscribe((date) => this.valueChange.emit(date)));
        this._store.dispatch(this._actions.changeViewMode(this._config.startView));
    }
    get isTopPosition() {
        return this._element.nativeElement.classList.contains('top');
    }
    positionServiceEnable() {
        this._positionService.enable();
    }
    daySelectHandler(day) {
        if (!day) {
            return;
        }
        const isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    }
    monthSelectHandler(day) {
        if (!day || day.isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.navigateTo({
            unit: {
                month: getMonth(day.date),
                year: getFullYear(day.date)
            },
            viewMode: 'day'
        }));
    }
    yearSelectHandler(day) {
        if (!day || day.isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.navigateTo({
            unit: {
                year: getFullYear(day.date)
            },
            viewMode: 'month'
        }));
    }
    setToday() {
        this._store.dispatch(this._actions.select(new Date()));
    }
    clearDate() {
        this._store.dispatch(this._actions.select(undefined));
    }
    ngOnDestroy() {
        var _a;
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.destroy();
    }
}
BsDatepickerContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-datepicker-container',
                providers: [BsDatepickerStore, BsDatepickerEffects],
                template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar$ | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          [options]=\"options$ | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\n      <div class=\"btn-today-wrapper\"\n           [class.today-left]=\"todayPos === 'left'\"\n           [class.today-right]=\"todayPos === 'right'\"\n           [class.today-center]=\"todayPos === 'center'\"\n           *ngIf=\"showTodayBtn\">\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\n      </div>\n\n        <div class=\"btn-clear-wrapper\"\n        [class.clear-left]=\"clearPos === 'left'\"\n        [class.clear-right]=\"clearPos === 'right'\"\n        [class.clear-center]=\"clearPos === 'center'\"\n        *ngIf=\"showClearBtn\">\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\n        </div>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\n    <bs-custom-date-view\n      [selectedRange]=\"chosenRange\"\n      [ranges]=\"customRanges\"\n      [customRangeLabel]=\"customRangeBtnLbl\"\n      (onSelect)=\"setRangeOnCalendar($event)\">\n    </bs-custom-date-view>\n  </div>\n</div>\n",
                host: {
                    class: 'bottom',
                    '(click)': '_stopPropagation($event)',
                    role: 'dialog',
                    'aria-label': 'calendar'
                },
                animations: [datepickerAnimation]
            },] }
];
BsDatepickerContainerComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: BsDatepickerConfig },
    { type: BsDatepickerStore },
    { type: ElementRef },
    { type: BsDatepickerActions },
    { type: BsDatepickerEffects },
    { type: PositioningService }
];
//# sourceMappingURL=bs-datepicker-container.component.js.map