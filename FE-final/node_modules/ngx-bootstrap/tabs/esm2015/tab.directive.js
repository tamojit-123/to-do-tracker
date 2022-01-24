import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
export class TabDirective {
    constructor(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** if true tab can not be activated */
        this.disabled = false;
        /** if true tab can be removable, additional button will appear */
        this.removable = false;
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.selectTab = new EventEmitter();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new EventEmitter();
        /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.role = 'tabpanel';
        this._active = false;
        this._customClass = '';
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
    get customClass() {
        return this._customClass;
    }
    set customClass(customClass) {
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
            });
        }
        this._customClass = customClass ? customClass.trim() : '';
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.addClass(this.elementRef.nativeElement, cssClass);
            });
        }
    }
    /** tab active state toggle */
    get active() {
        return this._active;
    }
    set active(active) {
        if (this._active === active) {
            return;
        }
        if ((this.disabled && active) || !active) {
            if (this._active && !active) {
                this.deselect.emit(this);
                this._active = active;
            }
            return;
        }
        this._active = active;
        this.selectTab.emit(this);
        this.tabset.tabs.forEach((tab) => {
            if (tab !== this) {
                tab.active = false;
            }
        });
    }
    get ariaLabelledby() {
        return this.id ? `${this.id}-link` : '';
    }
    ngOnInit() {
        this.removable = !!this.removable;
    }
    ngOnDestroy() {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    }
}
TabDirective.decorators = [
    { type: Directive, args: [{ selector: 'tab, [tab]', exportAs: 'tab' },] }
];
TabDirective.ctorParameters = () => [
    { type: TabsetComponent },
    { type: ElementRef },
    { type: Renderer2 }
];
TabDirective.propDecorators = {
    heading: [{ type: Input }],
    id: [{ type: HostBinding, args: ['attr.id',] }, { type: Input }],
    disabled: [{ type: Input }],
    removable: [{ type: Input }],
    customClass: [{ type: Input }],
    active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
    selectTab: [{ type: Output }],
    deselect: [{ type: Output }],
    removed: [{ type: Output }],
    addClass: [{ type: HostBinding, args: ['class.tab-pane',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    ariaLabelledby: [{ type: HostBinding, args: ['attr.aria-labelledby',] }]
};
//# sourceMappingURL=tab.directive.js.map