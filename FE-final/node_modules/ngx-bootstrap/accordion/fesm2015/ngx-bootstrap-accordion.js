import { ɵɵdefineInjectable, Injectable, Component, Input, EventEmitter, Inject, Output, HostBinding, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';

/**
 * Configuration service, provides default values for the AccordionComponent.
 */
class AccordionConfig {
    constructor() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
        /** turn on/off animation */
        this.isAnimated = false;
    }
}
AccordionConfig.ɵprov = ɵɵdefineInjectable({ factory: function AccordionConfig_Factory() { return new AccordionConfig(); }, token: AccordionConfig, providedIn: "root" });
AccordionConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

/** Displays collapsible content panels for presenting information in a limited amount of space. */
class AccordionComponent {
    constructor(config) {
        /** turn on/off animation */
        this.isAnimated = false;
        /** if `true` expanding one item will close all others */
        this.closeOthers = false;
        this.groups = [];
        Object.assign(this, config);
    }
    closeOtherPanels(openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach((group) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    }
    addGroup(group) {
        group.isAnimated = this.isAnimated;
        this.groups.push(group);
    }
    removeGroup(group) {
        const index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'accordion',
                template: `<ng-content></ng-content>`,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[attr.aria-multiselectable]': 'closeOthers',
                    role: 'tablist',
                    class: 'panel-group',
                    style: 'display: block'
                }
            },] }
];
AccordionComponent.ctorParameters = () => [
    { type: AccordionConfig }
];
AccordionComponent.propDecorators = {
    isAnimated: [{ type: Input }],
    closeOthers: [{ type: Input }]
};

/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
class AccordionPanelComponent {
    constructor(accordion) {
        /** turn on/off animation */
        this.isAnimated = false;
        /** Provides an ability to use Bootstrap's contextual panel classes
         * (`panel-primary`, `panel-success`, `panel-info`, etc...).
         * List of all available classes [available here]
         * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
         */
        this.panelClass = 'panel-default';
        /** if <code>true</code> — disables accordion group */
        this.isDisabled = false;
        /** Emits when the opened state changes */
        this.isOpenChange = new EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    // Questionable, maybe .panel-open should be on child div.panel element?
    /** Is accordion group open or closed. This property supports two-way binding */
    get isOpen() {
        return this._isOpen;
    }
    set isOpen(value) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            Promise.resolve(null)
                .then(() => {
                this.isOpenChange.emit(value);
            });
        }
    }
    get isBs3() {
        return isBs3();
    }
    ngOnInit() {
        this.accordion.addGroup(this);
    }
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
AccordionPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'accordion-group, accordion-panel',
                template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div\n    class=\"panel-heading card-header\"\n    role=\"tab\"\n    (click)=\"toggleOpen()\"\n    [ngClass]=\"isDisabled ? 'panel-disabled' : 'panel-enabled'\"\n  >\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{ 'text-muted': isDisabled }\" type=\"button\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    class: 'panel',
                    style: 'display: block'
                },
                styles: [":host .card-header.panel-enabled{cursor:pointer}:host .card-header.panel-disabled .btn.btn-link{cursor:default;text-decoration:none}"]
            },] }
];
AccordionPanelComponent.ctorParameters = () => [
    { type: AccordionComponent, decorators: [{ type: Inject, args: [AccordionComponent,] }] }
];
AccordionPanelComponent.propDecorators = {
    heading: [{ type: Input }],
    panelClass: [{ type: Input }],
    isDisabled: [{ type: Input }],
    isOpenChange: [{ type: Output }],
    isOpen: [{ type: HostBinding, args: ['class.panel-open',] }, { type: Input }]
};

class AccordionModule {
    static forRoot() {
        return { ngModule: AccordionModule, providers: [] };
    }
}
AccordionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CollapseModule],
                declarations: [AccordionComponent, AccordionPanelComponent],
                exports: [AccordionComponent, AccordionPanelComponent]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent };
//# sourceMappingURL=ngx-bootstrap-accordion.js.map
