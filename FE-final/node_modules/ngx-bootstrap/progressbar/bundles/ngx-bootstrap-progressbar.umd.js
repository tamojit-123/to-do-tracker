(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/progressbar', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].progressbar = {}), global.ng.core, global.utils, global.ng.common));
}(this, (function (exports, i0, utils, common) { 'use strict';

    var BarComponent = /** @class */ (function () {
        function BarComponent(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            /** maximum total value of progress element */
            this.max = 100;
            /** current value of progress bar */
            this.value = 0;
            /** if `true` changing value of progress bar will be animated */
            this.animate = false;
            /** If `true`, striped classes are applied */
            this.striped = false;
            /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
            this.type = 'info';
            this.percent = 100;
        }
        Object.defineProperty(BarComponent.prototype, "isBs3", {
            get: function () {
                return utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        BarComponent.prototype.ngOnChanges = function (changes) {
            var _a;
            if (changes.value || changes.max) {
                this.percent = 100 * (Number(changes.value.currentValue || 0)
                    / Number((((_a = changes.max) === null || _a === void 0 ? void 0 : _a.currentValue) || this.max) || 100));
            }
            if (changes.type) {
                this.applyTypeClasses();
            }
        };
        BarComponent.prototype.applyTypeClasses = function () {
            if (this._prevType) {
                var barTypeClass = "progress-bar-" + this._prevType;
                var bgClass = "bg-" + this._prevType;
                this.renderer.removeClass(this.el.nativeElement, barTypeClass);
                this.renderer.removeClass(this.el.nativeElement, bgClass);
                this._prevType = void 0;
            }
            if (this.type) {
                var barTypeClass = "progress-bar-" + this.type;
                var bgClass = "bg-" + this.type;
                this.renderer.addClass(this.el.nativeElement, barTypeClass);
                this.renderer.addClass(this.el.nativeElement, bgClass);
                this._prevType = this.type;
            }
        };
        return BarComponent;
    }());
    BarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bar',
                    template: "<ng-content></ng-content>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        role: 'progressbar',
                        'aria-valuemin': '0',
                        '[class.progress-bar]': 'true',
                        '[class.progress-bar-animated]': '!isBs3 && animate',
                        '[class.progress-bar-striped]': 'striped',
                        '[class.active]': 'isBs3 && animate',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                        '[attr.aria-valuemax]': 'max',
                        '[style.height.%]': '"100"',
                        '[style.width.%]': 'percent'
                    }
                },] }
    ];
    BarComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.Renderer2 }
    ]; };
    BarComponent.propDecorators = {
        max: [{ type: i0.Input }],
        value: [{ type: i0.Input }],
        animate: [{ type: i0.Input }],
        striped: [{ type: i0.Input }],
        type: [{ type: i0.Input }]
    };

    var ProgressbarConfig = /** @class */ (function () {
        function ProgressbarConfig() {
            /** if `true` changing value of progress bar will be animated */
            this.animate = false;
            /** maximum total value of progress element */
            this.max = 100;
        }
        return ProgressbarConfig;
    }());
    ProgressbarConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProgressbarConfig_Factory() { return new ProgressbarConfig(); }, token: ProgressbarConfig, providedIn: "root" });
    ProgressbarConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var ProgressbarComponent = /** @class */ (function () {
        function ProgressbarComponent(config) {
            /** maximum total value of progress element */
            this.max = 100;
            /** if `true` changing value of progress bar will be animated */
            this.animate = false;
            /** If `true`, striped classes are applied */
            this.striped = false;
            this.isStacked = false;
            this._value = 0;
            Object.assign(this, config);
        }
        Object.defineProperty(ProgressbarComponent.prototype, "value", {
            /** current value of progress bar. Could be a number or array of objects
             * like {"value":15,"type":"info","label":"15 %"}
             */
            set: function (value) {
                this.isStacked = Array.isArray(value);
                if (typeof value === 'number') {
                    this._value = value;
                    this._values = void 0;
                }
                else {
                    this._value = void 0;
                    this._values = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        return ProgressbarComponent;
    }());
    ProgressbarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'progressbar',
                    template: "<ng-container *ngIf=\"!isStacked then NotStacked else Stacked\"></ng-container>\n\n<ng-template #NotStacked>\n  <bar [type]=\"type\" [value]=\"_value\" [max]=\"max\" [animate]=\"animate\" [striped]=\"striped\">\n    <ng-content></ng-content>\n  </bar>\n</ng-template>\n\n<ng-template #Stacked>\n  <bar *ngFor=\"let item of _values\"\n       [type]=\"item.type\" [value]=\"item.value\" [max]=\"item.max\" [animate]=\"animate\" [striped]=\"striped\">{{ item.label }}</bar>\n</ng-template>\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        '[class.progress]': 'true',
                        '[attr.max]': 'max'
                    },
                    styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    } "]
                },] }
    ];
    ProgressbarComponent.ctorParameters = function () { return [
        { type: ProgressbarConfig }
    ]; };
    ProgressbarComponent.propDecorators = {
        max: [{ type: i0.Input }],
        animate: [{ type: i0.Input }],
        striped: [{ type: i0.Input }],
        type: [{ type: i0.Input }],
        value: [{ type: i0.Input }]
    };

    var ProgressbarModule = /** @class */ (function () {
        function ProgressbarModule() {
        }
        ProgressbarModule.forRoot = function () {
            return { ngModule: ProgressbarModule, providers: [] };
        };
        return ProgressbarModule;
    }());
    ProgressbarModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [BarComponent, ProgressbarComponent],
                    exports: [BarComponent, ProgressbarComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BarComponent = BarComponent;
    exports.ProgressbarComponent = ProgressbarComponent;
    exports.ProgressbarConfig = ProgressbarConfig;
    exports.ProgressbarModule = ProgressbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-progressbar.umd.js.map
