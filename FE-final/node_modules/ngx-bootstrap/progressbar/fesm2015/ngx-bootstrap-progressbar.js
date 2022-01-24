import { Component, ChangeDetectionStrategy, ElementRef, Renderer2, Input, ɵɵdefineInjectable, Injectable, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

class BarComponent {
    constructor(el, renderer) {
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
    get isBs3() {
        return isBs3();
    }
    ngOnChanges(changes) {
        var _a;
        if (changes.value || changes.max) {
            this.percent = 100 * (Number(changes.value.currentValue || 0)
                / Number((((_a = changes.max) === null || _a === void 0 ? void 0 : _a.currentValue) || this.max) || 100));
        }
        if (changes.type) {
            this.applyTypeClasses();
        }
    }
    applyTypeClasses() {
        if (this._prevType) {
            const barTypeClass = `progress-bar-${this._prevType}`;
            const bgClass = `bg-${this._prevType}`;
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = void 0;
        }
        if (this.type) {
            const barTypeClass = `progress-bar-${this.type}`;
            const bgClass = `bg-${this.type}`;
            this.renderer.addClass(this.el.nativeElement, barTypeClass);
            this.renderer.addClass(this.el.nativeElement, bgClass);
            this._prevType = this.type;
        }
    }
}
BarComponent.decorators = [
    { type: Component, args: [{
                selector: 'bar',
                template: "<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
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
BarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
BarComponent.propDecorators = {
    max: [{ type: Input }],
    value: [{ type: Input }],
    animate: [{ type: Input }],
    striped: [{ type: Input }],
    type: [{ type: Input }]
};

class ProgressbarConfig {
    constructor() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
}
ProgressbarConfig.ɵprov = ɵɵdefineInjectable({ factory: function ProgressbarConfig_Factory() { return new ProgressbarConfig(); }, token: ProgressbarConfig, providedIn: "root" });
ProgressbarConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

class ProgressbarComponent {
    constructor(config) {
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
    /** current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     */
    set value(value) {
        this.isStacked = Array.isArray(value);
        if (typeof value === 'number') {
            this._value = value;
            this._values = void 0;
        }
        else {
            this._value = void 0;
            this._values = value;
        }
    }
}
ProgressbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'progressbar',
                template: "<ng-container *ngIf=\"!isStacked then NotStacked else Stacked\"></ng-container>\n\n<ng-template #NotStacked>\n  <bar [type]=\"type\" [value]=\"_value\" [max]=\"max\" [animate]=\"animate\" [striped]=\"striped\">\n    <ng-content></ng-content>\n  </bar>\n</ng-template>\n\n<ng-template #Stacked>\n  <bar *ngFor=\"let item of _values\"\n       [type]=\"item.type\" [value]=\"item.value\" [max]=\"item.max\" [animate]=\"animate\" [striped]=\"striped\">{{ item.label }}</bar>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[class.progress]': 'true',
                    '[attr.max]': 'max'
                },
                styles: [`
    :host {
      width: 100%;
      display: flex;
    } `]
            },] }
];
ProgressbarComponent.ctorParameters = () => [
    { type: ProgressbarConfig }
];
ProgressbarComponent.propDecorators = {
    max: [{ type: Input }],
    animate: [{ type: Input }],
    striped: [{ type: Input }],
    type: [{ type: Input }],
    value: [{ type: Input }]
};

class ProgressbarModule {
    static forRoot() {
        return { ngModule: ProgressbarModule, providers: [] };
    }
}
ProgressbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [BarComponent, ProgressbarComponent],
                exports: [BarComponent, ProgressbarComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule };
//# sourceMappingURL=ngx-bootstrap-progressbar.js.map
