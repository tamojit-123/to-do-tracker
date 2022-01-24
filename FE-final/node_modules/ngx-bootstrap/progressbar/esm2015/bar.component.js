import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
export class BarComponent {
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
//# sourceMappingURL=bar.component.js.map