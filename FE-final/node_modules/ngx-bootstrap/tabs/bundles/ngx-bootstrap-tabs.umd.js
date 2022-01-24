(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/tabs', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].tabs = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var NgTranscludeDirective = /** @class */ (function () {
        function NgTranscludeDirective(viewRef) {
            this.viewRef = viewRef;
        }
        Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get: function () {
                return this._ngTransclude;
            },
            set: function (templateRef) {
                this._ngTransclude = templateRef;
                if (templateRef) {
                    this.viewRef.createEmbeddedView(templateRef);
                }
            },
            enumerable: false,
            configurable: true
        });
        return NgTranscludeDirective;
    }());
    NgTranscludeDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[ngTransclude]'
                },] }
    ];
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: i0.ViewContainerRef }
    ]; };
    NgTranscludeDirective.propDecorators = {
        ngTransclude: [{ type: i0.Input }]
    };

    var TabsetConfig = /** @class */ (function () {
        function TabsetConfig() {
            /** provides default navigation context class: 'tabs' or 'pills' */
            this.type = 'tabs';
            /** provides possibility to set keyNavigations enable or disable, by default is enable */
            this.isKeysAllowed = true;
            /** aria label for tab list */
            this.ariaLabel = 'Tabs';
        }
        return TabsetConfig;
    }());
    TabsetConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function TabsetConfig_Factory() { return new TabsetConfig(); }, token: TabsetConfig, providedIn: "root" });
    TabsetConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    // todo: add active event to tab
    // todo: fix? mixing static and dynamic tabs position tabs in order of creation
    var TabsetComponent = /** @class */ (function () {
        function TabsetComponent(config, renderer, elementRef) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.clazz = true;
            this.tabs = [];
            this.classMap = {};
            /** aria label for tab list */
            this.ariaLabel = 'Tabs';
            this.isDestroyed = false;
            this._vertical = false;
            this._justified = false;
            this._type = 'tabs';
            this._isKeysAllowed = true;
            Object.assign(this, config);
        }
        Object.defineProperty(TabsetComponent.prototype, "vertical", {
            /** if true tabs will be placed vertically */
            get: function () {
                return this._vertical;
            },
            set: function (value) {
                this._vertical = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabsetComponent.prototype, "justified", {
            /** if true tabs fill the container and have a consistent width */
            get: function () {
                return this._justified;
            },
            set: function (value) {
                this._justified = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabsetComponent.prototype, "type", {
            /** navigation context class: 'tabs' or 'pills' */
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabsetComponent.prototype, "isKeysAllowed", {
            get: function () {
                return this._isKeysAllowed;
            },
            set: function (value) {
                this._isKeysAllowed = value;
            },
            enumerable: false,
            configurable: true
        });
        TabsetComponent.prototype.ngOnDestroy = function () {
            this.isDestroyed = true;
        };
        TabsetComponent.prototype.addTab = function (tab) {
            this.tabs.push(tab);
            tab.active = this.tabs.length === 1 && !tab.active;
        };
        TabsetComponent.prototype.removeTab = function (tab, options) {
            if (options === void 0) { options = { reselect: true, emit: true }; }
            var index = this.tabs.indexOf(tab);
            if (index === -1 || this.isDestroyed) {
                return;
            }
            // Select a new tab if the tab to be removed is selected and not destroyed
            if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
                var newActiveIndex = this.getClosestTabIndex(index);
                this.tabs[newActiveIndex].active = true;
            }
            if (options.emit) {
                tab.removed.emit(tab);
            }
            this.tabs.splice(index, 1);
            if (tab.elementRef.nativeElement.parentNode) {
                this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
            }
        };
        TabsetComponent.prototype.keyNavActions = function (event, index) {
            if (!this.isKeysAllowed) {
                return;
            }
            var list = Array.from(this.elementRef.nativeElement.querySelectorAll('.nav-link'));
            // const activeElList = list.filter((el: HTMLElement) => !el.classList.contains('disabled'));
            if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
                event.preventDefault();
                var currentTab = list[(index) % list.length];
                currentTab.click();
                return;
            }
            if (event.keyCode === 39 || event.key === 'RightArrow') {
                var nextTab = void 0;
                var shift = 1;
                do {
                    nextTab = list[(index + shift) % list.length];
                    shift++;
                } while (nextTab.classList.contains('disabled'));
                nextTab.focus();
                return;
            }
            if (event.keyCode === 37 || event.key === 'LeftArrow') {
                var previousTab = void 0;
                var shift = 1;
                var i = index;
                do {
                    if ((i - shift) < 0) {
                        i = list.length - 1;
                        previousTab = list[i];
                        shift = 0;
                    }
                    else {
                        previousTab = list[i - shift];
                    }
                    shift++;
                } while (previousTab.classList.contains('disabled'));
                previousTab.focus();
                return;
            }
            if (event.keyCode === 36 || event.key === 'Home') {
                event.preventDefault();
                var firstTab = void 0;
                var shift = 0;
                do {
                    firstTab = list[shift % list.length];
                    shift++;
                } while (firstTab.classList.contains('disabled'));
                firstTab.focus();
                return;
            }
            if (event.keyCode === 35 || event.key === 'End') {
                event.preventDefault();
                var lastTab = void 0;
                var shift = 1;
                var i = index;
                do {
                    if ((i - shift) < 0) {
                        i = list.length - 1;
                        lastTab = list[i];
                        shift = 0;
                    }
                    else {
                        lastTab = list[i - shift];
                    }
                    shift++;
                } while (lastTab.classList.contains('disabled'));
                lastTab.focus();
                return;
            }
            if (event.keyCode === 46 || event.key === 'Delete') {
                if (this.tabs[index].removable) {
                    this.removeTab(this.tabs[index]);
                    if (list[index + 1]) {
                        list[(index + 1) % list.length].focus();
                        return;
                    }
                    if (list[list.length - 1]) {
                        list[0].focus();
                    }
                }
            }
        };
        TabsetComponent.prototype.getClosestTabIndex = function (index) {
            var tabsLength = this.tabs.length;
            if (!tabsLength) {
                return -1;
            }
            for (var step = 1; step <= tabsLength; step += 1) {
                var prevIndex = index - step;
                var nextIndex = index + step;
                if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                    return prevIndex;
                }
                if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                    return nextIndex;
                }
            }
            return -1;
        };
        TabsetComponent.prototype.hasAvailableTabs = function (index) {
            var tabsLength = this.tabs.length;
            if (!tabsLength) {
                return false;
            }
            for (var i = 0; i < tabsLength; i += 1) {
                if (!this.tabs[i].disabled && i !== index) {
                    return true;
                }
            }
            return false;
        };
        TabsetComponent.prototype.setClassMap = function () {
            var _a;
            this.classMap = (_a = {
                    'nav-stacked': this.vertical,
                    'flex-column': this.vertical,
                    'nav-justified': this.justified
                },
                _a["nav-" + this.type] = true,
                _a);
        };
        return TabsetComponent;
    }());
    TabsetComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'tabset',
                    template: "<ul class=\"nav\" [ngClass]=\"classMap\"\n    (click)=\"$event.preventDefault()\"\n    [attr.aria-label]=\"ariaLabel\"\n    role=\"tablist\">\n  <li *ngFor=\"let tabz of tabs; let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (keydown)=\"keyNavActions($event, i)\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\" role=\"tab\"\n       [attr.aria-controls]=\"tabz.id ? tabz.id : ''\"\n       [attr.aria-selected]=\"!!tabz.active\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}"]
                },] }
    ];
    TabsetComponent.ctorParameters = function () { return [
        { type: TabsetConfig },
        { type: i0.Renderer2 },
        { type: i0.ElementRef }
    ]; };
    TabsetComponent.propDecorators = {
        vertical: [{ type: i0.Input }],
        justified: [{ type: i0.Input }],
        type: [{ type: i0.Input }],
        clazz: [{ type: i0.HostBinding, args: ['class.tab-container',] }]
    };

    var TabDirective = /** @class */ (function () {
        function TabDirective(tabset, elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            /** if true tab can not be activated */
            this.disabled = false;
            /** if true tab can be removable, additional button will appear */
            this.removable = false;
            /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
            this.selectTab = new i0.EventEmitter();
            /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
            this.deselect = new i0.EventEmitter();
            /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
            this.removed = new i0.EventEmitter();
            this.addClass = true;
            this.role = 'tabpanel';
            this._active = false;
            this._customClass = '';
            this.tabset = tabset;
            this.tabset.addTab(this);
        }
        Object.defineProperty(TabDirective.prototype, "customClass", {
            /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
            get: function () {
                return this._customClass;
            },
            set: function (customClass) {
                var _this = this;
                if (this.customClass) {
                    this.customClass.split(' ').forEach(function (cssClass) {
                        _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                    });
                }
                this._customClass = customClass ? customClass.trim() : '';
                if (this.customClass) {
                    this.customClass.split(' ').forEach(function (cssClass) {
                        _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                    });
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabDirective.prototype, "active", {
            /** tab active state toggle */
            get: function () {
                return this._active;
            },
            set: function (active) {
                var _this = this;
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
                this.tabset.tabs.forEach(function (tab) {
                    if (tab !== _this) {
                        tab.active = false;
                    }
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabDirective.prototype, "ariaLabelledby", {
            get: function () {
                return this.id ? this.id + "-link" : '';
            },
            enumerable: false,
            configurable: true
        });
        TabDirective.prototype.ngOnInit = function () {
            this.removable = !!this.removable;
        };
        TabDirective.prototype.ngOnDestroy = function () {
            this.tabset.removeTab(this, { reselect: false, emit: false });
        };
        return TabDirective;
    }());
    TabDirective.decorators = [
        { type: i0.Directive, args: [{ selector: 'tab, [tab]', exportAs: 'tab' },] }
    ];
    TabDirective.ctorParameters = function () { return [
        { type: TabsetComponent },
        { type: i0.ElementRef },
        { type: i0.Renderer2 }
    ]; };
    TabDirective.propDecorators = {
        heading: [{ type: i0.Input }],
        id: [{ type: i0.HostBinding, args: ['attr.id',] }, { type: i0.Input }],
        disabled: [{ type: i0.Input }],
        removable: [{ type: i0.Input }],
        customClass: [{ type: i0.Input }],
        active: [{ type: i0.HostBinding, args: ['class.active',] }, { type: i0.Input }],
        selectTab: [{ type: i0.Output }],
        deselect: [{ type: i0.Output }],
        removed: [{ type: i0.Output }],
        addClass: [{ type: i0.HostBinding, args: ['class.tab-pane',] }],
        role: [{ type: i0.HostBinding, args: ['attr.role',] }],
        ariaLabelledby: [{ type: i0.HostBinding, args: ['attr.aria-labelledby',] }]
    };

    /** Should be used to mark <ng-template> element as a template for tab heading */
    var TabHeadingDirective = /** @class */ (function () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function TabHeadingDirective(templateRef, tab) {
            tab.headingRef = templateRef;
        }
        return TabHeadingDirective;
    }());
    TabHeadingDirective.decorators = [
        { type: i0.Directive, args: [{ selector: '[tabHeading]' },] }
    ];
    TabHeadingDirective.ctorParameters = function () { return [
        { type: i0.TemplateRef },
        { type: TabDirective }
    ]; };

    var TabsModule = /** @class */ (function () {
        function TabsModule() {
        }
        TabsModule.forRoot = function () {
            return {
                ngModule: TabsModule,
                providers: []
            };
        };
        return TabsModule;
    }());
    TabsModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [
                        NgTranscludeDirective,
                        TabDirective,
                        TabsetComponent,
                        TabHeadingDirective
                    ],
                    exports: [
                        TabDirective,
                        TabsetComponent,
                        TabHeadingDirective,
                        NgTranscludeDirective
                    ]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgTranscludeDirective = NgTranscludeDirective;
    exports.TabDirective = TabDirective;
    exports.TabHeadingDirective = TabHeadingDirective;
    exports.TabsModule = TabsModule;
    exports.TabsetComponent = TabsetComponent;
    exports.TabsetConfig = TabsetConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-tabs.umd.js.map
