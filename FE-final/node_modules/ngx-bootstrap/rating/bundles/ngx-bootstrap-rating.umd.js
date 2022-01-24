(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/rating', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].rating = {}), global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, i0, forms, common) { 'use strict';

    /** Default values provider for rating */
    var RatingConfig = /** @class */ (function () {
        function RatingConfig() {
            /** aria label for rating */
            this.ariaLabel = 'rating';
        }
        return RatingConfig;
    }());
    RatingConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function RatingConfig_Factory() { return new RatingConfig(); }, token: RatingConfig, providedIn: "root" });
    RatingConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var RATING_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return RatingComponent; }),
        multi: true
    };
    var RatingComponent = /** @class */ (function () {
        function RatingComponent(changeDetection, config) {
            this.changeDetection = changeDetection;
            /** number of icons */
            this.max = 5;
            /** if true will not react on any user events */
            this.readonly = false;
            /** array of icons titles, default: (["one", "two", "three", "four", "five"]) */
            this.titles = [];
            /** fired when icon selected, $event:number equals to selected rating */
            this.onHover = new i0.EventEmitter();
            /** fired when icon selected, $event:number equals to previous rating value */
            this.onLeave = new i0.EventEmitter();
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
            /** aria label for rating */
            this.ariaLabel = 'rating';
            this.range = [];
            this.value = 0;
            Object.assign(this, config);
        }
        RatingComponent.prototype.onKeydown = function (event) {
            if ([37, 38, 39, 40].indexOf(event.which) === -1) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            var sign = event.which === 38 || event.which === 39 ? 1 : -1;
            this.rate(this.value + sign);
        };
        RatingComponent.prototype.ngOnInit = function () {
            this.max = this.max || 5;
            this.titles =
                typeof this.titles !== 'undefined' && this.titles.length > 0
                    ? this.titles
                    : [];
            this.range = this.buildTemplateObjects(this.max);
        };
        // model -> view
        RatingComponent.prototype.writeValue = function (value) {
            if (value % 1 !== value) {
                this.value = Math.round(value);
                this.preValue = value;
                this.changeDetection.markForCheck();
                return;
            }
            this.preValue = value;
            this.value = value;
            this.changeDetection.markForCheck();
        };
        RatingComponent.prototype.enter = function (value) {
            if (!this.readonly) {
                this.value = value;
                this.changeDetection.markForCheck();
                this.onHover.emit(value);
            }
        };
        RatingComponent.prototype.reset = function () {
            if (typeof this.preValue === 'number') {
                this.value = Math.round(this.preValue);
                this.changeDetection.markForCheck();
                this.onLeave.emit(this.value);
            }
        };
        RatingComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        RatingComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        RatingComponent.prototype.rate = function (value) {
            if (!this.readonly && this.range
                && value >= 0 && value <= this.range.length) {
                this.writeValue(value);
                this.onChange(value);
            }
        };
        RatingComponent.prototype.buildTemplateObjects = function (max) {
            var result = [];
            for (var i = 0; i < max; i++) {
                result.push({
                    index: i,
                    title: this.titles[i] || i + 1
                });
            }
            return result;
        };
        return RatingComponent;
    }());
    RatingComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'rating',
                    template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\n      role=\"slider\" aria-valuemin=\"0\"\n      [attr.aria-label]=\"ariaLabel\"\n      [attr.aria-valuemax]=\"range.length\"\n      [attr.aria-valuenow]=\"value\">\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n    <span class=\"sr-only visually-hidden\">({{ index < value ? '*' : ' ' }})</span>\n    <span class=\"bs-rating-star\"\n          (mouseenter)=\"enter(index + 1)\"\n          (click)=\"rate(index + 1)\"\n          [title]=\"r.title\"\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\n          [class.active]=\"index < value\">\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\n      </ng-template>\n    </span>\n  </ng-template>\n</span>\n",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR],
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    RatingComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: RatingConfig }
    ]; };
    RatingComponent.propDecorators = {
        max: [{ type: i0.Input }],
        readonly: [{ type: i0.Input }],
        titles: [{ type: i0.Input }],
        customTemplate: [{ type: i0.Input }],
        onHover: [{ type: i0.Output }],
        onLeave: [{ type: i0.Output }],
        onKeydown: [{ type: i0.HostListener, args: ['keydown', ['$event'],] }]
    };

    var RatingModule = /** @class */ (function () {
        function RatingModule() {
        }
        RatingModule.forRoot = function () {
            return {
                ngModule: RatingModule,
                providers: []
            };
        };
        return RatingModule;
    }());
    RatingModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [RatingComponent],
                    exports: [RatingComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.RatingComponent = RatingComponent;
    exports.RatingConfig = RatingConfig;
    exports.RatingModule = RatingModule;
    exports.ɵa = RATING_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-rating.umd.js.map
