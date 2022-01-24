(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/utils'), require('@angular/animations'), require('@angular/common'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/dropdown', ['exports', '@angular/core', 'rxjs/operators', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/utils', '@angular/animations', '@angular/common', 'ngx-bootstrap/positioning'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].dropdown = {}), global.ng.core, global.rxjs.operators, global.componentLoader, global.utils, global.ng.animations, global.ng.common, global.positioning));
}(this, (function (exports, i0, operators, componentLoader, utils, animations, common, positioning) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /** Default dropdown configuration */
    var BsDropdownConfig = /** @class */ (function () {
        function BsDropdownConfig() {
            /** default dropdown auto closing behavior */
            this.autoClose = true;
            /** default dropdown auto closing behavior */
            this.insideClick = false;
            /** turn on/off animation */
            this.isAnimated = false;
        }
        return BsDropdownConfig;
    }());
    BsDropdownConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function BsDropdownConfig_Factory() { return new BsDropdownConfig(); }, token: BsDropdownConfig, providedIn: "root" });
    BsDropdownConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var BsDropdownState = /** @class */ (function () {
        function BsDropdownState() {
            var _this = this;
            this.direction = 'down';
            this.autoClose = true;
            this.insideClick = false;
            this.isAnimated = false;
            this.isOpenChange = new i0.EventEmitter();
            this.isDisabledChange = new i0.EventEmitter();
            this.toggleClick = new i0.EventEmitter();
            this.dropdownMenu = new Promise(function (resolve) {
                _this.resolveDropdownMenu = resolve;
            });
        }
        return BsDropdownState;
    }());
    BsDropdownState.decorators = [
        { type: i0.Injectable }
    ];
    BsDropdownState.ctorParameters = function () { return []; };

    var DROPDOWN_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
    var dropdownAnimation = [
        animations.style({ height: 0, overflow: 'hidden' }),
        animations.animate(DROPDOWN_ANIMATION_TIMING, animations.style({ height: '*', overflow: 'hidden' }))
    ];

    // todo: revert ngClass to [class] when false positive angular-cli issue is fixed
    //          [class.dropdown]="direction === 'down'"-->
    var BsDropdownContainerComponent = /** @class */ (function () {
        function BsDropdownContainerComponent(_state, cd, _renderer, _element, _builder) {
            var _this = this;
            this._state = _state;
            this.cd = cd;
            this._renderer = _renderer;
            this._element = _element;
            this.isOpen = false;
            this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
            this._subscription = _state.isOpenChange.subscribe(function (value) {
                _this.isOpen = value;
                var dropdown = _this._element.nativeElement.querySelector('.dropdown-menu');
                _this._renderer.addClass(_this._element.nativeElement.querySelector('div'), 'open');
                if (dropdown && !utils.isBs3()) {
                    _this._renderer.addClass(dropdown, 'show');
                    if (dropdown.classList.contains('dropdown-menu-right')) {
                        _this._renderer.setStyle(dropdown, 'left', 'auto');
                        _this._renderer.setStyle(dropdown, 'right', '0');
                    }
                    if (_this.direction === 'up') {
                        _this._renderer.setStyle(dropdown, 'top', 'auto');
                        _this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                    }
                }
                if (dropdown && _this._state.isAnimated) {
                    _this._factoryDropDownAnimation.create(dropdown)
                        .play();
                }
                _this.cd.markForCheck();
                _this.cd.detectChanges();
            });
        }
        Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
            get: function () {
                return this._state.direction;
            },
            enumerable: false,
            configurable: true
        });
        /** @internal */
        BsDropdownContainerComponent.prototype._contains = function (el) {
            return this._element.nativeElement.contains(el);
        };
        BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
            this._subscription.unsubscribe();
        };
        return BsDropdownContainerComponent;
    }());
    BsDropdownContainerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        style: 'display:block;position: absolute;z-index: 1040'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [ngClass]=\"{dropdown: direction === 'down'}\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content>\n    </div>\n  "
                },] }
    ];
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: BsDropdownState },
        { type: i0.ChangeDetectorRef },
        { type: i0.Renderer2 },
        { type: i0.ElementRef },
        { type: animations.AnimationBuilder }
    ]; };

    var BsDropdownDirective = /** @class */ (function () {
        function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _state, _config, _builder) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._viewContainerRef = _viewContainerRef;
            this._cis = _cis;
            this._state = _state;
            this._config = _config;
            /**
             * This attribute indicates that the dropdown should be opened upwards
             */
            this.dropup = false;
            // todo: move to component loader
            this._isInlineOpen = false;
            this._isDisabled = false;
            this._subscriptions = [];
            this._isInited = false;
            // set initial dropdown state from config
            this._state.autoClose = this._config.autoClose;
            this._state.insideClick = this._config.insideClick;
            this._state.isAnimated = this._config.isAnimated;
            this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
            // create dropdown component loader
            this._dropdown = this._cis
                .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
                .provide({ provide: BsDropdownState, useValue: this._state });
            this.onShown = this._dropdown.onShown;
            this.onHidden = this._dropdown.onHidden;
            this.isOpenChange = this._state.isOpenChange;
        }
        Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
            get: function () {
                return this._state.autoClose;
            },
            /**
             * Indicates that dropdown will be closed on item or document click,
             * and after pressing ESC
             */
            set: function (value) {
                this._state.autoClose = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "isAnimated", {
            get: function () {
                return this._state.isAnimated;
            },
            /**
             * Indicates that dropdown will be animated
             */
            set: function (value) {
                this._state.isAnimated = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "insideClick", {
            get: function () {
                return this._state.insideClick;
            },
            /**
             * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
             */
            set: function (value) {
                this._state.insideClick = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
            get: function () {
                return this._isDisabled;
            },
            /**
             * Disables dropdown toggle and hides dropdown menu if opened
             */
            set: function (value) {
                this._isDisabled = value;
                this._state.isDisabledChange.emit(value);
                if (value) {
                    this.hide();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the popover is currently being shown
             */
            get: function () {
                if (this._showInline) {
                    return this._isInlineOpen;
                }
                return this._dropdown.isShown;
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
        Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
            get: function () {
                return !utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
            get: function () {
                return !this.container;
            },
            enumerable: false,
            configurable: true
        });
        BsDropdownDirective.prototype.ngOnInit = function () {
            var _this = this;
            // fix: seems there are an issue with `routerLinkActive`
            // which result in duplicated call ngOnInit without call to ngOnDestroy
            // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
            if (this._isInited) {
                return;
            }
            this._isInited = true;
            // attach DOM listeners
            this._dropdown.listen({
                // because of dropdown inline mode
                outsideClick: false,
                triggers: this.triggers,
                show: function () { return _this.show(); }
            });
            // toggle visibility on toggle element click
            this._subscriptions.push(this._state.toggleClick.subscribe(function (value) { return _this.toggle(value); }));
            // hide dropdown if set disabled while opened
            this._subscriptions.push(this._state.isDisabledChange
                .pipe(operators.filter(function (value) { return value; }))
                .subscribe(function ( /*value: boolean*/) { return _this.hide(); }));
        };
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        BsDropdownDirective.prototype.show = function () {
            var _this = this;
            if (this.isOpen || this.isDisabled) {
                return;
            }
            if (this._showInline) {
                if (!this._inlinedMenu) {
                    this._state.dropdownMenu.then(function (dropdownMenu) {
                        _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                        _this._inlinedMenu = _this._dropdown._inlineViewRef;
                        _this.addBs4Polyfills();
                        if (_this._inlinedMenu) {
                            _this._renderer.addClass(_this._inlinedMenu.rootNodes[0].parentNode, 'open');
                        }
                        _this.playAnimation();
                    })
                        // swallow errors
                        .catch();
                }
                this.addBs4Polyfills();
                this._isInlineOpen = true;
                this.onShown.emit(true);
                this._state.isOpenChange.emit(true);
                this.playAnimation();
                return;
            }
            this._state.dropdownMenu.then(function (dropdownMenu) {
                // check direction in which dropdown should be opened
                var _dropup = _this.dropup ||
                    (typeof _this.dropup !== 'undefined' && _this.dropup);
                _this._state.direction = _dropup ? 'up' : 'down';
                var _placement = _this.placement || (_dropup ? 'top start' : 'bottom start');
                // show dropdown
                _this._dropdown
                    .attach(BsDropdownContainerComponent)
                    .to(_this.container)
                    .position({ attachment: _placement })
                    .show({
                    content: dropdownMenu.templateRef,
                    placement: _placement
                });
                _this._state.isOpenChange.emit(true);
            })
                // swallow error
                .catch();
        };
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        BsDropdownDirective.prototype.hide = function () {
            if (!this.isOpen) {
                return;
            }
            if (this._showInline) {
                this.removeShowClass();
                this.removeDropupStyles();
                this._isInlineOpen = false;
                this.onHidden.emit(true);
            }
            else {
                this._dropdown.hide();
            }
            this._state.isOpenChange.emit(false);
        };
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
         * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
         */
        BsDropdownDirective.prototype.toggle = function (value) {
            if (this.isOpen || !value) {
                return this.hide();
            }
            return this.show();
        };
        /** @internal */
        BsDropdownDirective.prototype._contains = function (event) {
            // todo: valorkin fix typings
            return this._elementRef.nativeElement.contains(event.target) ||
                (this._dropdown.instance && this._dropdown.instance._contains(event.target));
        };
        BsDropdownDirective.prototype.ngOnDestroy = function () {
            var e_1, _a;
            try {
                // clean up subscriptions and destroy dropdown
                for (var _b = __values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sub = _c.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._dropdown.dispose();
        };
        BsDropdownDirective.prototype.addBs4Polyfills = function () {
            if (!utils.isBs3()) {
                this.addShowClass();
                this.checkRightAlignment();
                this.addDropupStyles();
            }
        };
        BsDropdownDirective.prototype.playAnimation = function () {
            var _this = this;
            if (this._state.isAnimated && this._inlinedMenu) {
                setTimeout(function () {
                    if (_this._inlinedMenu) {
                        _this._factoryDropDownAnimation.create(_this._inlinedMenu.rootNodes[0]).play();
                    }
                });
            }
        };
        BsDropdownDirective.prototype.addShowClass = function () {
            if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
            }
        };
        BsDropdownDirective.prototype.removeShowClass = function () {
            if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
            }
        };
        BsDropdownDirective.prototype.checkRightAlignment = function () {
            if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                var isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
                this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
                this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
            }
        };
        BsDropdownDirective.prototype.addDropupStyles = function () {
            if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                // a little hack to not break support of bootstrap 4 beta
                this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
                this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
                this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'bottom', 'auto');
            }
        };
        BsDropdownDirective.prototype.removeDropupStyles = function () {
            if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
                this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
                this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
            }
        };
        return BsDropdownDirective;
    }());
    BsDropdownDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[bsDropdown], [dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [BsDropdownState],
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        '[class.dropup]': 'dropup',
                        '[class.open]': 'isOpen',
                        '[class.show]': 'isOpen && isBs4'
                    }
                },] }
    ];
    BsDropdownDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.Renderer2 },
        { type: i0.ViewContainerRef },
        { type: componentLoader.ComponentLoaderFactory },
        { type: BsDropdownState },
        { type: BsDropdownConfig },
        { type: animations.AnimationBuilder }
    ]; };
    BsDropdownDirective.propDecorators = {
        placement: [{ type: i0.Input }],
        triggers: [{ type: i0.Input }],
        container: [{ type: i0.Input }],
        dropup: [{ type: i0.Input }],
        autoClose: [{ type: i0.Input }],
        isAnimated: [{ type: i0.Input }],
        insideClick: [{ type: i0.Input }],
        isDisabled: [{ type: i0.Input }],
        isOpen: [{ type: i0.Input }],
        isOpenChange: [{ type: i0.Output }],
        onShown: [{ type: i0.Output }],
        onHidden: [{ type: i0.Output }]
    };

    var BsDropdownMenuDirective = /** @class */ (function () {
        function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
            _state.resolveDropdownMenu({
                templateRef: _templateRef,
                viewContainer: _viewContainer
            });
        }
        return BsDropdownMenuDirective;
    }());
    BsDropdownMenuDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[bsDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] }
    ];
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: BsDropdownState },
        { type: i0.ViewContainerRef },
        { type: i0.TemplateRef }
    ]; };

    var BsDropdownToggleDirective = /** @class */ (function () {
        function BsDropdownToggleDirective(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
            var _this = this;
            this._changeDetectorRef = _changeDetectorRef;
            this._dropdown = _dropdown;
            this._element = _element;
            this._renderer = _renderer;
            this._state = _state;
            this.isOpen = false;
            this._subscriptions = [];
            // sync is open value with state
            this._subscriptions.push(this._state.isOpenChange.subscribe(function (value) {
                _this.isOpen = value;
                if (value) {
                    _this._documentClickListener = _this._renderer.listen('document', 'click', function (event) {
                        if (_this._state.autoClose && event.button !== 2 &&
                            !_this._element.nativeElement.contains(event.target) &&
                            !(_this._state.insideClick && _this._dropdown._contains(event))) {
                            _this._state.toggleClick.emit(false);
                            _this._changeDetectorRef.detectChanges();
                        }
                    });
                    _this._escKeyUpListener = _this._renderer.listen(_this._element.nativeElement, 'keyup.esc', function () {
                        if (_this._state.autoClose) {
                            _this._state.toggleClick.emit(false);
                            _this._changeDetectorRef.detectChanges();
                        }
                    });
                }
                else {
                    _this._documentClickListener && _this._documentClickListener();
                    _this._escKeyUpListener && _this._escKeyUpListener();
                }
            }));
            // populate disabled state
            this._subscriptions.push(this._state.isDisabledChange
                .subscribe(function (value) { return _this.isDisabled = value || void 0; }));
        }
        BsDropdownToggleDirective.prototype.onClick = function (event) {
            event.stopPropagation();
            if (this.isDisabled) {
                return;
            }
            this._state.toggleClick.emit(true);
        };
        BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
            var e_1, _a;
            if (this._documentClickListener) {
                this._documentClickListener();
            }
            if (this._escKeyUpListener) {
                this._escKeyUpListener();
            }
            try {
                for (var _b = __values(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sub = _c.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        return BsDropdownToggleDirective;
    }());
    BsDropdownToggleDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] }
    ];
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: BsDropdownDirective },
        { type: i0.ElementRef },
        { type: i0.Renderer2 },
        { type: BsDropdownState }
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        isDisabled: [{ type: i0.HostBinding, args: ['attr.disabled',] }],
        isOpen: [{ type: i0.HostBinding, args: ['attr.aria-expanded',] }],
        onClick: [{ type: i0.HostListener, args: ['click', ['$event'],] }]
    };

    var BsDropdownModule = /** @class */ (function () {
        function BsDropdownModule() {
        }
        BsDropdownModule.forRoot = function () {
            return {
                ngModule: BsDropdownModule,
                providers: [
                    componentLoader.ComponentLoaderFactory,
                    positioning.PositioningService,
                    BsDropdownState
                ]
            };
        };
        return BsDropdownModule;
    }());
    BsDropdownModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownContainerComponent,
                        BsDropdownDirective
                    ],
                    exports: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownDirective
                    ],
                    entryComponents: [BsDropdownContainerComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BsDropdownConfig = BsDropdownConfig;
    exports.BsDropdownContainerComponent = BsDropdownContainerComponent;
    exports.BsDropdownDirective = BsDropdownDirective;
    exports.BsDropdownMenuDirective = BsDropdownMenuDirective;
    exports.BsDropdownModule = BsDropdownModule;
    exports.BsDropdownState = BsDropdownState;
    exports.BsDropdownToggleDirective = BsDropdownToggleDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-dropdown.umd.js.map
