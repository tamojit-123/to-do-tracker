(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common'), require('ngx-bootstrap/collapse')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/accordion', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common', 'ngx-bootstrap/collapse'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].accordion = {}), global.ng.core, global.utils, global.ng.common, global.collapse));
}(this, (function (exports, i0, utils, common, collapse) { 'use strict';

    /**
     * Configuration service, provides default values for the AccordionComponent.
     */
    var AccordionConfig = /** @class */ (function () {
        function AccordionConfig() {
            /** Whether the other panels should be closed when a panel is opened */
            this.closeOthers = false;
            /** turn on/off animation */
            this.isAnimated = false;
        }
        return AccordionConfig;
    }());
    AccordionConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function AccordionConfig_Factory() { return new AccordionConfig(); }, token: AccordionConfig, providedIn: "root" });
    AccordionConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    /** Displays collapsible content panels for presenting information in a limited amount of space. */
    var AccordionComponent = /** @class */ (function () {
        function AccordionComponent(config) {
            /** turn on/off animation */
            this.isAnimated = false;
            /** if `true` expanding one item will close all others */
            this.closeOthers = false;
            this.groups = [];
            Object.assign(this, config);
        }
        AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
            if (!this.closeOthers) {
                return;
            }
            this.groups.forEach(function (group) {
                if (group !== openGroup) {
                    group.isOpen = false;
                }
            });
        };
        AccordionComponent.prototype.addGroup = function (group) {
            group.isAnimated = this.isAnimated;
            this.groups.push(group);
        };
        AccordionComponent.prototype.removeGroup = function (group) {
            var index = this.groups.indexOf(group);
            if (index !== -1) {
                this.groups.splice(index, 1);
            }
        };
        return AccordionComponent;
    }());
    AccordionComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'accordion',
                    template: "<ng-content></ng-content>",
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        '[attr.aria-multiselectable]': 'closeOthers',
                        role: 'tablist',
                        class: 'panel-group',
                        style: 'display: block'
                    }
                },] }
    ];
    AccordionComponent.ctorParameters = function () { return [
        { type: AccordionConfig }
    ]; };
    AccordionComponent.propDecorators = {
        isAnimated: [{ type: i0.Input }],
        closeOthers: [{ type: i0.Input }]
    };

    /**
     * ### Accordion heading
     * Instead of using `heading` attribute on the `accordion-group`, you can use
     * an `accordion-heading` attribute on `any` element inside of a group that
     * will be used as group's header template.
     */
    var AccordionPanelComponent = /** @class */ (function () {
        function AccordionPanelComponent(accordion) {
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
            this.isOpenChange = new i0.EventEmitter();
            this._isOpen = false;
            this.accordion = accordion;
        }
        Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
            // Questionable, maybe .panel-open should be on child div.panel element?
            /** Is accordion group open or closed. This property supports two-way binding */
            get: function () {
                return this._isOpen;
            },
            set: function (value) {
                var _this = this;
                if (value !== this.isOpen) {
                    if (value) {
                        this.accordion.closeOtherPanels(this);
                    }
                    this._isOpen = value;
                    Promise.resolve(null)
                        .then(function () {
                        _this.isOpenChange.emit(value);
                    });
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
            get: function () {
                return utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        AccordionPanelComponent.prototype.ngOnInit = function () {
            this.accordion.addGroup(this);
        };
        AccordionPanelComponent.prototype.ngOnDestroy = function () {
            this.accordion.removeGroup(this);
        };
        AccordionPanelComponent.prototype.toggleOpen = function () {
            if (!this.isDisabled) {
                this.isOpen = !this.isOpen;
            }
        };
        return AccordionPanelComponent;
    }());
    AccordionPanelComponent.decorators = [
        { type: i0.Component, args: [{
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
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: AccordionComponent, decorators: [{ type: i0.Inject, args: [AccordionComponent,] }] }
    ]; };
    AccordionPanelComponent.propDecorators = {
        heading: [{ type: i0.Input }],
        panelClass: [{ type: i0.Input }],
        isDisabled: [{ type: i0.Input }],
        isOpenChange: [{ type: i0.Output }],
        isOpen: [{ type: i0.HostBinding, args: ['class.panel-open',] }, { type: i0.Input }]
    };

    var AccordionModule = /** @class */ (function () {
        function AccordionModule() {
        }
        AccordionModule.forRoot = function () {
            return { ngModule: AccordionModule, providers: [] };
        };
        return AccordionModule;
    }());
    AccordionModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, collapse.CollapseModule],
                    declarations: [AccordionComponent, AccordionPanelComponent],
                    exports: [AccordionComponent, AccordionPanelComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AccordionComponent = AccordionComponent;
    exports.AccordionConfig = AccordionConfig;
    exports.AccordionModule = AccordionModule;
    exports.AccordionPanelComponent = AccordionPanelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-accordion.umd.js.map
