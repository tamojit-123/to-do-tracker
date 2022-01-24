(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/positioning'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/popover', ['exports', '@angular/core', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/utils', 'ngx-bootstrap/positioning', 'rxjs', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].popover = {}), global.ng.core, global.componentLoader, global.utils, global.positioning, global.rxjs, global.ng.common));
}(this, (function (exports, i0, componentLoader, utils, positioning, rxjs, common) { 'use strict';

    /**
     * Configuration service for the Popover directive.
     * You can inject this service, typically in your root component, and customize
     * the values of its properties in order to provide default values for all the
     * popovers used in the application.
     */
    var PopoverConfig = /** @class */ (function () {
        function PopoverConfig() {
            /** sets disable adaptive position */
            this.adaptivePosition = true;
            /**
             * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
             */
            this.placement = 'top';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            this.outsideClick = false;
            /** delay before showing the tooltip */
            this.delay = 0;
        }
        return PopoverConfig;
    }());
    PopoverConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PopoverConfig_Factory() { return new PopoverConfig(); }, token: PopoverConfig, providedIn: "root" });
    PopoverConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var PopoverContainerComponent = /** @class */ (function () {
        function PopoverContainerComponent(config) {
            this._placement = 'top';
            Object.assign(this, config);
        }
        Object.defineProperty(PopoverContainerComponent.prototype, "placement", {
            set: function (value) {
                if (!this._bsVersions.isBs5) {
                    this._placement = value;
                }
                else {
                    this._placement = positioning.PlacementForBs5[value];
                }
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(PopoverContainerComponent.prototype, "_bsVersions", {
            get: function () {
                return utils.getBsVer();
            },
            enumerable: false,
            configurable: true
        });
        PopoverContainerComponent.prototype.checkMarginNecessity = function () {
            return positioning.checkMargins(this._placement);
        };
        return PopoverContainerComponent;
    }());
    PopoverContainerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'popover-container',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        '[attr.id]': 'popoverId',
                        '[class]': '"popover in popover-" + _placement + " " + "bs-popover-" + _placement + " " + _placement + " " + containerClass + checkMarginNecessity()',
                        '[class.show]': '!_bsVersions.isBs3',
                        '[class.bs3]': '_bsVersions.isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    },
                    template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: ["\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "]
                },] }
    ];
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: PopoverConfig }
    ]; };
    PopoverContainerComponent.propDecorators = {
        placement: [{ type: i0.Input }],
        title: [{ type: i0.Input }]
    };

    var id = 0;
    /**
     * A lightweight, extensible directive for fancy popover creation.
     */
    var PopoverDirective = /** @class */ (function () {
        function PopoverDirective(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._positionService = _positionService;
            /** unique id popover - use for aria-describedby */
            this.popoverId = id++;
            /** sets disable adaptive position */
            this.adaptivePosition = true;
            /**
             * Placement of a popover. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'top';
            /**
             * Close popover on outside click
             */
            this.outsideClick = false;
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            /**
             * Css class for popover container
             */
            this.containerClass = '';
            /**
             * Delay before showing the tooltip
             */
            this.delay = 0;
            this._isInited = false;
            this._popover = cis
                .createLoader(_elementRef, _viewContainerRef, _renderer)
                .provide({ provide: PopoverConfig, useValue: _config });
            Object.assign(this, _config);
            this.onShown = this._popover.onShown;
            this.onHidden = this._popover.onHidden;
            // fix: no focus on button on Mac OS #1795
            if (typeof window !== 'undefined') {
                _elementRef.nativeElement.addEventListener('click', function () {
                    try {
                        _elementRef.nativeElement.focus();
                    }
                    catch (err) {
                        return;
                    }
                });
            }
        }
        Object.defineProperty(PopoverDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the popover is currently being shown
             */
            get: function () {
                return this._popover.isShown;
            },
            set: function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Set attribute aria-describedBy for element directive and
         * set id for the popover
         */
        PopoverDirective.prototype.setAriaDescribedBy = function () {
            this._ariaDescribedby = this.isOpen ? "ngx-popover-" + this.popoverId : void 0;
            if (this._ariaDescribedby) {
                if (this._popover.instance) {
                    this._popover.instance.popoverId = this._ariaDescribedby;
                }
                this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            }
        };
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        PopoverDirective.prototype.show = function () {
            var _this = this;
            if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
                return;
            }
            this._positionService.setOptions({
                modifiers: {
                    flip: {
                        enabled: this.adaptivePosition
                    },
                    preventOverflow: {
                        enabled: this.adaptivePosition
                    }
                }
            });
            var showPopover = function () {
                if (_this._delayTimeoutId) {
                    _this._delayTimeoutId = undefined;
                }
                _this._popover
                    .attach(PopoverContainerComponent)
                    .to(_this.container)
                    .position({ attachment: _this.placement })
                    .show({
                    content: _this.popover,
                    context: _this.popoverContext,
                    placement: _this.placement,
                    title: _this.popoverTitle,
                    containerClass: _this.containerClass
                });
                if (!_this.adaptivePosition && _this._popover._componentRef) {
                    _this._positionService.calcPosition();
                    _this._positionService.deletePositionElement(_this._popover._componentRef.location);
                }
                _this.isOpen = true;
                _this.setAriaDescribedBy();
            };
            var cancelDelayedTooltipShowing = function () {
                if (_this._popoverCancelShowFn) {
                    _this._popoverCancelShowFn();
                }
            };
            if (this.delay) {
                var _timer_1 = rxjs.timer(this.delay).subscribe(function () {
                    showPopover();
                    cancelDelayedTooltipShowing();
                });
                if (this.triggers) {
                    utils.parseTriggers(this.triggers)
                        .forEach(function (trigger) {
                        if (!trigger.close) {
                            return;
                        }
                        _this._popoverCancelShowFn = _this._renderer.listen(_this._elementRef.nativeElement, trigger.close, function () {
                            _timer_1.unsubscribe();
                            cancelDelayedTooltipShowing();
                        });
                    });
                }
            }
            else {
                showPopover();
            }
        };
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        PopoverDirective.prototype.hide = function () {
            if (this._delayTimeoutId) {
                clearTimeout(this._delayTimeoutId);
                this._delayTimeoutId = undefined;
            }
            if (this.isOpen) {
                this._popover.hide();
                this.setAriaDescribedBy();
                this.isOpen = false;
            }
        };
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        PopoverDirective.prototype.toggle = function () {
            if (this.isOpen) {
                return this.hide();
            }
            this.show();
        };
        PopoverDirective.prototype.ngOnInit = function () {
            var _this = this;
            // fix: seems there are an issue with `routerLinkActive`
            // which result in duplicated call ngOnInit without call to ngOnDestroy
            // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
            if (this._isInited) {
                return;
            }
            this._isInited = true;
            this._popover.listen({
                triggers: this.triggers,
                outsideClick: this.outsideClick,
                show: function () { return _this.show(); },
                hide: function () { return _this.hide(); }
            });
        };
        PopoverDirective.prototype.ngOnDestroy = function () {
            this._popover.dispose();
        };
        return PopoverDirective;
    }());
    PopoverDirective.decorators = [
        { type: i0.Directive, args: [{ selector: '[popover]', exportAs: 'bs-popover' },] }
    ];
    PopoverDirective.ctorParameters = function () { return [
        { type: PopoverConfig },
        { type: i0.ElementRef },
        { type: i0.Renderer2 },
        { type: i0.ViewContainerRef },
        { type: componentLoader.ComponentLoaderFactory },
        { type: positioning.PositioningService }
    ]; };
    PopoverDirective.propDecorators = {
        adaptivePosition: [{ type: i0.Input }],
        popover: [{ type: i0.Input }],
        popoverContext: [{ type: i0.Input }],
        popoverTitle: [{ type: i0.Input }],
        placement: [{ type: i0.Input }],
        outsideClick: [{ type: i0.Input }],
        triggers: [{ type: i0.Input }],
        container: [{ type: i0.Input }],
        containerClass: [{ type: i0.Input }],
        isOpen: [{ type: i0.Input }],
        delay: [{ type: i0.Input }],
        onShown: [{ type: i0.Output }],
        onHidden: [{ type: i0.Output }]
    };

    var PopoverModule = /** @class */ (function () {
        function PopoverModule() {
        }
        PopoverModule.forRoot = function () {
            return {
                ngModule: PopoverModule,
                providers: [componentLoader.ComponentLoaderFactory, positioning.PositioningService]
            };
        };
        return PopoverModule;
    }());
    PopoverModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [PopoverDirective, PopoverContainerComponent],
                    exports: [PopoverDirective],
                    entryComponents: [PopoverContainerComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PopoverConfig = PopoverConfig;
    exports.PopoverContainerComponent = PopoverContainerComponent;
    exports.PopoverDirective = PopoverDirective;
    exports.PopoverModule = PopoverModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-popover.umd.js.map
