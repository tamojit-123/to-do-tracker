(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/component-loader', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/positioning'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap']['component-loader'] = {}), global.ng.core, global.utils, global.i1));
}(this, (function (exports, i0, utils, i1) { 'use strict';

    var BsComponentRef = /** @class */ (function () {
        function BsComponentRef() {
        }
        return BsComponentRef;
    }());

    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */
    var ContentRef = /** @class */ (function () {
        function ContentRef(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodes, viewRef, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        componentRef) {
            this.nodes = nodes;
            this.viewRef = viewRef;
            this.componentRef = componentRef;
        }
        return ContentRef;
    }());

    // todo: add delay support
    var ComponentLoader = /** @class */ (function () {
        /**
         * Do not use this directly, it should be instanced via
         * `ComponentLoadFactory.attach`
         * @internal
         */
        function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
            this._viewContainerRef = _viewContainerRef;
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._injector = _injector;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._ngZone = _ngZone;
            this._applicationRef = _applicationRef;
            this._posService = _posService;
            this.onBeforeShow = new i0.EventEmitter();
            this.onShown = new i0.EventEmitter();
            this.onBeforeHide = new i0.EventEmitter();
            this.onHidden = new i0.EventEmitter();
            this._providers = [];
            this._isHiding = false;
            /**
             * A selector used if container element was not found
             */
            this.containerDefaultSelector = 'body';
            this._listenOpts = {};
            this._globalListener = Function.prototype;
        }
        Object.defineProperty(ComponentLoader.prototype, "isShown", {
            get: function () {
                if (this._isHiding) {
                    return false;
                }
                return !!this._componentRef;
            },
            enumerable: false,
            configurable: true
        });
        ComponentLoader.prototype.attach = function (compType) {
            this._componentFactory = this._componentFactoryResolver
                .resolveComponentFactory(compType);
            return this;
        };
        // todo: add behaviour: to target element, `body`, custom element
        ComponentLoader.prototype.to = function (container) {
            this.container = container || this.container;
            return this;
        };
        ComponentLoader.prototype.position = function (opts) {
            if (!opts) {
                return this;
            }
            this.attachment = opts.attachment || this.attachment;
            this._elementRef = opts.target || this._elementRef;
            return this;
        };
        ComponentLoader.prototype.provide = function (provider) {
            this._providers.push(provider);
            return this;
        };
        // todo: appendChild to element or document.querySelector(this.container)
        ComponentLoader.prototype.show = function (opts) {
            if (opts === void 0) { opts = {}; }
            this._subscribePositioning();
            this._innerComponent = void 0;
            if (!this._componentRef) {
                this.onBeforeShow.emit();
                this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
                var injector = i0.Injector.create({
                    providers: this._providers,
                    parent: this._injector
                });
                if (!this._componentFactory) {
                    return;
                }
                this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
                this._applicationRef.attachView(this._componentRef.hostView);
                // this._componentRef = this._viewContainerRef
                //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
                this.instance = this._componentRef.instance;
                Object.assign(this._componentRef.instance, opts);
                if (this.container instanceof i0.ElementRef) {
                    this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
                }
                if (typeof this.container === 'string' && typeof document !== 'undefined') {
                    var selectedElement = document.querySelector(this.container) ||
                        document.querySelector(this.containerDefaultSelector);
                    if (!selectedElement) {
                        return;
                    }
                    selectedElement.appendChild(this._componentRef.location.nativeElement);
                }
                if (!this.container &&
                    this._elementRef &&
                    this._elementRef.nativeElement.parentElement) {
                    this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
                }
                // we need to manually invoke change detection since events registered
                // via
                // Renderer::listen() are not picked up by change detection with the
                // OnPush strategy
                if (this._contentRef.componentRef) {
                    this._innerComponent = this._contentRef.componentRef.instance;
                    this._contentRef.componentRef.changeDetectorRef.markForCheck();
                    this._contentRef.componentRef.changeDetectorRef.detectChanges();
                }
                this._componentRef.changeDetectorRef.markForCheck();
                this._componentRef.changeDetectorRef.detectChanges();
                this.onShown.emit(opts.id ? { id: opts.id } : this._componentRef.instance);
            }
            this._registerOutsideClick();
            return this._componentRef;
        };
        ComponentLoader.prototype.hide = function (id) {
            var _a, _b, _c;
            if (!this._componentRef) {
                return this;
            }
            this._posService.deletePositionElement(this._componentRef.location);
            this.onBeforeHide.emit(this._componentRef.instance);
            var componentEl = this._componentRef.location.nativeElement;
            componentEl.parentNode.removeChild(componentEl);
            if ((_a = this._contentRef) === null || _a === void 0 ? void 0 : _a.componentRef) {
                this._contentRef.componentRef.destroy();
            }
            if (this._viewContainerRef && ((_b = this._contentRef) === null || _b === void 0 ? void 0 : _b.viewRef)) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
            }
            if ((_c = this._contentRef) === null || _c === void 0 ? void 0 : _c.viewRef) {
                this._contentRef.viewRef.destroy();
            }
            this._contentRef = void 0;
            this._componentRef = void 0;
            this._removeGlobalListener();
            this.onHidden.emit(id ? { id: id } : null);
            return this;
        };
        ComponentLoader.prototype.toggle = function () {
            if (this.isShown) {
                this.hide();
                return;
            }
            this.show();
        };
        ComponentLoader.prototype.dispose = function () {
            if (this.isShown) {
                this.hide();
            }
            this._unsubscribePositioning();
            if (this._unregisterListenersFn) {
                this._unregisterListenersFn();
            }
        };
        ComponentLoader.prototype.listen = function (listenOpts) {
            var _this = this;
            var _a;
            this.triggers = listenOpts.triggers || this.triggers;
            this._listenOpts.outsideClick = listenOpts.outsideClick;
            this._listenOpts.outsideEsc = listenOpts.outsideEsc;
            listenOpts.target = listenOpts.target || ((_a = this._elementRef) === null || _a === void 0 ? void 0 : _a.nativeElement);
            var hide = (this._listenOpts.hide = function () { return listenOpts.hide ? listenOpts.hide() : void _this.hide(); });
            var show = (this._listenOpts.show = function (registerHide) {
                listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
                registerHide();
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var toggle = function (registerHide) {
                _this.isShown ? hide() : show(registerHide);
            };
            if (this._renderer) {
                this._unregisterListenersFn = utils.listenToTriggersV2(this._renderer, {
                    target: listenOpts.target,
                    triggers: listenOpts.triggers,
                    show: show,
                    hide: hide,
                    toggle: toggle
                });
            }
            return this;
        };
        ComponentLoader.prototype._removeGlobalListener = function () {
            if (this._globalListener) {
                this._globalListener();
                this._globalListener = Function.prototype;
            }
        };
        ComponentLoader.prototype.attachInline = function (vRef, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        template) {
            if (vRef && template) {
                this._inlineViewRef = vRef.createEmbeddedView(template);
            }
            return this;
        };
        ComponentLoader.prototype._registerOutsideClick = function () {
            var _this = this;
            if (!this._componentRef || !this._componentRef.location) {
                return;
            }
            // why: should run after first event bubble
            if (this._listenOpts.outsideClick) {
                var target_1 = this._componentRef.location.nativeElement;
                setTimeout(function () {
                    if (_this._renderer && _this._elementRef) {
                        _this._globalListener = utils.registerOutsideClick(_this._renderer, {
                            targets: [target_1, _this._elementRef.nativeElement],
                            outsideClick: _this._listenOpts.outsideClick,
                            hide: function () { return _this._listenOpts.hide && _this._listenOpts.hide(); }
                        });
                    }
                });
            }
            if (this._listenOpts.outsideEsc && this._renderer && this._elementRef) {
                var target = this._componentRef.location.nativeElement;
                this._globalListener = utils.registerEscClick(this._renderer, {
                    targets: [target, this._elementRef.nativeElement],
                    outsideEsc: this._listenOpts.outsideEsc,
                    hide: function () { return _this._listenOpts.hide && _this._listenOpts.hide(); }
                });
            }
        };
        ComponentLoader.prototype.getInnerComponent = function () {
            return this._innerComponent;
        };
        ComponentLoader.prototype._subscribePositioning = function () {
            var _this = this;
            if (this._zoneSubscription || !this.attachment) {
                return;
            }
            this.onShown.subscribe(function () {
                var _a;
                _this._posService.position({
                    element: (_a = _this._componentRef) === null || _a === void 0 ? void 0 : _a.location,
                    target: _this._elementRef,
                    attachment: _this.attachment,
                    appendToBody: _this.container === 'body'
                });
            });
            this._zoneSubscription = this._ngZone.onStable.subscribe(function () {
                if (!_this._componentRef) {
                    return;
                }
                _this._posService.calcPosition();
            });
        };
        ComponentLoader.prototype._unsubscribePositioning = function () {
            if (!this._zoneSubscription) {
                return;
            }
            this._zoneSubscription.unsubscribe();
            this._zoneSubscription = void 0;
        };
        ComponentLoader.prototype._getContentRef = function (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        content, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        context, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        initialState) {
            if (!content) {
                return new ContentRef([]);
            }
            if (content instanceof i0.TemplateRef) {
                if (this._viewContainerRef) {
                    var _viewRef = this._viewContainerRef
                        .createEmbeddedView(content, context);
                    _viewRef.markForCheck();
                    return new ContentRef([_viewRef.rootNodes], _viewRef);
                }
                var viewRef = content.createEmbeddedView({});
                this._applicationRef.attachView(viewRef);
                return new ContentRef([viewRef.rootNodes], viewRef);
            }
            if (typeof content === 'function') {
                var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
                var modalContentInjector = i0.Injector.create({
                    providers: this._providers,
                    parent: this._injector
                });
                var componentRef = contentCmptFactory.create(modalContentInjector);
                Object.assign(componentRef.instance, initialState);
                this._applicationRef.attachView(componentRef.hostView);
                return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
            }
            var nodes = this._renderer
                ? [this._renderer.createText("" + content)]
                : [];
            return new ContentRef([nodes]);
        };
        return ComponentLoader;
    }());

    var ComponentLoaderFactory = /** @class */ (function () {
        function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
            this._componentFactoryResolver = _componentFactoryResolver;
            this._ngZone = _ngZone;
            this._injector = _injector;
            this._posService = _posService;
            this._applicationRef = _applicationRef;
        }
        /**
         *
         * @param _elementRef
         * @param _viewContainerRef
         * @param _renderer
         */
        ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
            return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
        };
        return ComponentLoaderFactory;
    }());
    ComponentLoaderFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentLoaderFactory_Factory() { return new ComponentLoaderFactory(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.PositioningService), i0.ɵɵinject(i0.ApplicationRef)); }, token: ComponentLoaderFactory, providedIn: "root" });
    ComponentLoaderFactory.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver },
        { type: i0.NgZone },
        { type: i0.Injector },
        { type: i1.PositioningService },
        { type: i0.ApplicationRef }
    ]; };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BsComponentRef = BsComponentRef;
    exports.ComponentLoader = ComponentLoader;
    exports.ComponentLoaderFactory = ComponentLoaderFactory;
    exports.ContentRef = ContentRef;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-component-loader.umd.js.map
