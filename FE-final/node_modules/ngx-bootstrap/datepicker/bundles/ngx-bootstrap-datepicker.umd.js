(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('ngx-bootstrap/chronos'), require('ngx-bootstrap/positioning'), require('@angular/animations'), require('rxjs'), require('ngx-bootstrap/mini-ngrx'), require('ngx-bootstrap/component-loader'), require('@angular/forms'), require('ngx-bootstrap/utils'), require('@angular/common'), require('ngx-bootstrap/tooltip')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/datepicker', ['exports', '@angular/core', 'rxjs/operators', 'ngx-bootstrap/chronos', 'ngx-bootstrap/positioning', '@angular/animations', 'rxjs', 'ngx-bootstrap/mini-ngrx', 'ngx-bootstrap/component-loader', '@angular/forms', 'ngx-bootstrap/utils', '@angular/common', 'ngx-bootstrap/tooltip'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].datepicker = {}), global.ng.core, global.rxjs.operators, global.chronos, global.positioning, global.ng.animations, global.rxjs, global.miniNgrx, global.componentLoader, global.ng.forms, global.utils, global.ng.common, global.tooltip));
}(this, (function (exports, i0, operators, chronos, positioning, animations, rxjs, miniNgrx, componentLoader, forms, utils, common, tooltip) { 'use strict';

    /**
     * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
     * except `displayMonths`, for range picker it default to `2`
     */
    var BsDatepickerConfig = /** @class */ (function () {
        function BsDatepickerConfig() {
            /** sets use adaptive position */
            this.adaptivePosition = false;
            /** sets use UTC date time format */
            this.useUtc = false;
            /** turn on/off animation */
            this.isAnimated = false;
            /**
             * The view that the datepicker should start in
             */
            this.startView = 'day';
            /**
             * If true, returns focus to the datepicker / daterangepicker input after date selection
             */
            this.returnFocusToInput = false;
            /** CSS class which will be applied to datepicker container,
             * usually used to set color theme
             */
            this.containerClass = 'theme-green';
            // DatepickerRenderOptions
            this.displayMonths = 1;
            /**
             * Allows to hide week numbers in datepicker
             */
            this.showWeekNumbers = true;
            this.dateInputFormat = 'L';
            // range picker
            this.rangeSeparator = ' - ';
            /**
             * Date format for date range input field
             */
            this.rangeInputFormat = 'L';
            // DatepickerFormatOptions
            this.monthTitle = 'MMMM';
            this.yearTitle = 'YYYY';
            this.dayLabel = 'D';
            this.monthLabel = 'MMMM';
            this.yearLabel = 'YYYY';
            this.weekNumbers = 'w';
            /**
             * Shows 'today' button
             */
            this.showTodayButton = false;
            /**
             * Shows clear button
             */
            this.showClearButton = false;
            /**
             * Positioning of 'today' button
             */
            this.todayPosition = 'center';
            /**
             * Positioning of 'clear' button
             */
            this.clearPosition = 'right';
            /**
             * Label for 'today' button
             */
            this.todayButtonLabel = 'Today';
            /**
             * Label for 'clear' button
             */
            this.clearButtonLabel = 'Clear';
            /**
             * Label for 'custom range' button
             */
            this.customRangeButtonLabel = 'Custom Range';
        }
        return BsDatepickerConfig;
    }());
    BsDatepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function BsDatepickerConfig_Factory() { return new BsDatepickerConfig(); }, token: BsDatepickerConfig, providedIn: "root" });
    BsDatepickerConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

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

    var DATEPICKER_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
    var datepickerAnimation = animations.trigger('datepickerAnimation', [
        animations.state('animated-down', animations.style({ height: '*', overflow: 'hidden' })),
        animations.transition('* => animated-down', [
            animations.style({ height: 0, overflow: 'hidden' }),
            animations.animate(DATEPICKER_ANIMATION_TIMING)
        ]),
        animations.state('animated-up', animations.style({ height: '*', overflow: 'hidden' })),
        animations.transition('* => animated-up', [
            animations.style({ height: '*', overflow: 'hidden' }),
            animations.animate(DATEPICKER_ANIMATION_TIMING)
        ]),
        animations.transition('* => unanimated', animations.animate('0s'))
    ]);

    var BsDatepickerAbstractComponent = /** @class */ (function () {
        function BsDatepickerAbstractComponent() {
            this.containerClass = '';
            this.customRanges = [];
            this.chosenRange = [];
            this._daysCalendarSub = new rxjs.Subscription();
        }
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setMinDate(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setMaxDate(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysDisabled", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDaysDisabled(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesDisabled", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDatesDisabled(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesEnabled", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDatesEnabled(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDisabled(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "dateCustomClasses", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDateCustomClasses(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "dateTooltipTexts", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDateTooltipTexts(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysCalendar$", {
            get: function () {
                return this._daysCalendar$;
            },
            set: function (value) {
                var _this = this;
                this._daysCalendar$ = value;
                this._daysCalendarSub.unsubscribe();
                this._daysCalendarSub.add(this._daysCalendar$.subscribe(function (value) {
                    _this.multipleCalendars = !!value && value.length > 1;
                }));
            },
            enumerable: false,
            configurable: true
        });
        // todo: valorkin fix
        // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
        BsDatepickerAbstractComponent.prototype.setViewMode = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.navigateTo = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.dayHoverHandler = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.weekHoverHandler = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.monthHoverHandler = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.yearHoverHandler = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.daySelectHandler = function (day) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.monthSelectHandler = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.yearSelectHandler = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.setRangeOnCalendar = function (dates) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.setToday = function () { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.clearDate = function () { };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        BsDatepickerAbstractComponent.prototype._stopPropagation = function (event) {
            event.stopPropagation();
        };
        return BsDatepickerAbstractComponent;
    }());

    var BsDatepickerActions = /** @class */ (function () {
        function BsDatepickerActions() {
        }
        BsDatepickerActions.prototype.calculate = function () {
            return { type: BsDatepickerActions.CALCULATE };
        };
        BsDatepickerActions.prototype.format = function () {
            return { type: BsDatepickerActions.FORMAT };
        };
        BsDatepickerActions.prototype.flag = function () {
            return { type: BsDatepickerActions.FLAG };
        };
        BsDatepickerActions.prototype.select = function (date) {
            return {
                type: BsDatepickerActions.SELECT,
                payload: date
            };
        };
        BsDatepickerActions.prototype.changeViewMode = function (event) {
            return {
                type: BsDatepickerActions.CHANGE_VIEWMODE,
                payload: event
            };
        };
        BsDatepickerActions.prototype.navigateTo = function (event) {
            return {
                type: BsDatepickerActions.NAVIGATE_TO,
                payload: event
            };
        };
        BsDatepickerActions.prototype.navigateStep = function (step) {
            return {
                type: BsDatepickerActions.NAVIGATE_OFFSET,
                payload: step
            };
        };
        BsDatepickerActions.prototype.setOptions = function (options) {
            return {
                type: BsDatepickerActions.SET_OPTIONS,
                payload: options
            };
        };
        // date range picker
        BsDatepickerActions.prototype.selectRange = function (value) {
            return {
                type: BsDatepickerActions.SELECT_RANGE,
                payload: value
            };
        };
        BsDatepickerActions.prototype.hoverDay = function (event) {
            return {
                type: BsDatepickerActions.HOVER,
                payload: event.isHovered ? event.cell.date : null
            };
        };
        BsDatepickerActions.prototype.minDate = function (date) {
            return {
                type: BsDatepickerActions.SET_MIN_DATE,
                payload: date
            };
        };
        BsDatepickerActions.prototype.maxDate = function (date) {
            return {
                type: BsDatepickerActions.SET_MAX_DATE,
                payload: date
            };
        };
        BsDatepickerActions.prototype.daysDisabled = function (days) {
            return {
                type: BsDatepickerActions.SET_DAYSDISABLED,
                payload: days
            };
        };
        BsDatepickerActions.prototype.datesDisabled = function (dates) {
            return {
                type: BsDatepickerActions.SET_DATESDISABLED,
                payload: dates
            };
        };
        BsDatepickerActions.prototype.datesEnabled = function (dates) {
            return {
                type: BsDatepickerActions.SET_DATESENABLED,
                payload: dates
            };
        };
        BsDatepickerActions.prototype.isDisabled = function (value) {
            return {
                type: BsDatepickerActions.SET_IS_DISABLED,
                payload: value
            };
        };
        BsDatepickerActions.prototype.setDateCustomClasses = function (value) {
            return {
                type: BsDatepickerActions.SET_DATE_CUSTOM_CLASSES,
                payload: value
            };
        };
        BsDatepickerActions.prototype.setDateTooltipTexts = function (value) {
            return {
                type: BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS,
                payload: value
            };
        };
        BsDatepickerActions.prototype.setLocale = function (locale) {
            return {
                type: BsDatepickerActions.SET_LOCALE,
                payload: locale
            };
        };
        return BsDatepickerActions;
    }());
    BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
    BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
    BsDatepickerActions.FLAG = '[datepicker] set flags';
    BsDatepickerActions.SELECT = '[datepicker] select date';
    BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
    BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
    BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
    BsDatepickerActions.HOVER = '[datepicker] hover date';
    BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
    BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
    BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
    BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
    BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
    BsDatepickerActions.SET_DATESENABLED = '[datepicker] set dates enabled';
    BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
    BsDatepickerActions.SET_DATE_CUSTOM_CLASSES = '[datepicker] set date custom classes';
    BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS = '[datepicker] set date tooltip texts';
    BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
    BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
    BsDatepickerActions.decorators = [
        { type: i0.Injectable }
    ];

    var BsLocaleService = /** @class */ (function () {
        function BsLocaleService() {
            this._defaultLocale = 'en';
            this._locale = new rxjs.BehaviorSubject(this._defaultLocale);
            this._localeChange = this._locale.asObservable();
        }
        Object.defineProperty(BsLocaleService.prototype, "locale", {
            get: function () {
                return this._locale;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsLocaleService.prototype, "localeChange", {
            get: function () {
                return this._localeChange;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsLocaleService.prototype, "currentLocale", {
            get: function () {
                return this._locale.getValue();
            },
            enumerable: false,
            configurable: true
        });
        BsLocaleService.prototype.use = function (locale) {
            if (locale === this.currentLocale) {
                return;
            }
            this._locale.next(locale);
        };
        return BsLocaleService;
    }());
    BsLocaleService.decorators = [
        { type: i0.Injectable }
    ];

    var BsDatepickerEffects = /** @class */ (function () {
        function BsDatepickerEffects(_actions, _localeService) {
            this._actions = _actions;
            this._localeService = _localeService;
            this._subs = [];
        }
        BsDatepickerEffects.prototype.init = function (_bsDatepickerStore) {
            this._store = _bsDatepickerStore;
            return this;
        };
        /** setters */
        BsDatepickerEffects.prototype.setValue = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.select(value));
        };
        BsDatepickerEffects.prototype.setRangeValue = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.selectRange(value));
        };
        BsDatepickerEffects.prototype.setMinDate = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.minDate(value));
            return this;
        };
        BsDatepickerEffects.prototype.setMaxDate = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.maxDate(value));
            return this;
        };
        BsDatepickerEffects.prototype.setDaysDisabled = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.daysDisabled(value));
            return this;
        };
        BsDatepickerEffects.prototype.setDatesDisabled = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.datesDisabled(value));
            return this;
        };
        BsDatepickerEffects.prototype.setDatesEnabled = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.datesEnabled(value));
            return this;
        };
        BsDatepickerEffects.prototype.setDisabled = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.isDisabled(value));
            return this;
        };
        BsDatepickerEffects.prototype.setDateCustomClasses = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.setDateCustomClasses(value));
            return this;
        };
        BsDatepickerEffects.prototype.setDateTooltipTexts = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.setDateTooltipTexts(value));
            return this;
        };
        /* Set rendering options */
        BsDatepickerEffects.prototype.setOptions = function (_config) {
            var _a;
            var _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.setOptions(_options));
            return this;
        };
        /** view to mode bindings */
        BsDatepickerEffects.prototype.setBindings = function (container) {
            if (!this._store) {
                return this;
            }
            container.daysCalendar$ = this._store.select(function (state) { return state.flaggedMonths; })
                .pipe(operators.filter(function (months) { return !!months; }));
            // month calendar
            container.monthsCalendar = this._store.select(function (state) { return state.flaggedMonthsCalendar; })
                .pipe(operators.filter(function (months) { return !!months; }));
            // year calendar
            container.yearsCalendar = this._store.select(function (state) { return state.yearsCalendarFlagged; })
                .pipe(operators.filter(function (years) { return !!years; }));
            container.viewMode = this._store.select(function (state) { var _a; return (_a = state.view) === null || _a === void 0 ? void 0 : _a.mode; });
            container.options$ = rxjs.combineLatest([
                this._store.select(function (state) { return state.showWeekNumbers; }),
                this._store.select(function (state) { return state.displayMonths; })
            ])
                .pipe(operators.map(function (latest) { return ({
                showWeekNumbers: latest[0],
                displayMonths: latest[1]
            }); }));
            return this;
        };
        /** event handlers */
        BsDatepickerEffects.prototype.setEventHandlers = function (container) {
            var _this = this;
            container.setViewMode = function (event) {
                var _a;
                (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.changeViewMode(event));
            };
            container.navigateTo = function (event) {
                var _a;
                (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.navigateStep(event.step));
            };
            container.dayHoverHandler = function (event) {
                var _a;
                var _cell = event.cell;
                if (_cell.isOtherMonth || _cell.isDisabled) {
                    return;
                }
                (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.hoverDay(event));
                _cell.isHovered = event.isHovered;
            };
            container.monthHoverHandler = function (event) {
                event.cell.isHovered = event.isHovered;
            };
            container.yearHoverHandler = function (event) {
                event.cell.isHovered = event.isHovered;
            };
            return this;
        };
        BsDatepickerEffects.prototype.registerDatepickerSideEffects = function () {
            var _this = this;
            if (!this._store) {
                return this;
            }
            this._subs.push(this._store.select(function (state) { return state.view; }).subscribe(function () {
                var _a;
                (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.calculate());
            }));
            // format calendar values on month model change
            this._subs.push(this._store
                .select(function (state) { return state.monthsModel; })
                .pipe(operators.filter(function (monthModel) { return !!monthModel; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.format()); }));
            // flag day values
            this._subs.push(this._store
                .select(function (state) { return state.formattedMonths; })
                .pipe(operators.filter(function (month) { return !!month; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // flag day values
            this._subs.push(this._store
                .select(function (state) { return state.selectedDate; })
                .pipe(operators.filter(function (selectedDate) { return !!selectedDate; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // flag for date range picker
            this._subs.push(this._store
                .select(function (state) { return state.selectedRange; })
                .pipe(operators.filter(function (selectedRange) { return !!selectedRange; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // monthsCalendar
            this._subs.push(this._store
                .select(function (state) { return state.monthsCalendar; })
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // years calendar
            this._subs.push(this._store
                .select(function (state) { return state.yearsCalendarModel; })
                .pipe(operators.filter(function (state) { return !!state; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // on hover
            this._subs.push(this._store
                .select(function (state) { return state.hoveredDate; })
                .pipe(operators.filter(function (hoveredDate) { return !!hoveredDate; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // date custom classes
            this._subs.push(this._store
                .select(function (state) { return state.dateCustomClasses; })
                .pipe(operators.filter(function (dateCustomClasses) { return !!dateCustomClasses; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // date tooltip texts
            this._subs.push(this._store
                .select(function (state) { return state.dateTooltipTexts; })
                .pipe(operators.filter(function (dateTooltipTexts) { return !!dateTooltipTexts; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // on locale change
            this._subs.push(this._localeService.localeChange
                .subscribe(function (locale) { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.setLocale(locale)); }));
            return this;
        };
        BsDatepickerEffects.prototype.destroy = function () {
            var e_1, _b;
            try {
                for (var _c = __values(this._subs), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var sub = _d.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        return BsDatepickerEffects;
    }());
    BsDatepickerEffects.decorators = [
        { type: i0.Injectable }
    ];
    BsDatepickerEffects.ctorParameters = function () { return [
        { type: BsDatepickerActions },
        { type: BsLocaleService }
    ]; };

    var defaultMonthOptions = {
        width: 7,
        height: 6
    };
    var dayInMilliseconds = 24 * 60 * 60 * 1000;

    var BsDatepickerState = /** @class */ (function () {
        function BsDatepickerState() {
            // DatepickerRenderOptions
            this.showWeekNumbers = true;
            this.displayMonths = 1;
        }
        return BsDatepickerState;
    }());
    var _initialView = { date: new Date(), mode: 'day' };
    var initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
        locale: 'en',
        view: _initialView,
        selectedRange: [],
        monthViewOptions: defaultMonthOptions
    });

    function getStartingDayOfCalendar(date, options) {
        if (chronos.isFirstDayOfWeek(date, options.firstDayOfWeek)) {
            return date;
        }
        var weekDay = chronos.getDay(date);
        var offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
        return chronos.shiftDate(date, { day: -offset });
    }
    function calculateDateOffset(weekday, startingDayOffset) {
        var _startingDayOffset = Number(startingDayOffset);
        if (isNaN(_startingDayOffset)) {
            return 0;
        }
        if (_startingDayOffset === 0) {
            return weekday;
        }
        var offset = weekday - _startingDayOffset % 7;
        return offset < 0 ? offset + 7 : offset;
    }
    function isMonthDisabled(date, min, max) {
        var minBound = min && chronos.isBefore(chronos.endOf(date, 'month'), min, 'day');
        var maxBound = max && chronos.isAfter(chronos.startOf(date, 'month'), max, 'day');
        return minBound || maxBound || false;
    }
    function isYearDisabled(date, min, max) {
        var minBound = min && chronos.isBefore(chronos.endOf(date, 'year'), min, 'day');
        var maxBound = max && chronos.isAfter(chronos.startOf(date, 'year'), max, 'day');
        return minBound || maxBound || false;
    }
    function isDisabledDate(date, datesDisabled) {
        if (!datesDisabled || !chronos.isArray(datesDisabled) || !datesDisabled.length) {
            return false;
        }
        return datesDisabled.some(function (dateDisabled) { return chronos.isSame(date, dateDisabled, 'date'); });
    }
    function isEnabledDate(date, datesEnabled) {
        if (!datesEnabled || !chronos.isArray(datesEnabled) || !datesEnabled.length) {
            return false;
        }
        return !datesEnabled.some(function (enabledDate) { return chronos.isSame(date, enabledDate, 'date'); });
    }
    function getYearsCalendarInitialDate(state, calendarIndex) {
        if (calendarIndex === void 0) { calendarIndex = 0; }
        var model = state && state.yearsCalendarModel && state.yearsCalendarModel[calendarIndex];
        return (model === null || model === void 0 ? void 0 : model.years[0]) && model.years[0][0] && model.years[0][0].date;
    }
    function checkRangesWithMaxDate(ranges, maxDate) {
        if (!ranges)
            return ranges;
        if (!maxDate)
            return ranges;
        if (!ranges.length && !ranges[0].value)
            return ranges;
        ranges.forEach(function (item) {
            if (!item || !item.value)
                return ranges;
            if (item.value instanceof Date)
                return ranges;
            if (!(item.value instanceof Array && item.value.length))
                return ranges;
            item.value = compareDateWithMaxDateHelper(item.value, maxDate);
            return ranges;
        });
        return ranges;
    }
    function checkBsValue(date, maxDate) {
        if (!date)
            return date;
        if (!maxDate)
            return date;
        if (date instanceof Array && !date.length)
            return date;
        if (date instanceof Date)
            return date;
        return compareDateWithMaxDateHelper(date, maxDate);
    }
    function compareDateWithMaxDateHelper(date, maxDate) {
        if (date instanceof Array) {
            var editedValues = date.map(function (item) {
                if (!item)
                    return item;
                if (chronos.isAfter(item, maxDate, 'date'))
                    item = maxDate;
                return item;
            });
            return editedValues;
        }
        return date;
    }

    function createMatrix(options, fn) {
        var prevValue = options.initialDate;
        var matrix = new Array(options.height);
        for (var i = 0; i < options.height; i++) {
            matrix[i] = new Array(options.width);
            for (var j = 0; j < options.width; j++) {
                matrix[i][j] = fn(prevValue);
                prevValue = chronos.shiftDate(prevValue, options.shift);
            }
        }
        return matrix;
    }

    // user and model input should handle parsing and validating input values
    function calcDaysCalendar(startingDate, options) {
        var firstDay = chronos.getFirstDayOfMonth(startingDate);
        var initialDate = getStartingDayOfCalendar(firstDay, options);
        // todo test
        var matrixOptions = {
            width: options.width || 0,
            height: options.height || 0,
            initialDate: initialDate,
            shift: { day: 1 }
        };
        var daysMatrix = createMatrix(matrixOptions, function (date) { return date; });
        return {
            daysMatrix: daysMatrix,
            month: firstDay
        };
    }

    function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
        return {
            month: daysCalendar.month,
            monthTitle: chronos.formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
            yearTitle: chronos.formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
            weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
            weekdays: getShiftedWeekdays(formatOptions.locale),
            weeks: daysCalendar.daysMatrix.map(function (week, weekIndex) { return ({
                days: week.map(function (date, dayIndex) { return ({
                    date: date,
                    label: chronos.formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                    monthIndex: monthIndex,
                    weekIndex: weekIndex,
                    dayIndex: dayIndex
                }); })
            }); }),
            hideLeftArrow: false,
            hideRightArrow: false,
            disableLeftArrow: false,
            disableRightArrow: false
        };
    }
    function getWeekNumbers(daysMatrix, format, locale) {
        return daysMatrix.map(function (days) { return (days[0] ? chronos.formatDate(days[0], format, locale) : ''); });
    }
    function getShiftedWeekdays(locale) {
        var _locale = chronos.getLocale(locale);
        var weekdays = _locale.weekdaysShort();
        var firstDayOfWeek = _locale.firstDayOfWeek();
        return __spread(weekdays.slice(firstDayOfWeek), weekdays.slice(0, firstDayOfWeek));
    }

    function flagDaysCalendar(formattedMonth, options) {
        formattedMonth.weeks.forEach(function (week) {
            week.days.forEach(function (day, dayIndex) {
                // datepicker
                var isOtherMonth = !chronos.isSameMonth(day.date, formattedMonth.month);
                var isHovered = !isOtherMonth && chronos.isSameDay(day.date, options.hoveredDate);
                // date range picker
                var isSelectionStart = !isOtherMonth &&
                    options.selectedRange &&
                    chronos.isSameDay(day.date, options.selectedRange[0]);
                var isSelectionEnd = !isOtherMonth &&
                    options.selectedRange &&
                    chronos.isSameDay(day.date, options.selectedRange[1]);
                var isSelected = (!isOtherMonth && chronos.isSameDay(day.date, options.selectedDate)) ||
                    isSelectionStart ||
                    isSelectionEnd;
                var isInRange = !isOtherMonth &&
                    options.selectedRange &&
                    isDateInRange(day.date, options.selectedRange, options.hoveredDate);
                var isDisabled = options.isDisabled ||
                    chronos.isBefore(day.date, options.minDate, 'day') ||
                    chronos.isAfter(day.date, options.maxDate, 'day') ||
                    chronos.isDisabledDay(day.date, options.daysDisabled) ||
                    isDisabledDate(day.date, options.datesDisabled) ||
                    isEnabledDate(day.date, options.datesEnabled);
                var currentDate = new Date();
                var isToday = !isOtherMonth && chronos.isSameDay(day.date, currentDate);
                var customClasses = options.dateCustomClasses && options.dateCustomClasses
                    .map(function (dcc) { return chronos.isSameDay(day.date, dcc.date) ? dcc.classes : []; })
                    .reduce(function (previousValue, currentValue) { return previousValue.concat(currentValue); }, [])
                    .join(' ')
                    || '';
                var tooltipText = options.dateTooltipTexts && options.dateTooltipTexts
                    .map(function (tt) { return chronos.isSameDay(day.date, tt.date) ? tt.tooltipText : ''; })
                    .reduce(function (previousValue, currentValue) {
                    previousValue.push(currentValue);
                    return previousValue;
                }, [])
                    .join(' ')
                    || '';
                // decide update or not
                var newDay = Object.assign({}, day, {
                    isOtherMonth: isOtherMonth,
                    isHovered: isHovered,
                    isSelected: isSelected,
                    isSelectionStart: isSelectionStart,
                    isSelectionEnd: isSelectionEnd,
                    isInRange: isInRange,
                    isDisabled: isDisabled,
                    isToday: isToday,
                    customClasses: customClasses,
                    tooltipText: tooltipText
                });
                if (day.isOtherMonth !== newDay.isOtherMonth ||
                    day.isHovered !== newDay.isHovered ||
                    day.isSelected !== newDay.isSelected ||
                    day.isSelectionStart !== newDay.isSelectionStart ||
                    day.isSelectionEnd !== newDay.isSelectionEnd ||
                    day.isDisabled !== newDay.isDisabled ||
                    day.isInRange !== newDay.isInRange ||
                    day.customClasses !== newDay.customClasses ||
                    day.tooltipText !== newDay.tooltipText) {
                    week.days[dayIndex] = newDay;
                }
            });
        });
        // todo: add check for linked calendars
        formattedMonth.hideLeftArrow =
            options.isDisabled ||
                (!!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
        formattedMonth.hideRightArrow =
            options.isDisabled ||
                ((!!options.monthIndex || options.monthIndex === 0) && !!options.displayMonths && options.monthIndex < options.displayMonths &&
                    options.monthIndex + 1 !== options.displayMonths);
        formattedMonth.disableLeftArrow = isMonthDisabled(chronos.shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
        formattedMonth.disableRightArrow = isMonthDisabled(chronos.shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
        return formattedMonth;
    }
    function isDateInRange(date, selectedRange, hoveredDate) {
        if (!date || !selectedRange || !selectedRange[0]) {
            return false;
        }
        if (selectedRange[1]) {
            return date > selectedRange[0] && date <= selectedRange[1];
        }
        if (hoveredDate) {
            return date > selectedRange[0] && date <= hoveredDate;
        }
        return false;
    }

    function canSwitchMode(mode, minMode) {
        return minMode ? mode >= minMode : true;
    }

    var height = 4;
    var width = 3;
    var shift = { month: 1 };
    function formatMonthsCalendar(viewDate, formatOptions) {
        var initialDate = chronos.startOf(viewDate, 'year');
        var matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
        var monthMatrix = createMatrix(matrixOptions, function (date) { return ({
            date: date,
            label: chronos.formatDate(date, formatOptions.monthLabel, formatOptions.locale)
        }); });
        return {
            months: monthMatrix,
            monthTitle: '',
            yearTitle: chronos.formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale),
            hideRightArrow: false,
            hideLeftArrow: false,
            disableRightArrow: false,
            disableLeftArrow: false
        };
    }

    function flagMonthsCalendar(monthCalendar, options) {
        monthCalendar.months.forEach(function (months, rowIndex) {
            months.forEach(function (month, monthIndex) {
                var isSelected;
                var isHovered = chronos.isSameMonth(month.date, options.hoveredMonth);
                var isDisabled = options.isDisabled ||
                    isMonthDisabled(month.date, options.minDate, options.maxDate);
                if (!options.selectedDate && options.selectedRange) {
                    isSelected = chronos.isSameMonth(month.date, options.selectedRange[0]);
                    if (!isSelected) {
                        isSelected = chronos.isSameMonth(month.date, options.selectedRange[1]);
                    }
                }
                else {
                    isSelected = chronos.isSameMonth(month.date, options.selectedDate);
                }
                var newMonth = Object.assign(/*{},*/ month, {
                    isHovered: isHovered,
                    isDisabled: isDisabled,
                    isSelected: isSelected
                });
                if (month.isHovered !== newMonth.isHovered ||
                    month.isDisabled !== newMonth.isDisabled ||
                    month.isSelected !== newMonth.isSelected) {
                    monthCalendar.months[rowIndex][monthIndex] = newMonth;
                }
            });
        });
        // todo: add check for linked calendars
        monthCalendar.hideLeftArrow =
            !!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
        monthCalendar.hideRightArrow =
            (!!options.monthIndex || options.monthIndex === 0)
                && (!!options.displayMonths || options.displayMonths === 0)
                && options.monthIndex < options.displayMonths
                && options.monthIndex + 1 !== options.displayMonths;
        monthCalendar.disableLeftArrow = isYearDisabled(chronos.shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
        monthCalendar.disableRightArrow = isYearDisabled(chronos.shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
        return monthCalendar;
    }

    var height$1 = 4;
    var width$1 = 4;
    var yearsPerCalendar = height$1 * width$1;
    var initialYearShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
    var shift$1 = { year: 1 };
    function formatYearsCalendar(viewDate, formatOptions, previousInitialDate) {
        var initialDate = calculateInitialDate(viewDate, previousInitialDate);
        var matrixOptions = { width: width$1, height: height$1, initialDate: initialDate, shift: shift$1 };
        var yearsMatrix = createMatrix(matrixOptions, function (date) { return ({
            date: date,
            label: chronos.formatDate(date, formatOptions.yearLabel, formatOptions.locale)
        }); });
        var yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
        return {
            years: yearsMatrix,
            monthTitle: '',
            yearTitle: yearTitle,
            hideLeftArrow: false,
            hideRightArrow: false,
            disableLeftArrow: false,
            disableRightArrow: false
        };
    }
    function calculateInitialDate(viewDate, previousInitialDate) {
        if (previousInitialDate
            && viewDate.getFullYear() >= previousInitialDate.getFullYear()
            && viewDate.getFullYear() < previousInitialDate.getFullYear() + yearsPerCalendar) {
            return previousInitialDate;
        }
        return chronos.shiftDate(viewDate, { year: initialYearShift });
    }
    function formatYearRangeTitle(yearsMatrix, formatOptions) {
        var from = chronos.formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
        var to = chronos.formatDate(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
        return from + " - " + to;
    }

    function flagYearsCalendar(yearsCalendar, options) {
        yearsCalendar.years.forEach(function (years, rowIndex) {
            years.forEach(function (year, yearIndex) {
                var isSelected;
                var isHovered = chronos.isSameYear(year.date, options.hoveredYear);
                var isDisabled = options.isDisabled ||
                    isYearDisabled(year.date, options.minDate, options.maxDate);
                if (!options.selectedDate && options.selectedRange) {
                    isSelected = chronos.isSameYear(year.date, options.selectedRange[0]);
                    if (!isSelected) {
                        isSelected = chronos.isSameYear(year.date, options.selectedRange[1]);
                    }
                }
                else {
                    isSelected = chronos.isSameYear(year.date, options.selectedDate);
                }
                var newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled, isSelected: isSelected });
                if (year.isHovered !== newMonth.isHovered ||
                    year.isDisabled !== newMonth.isDisabled ||
                    year.isSelected !== newMonth.isSelected) {
                    yearsCalendar.years[rowIndex][yearIndex] = newMonth;
                }
            });
        });
        // todo: add check for linked calendars
        yearsCalendar.hideLeftArrow =
            !!options.yearIndex && options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
        yearsCalendar.hideRightArrow =
            !!options.yearIndex && !!options.displayMonths &&
                options.yearIndex < options.displayMonths &&
                options.yearIndex + 1 !== options.displayMonths;
        yearsCalendar.disableLeftArrow = isYearDisabled(chronos.shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
        var i = yearsCalendar.years.length - 1;
        var j = yearsCalendar.years[i].length - 1;
        yearsCalendar.disableRightArrow = isYearDisabled(chronos.shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
        return yearsCalendar;
    }

    function bsDatepickerReducer(state, action) {
        if (state === void 0) { state = initialDatepickerState; }
        switch (action.type) {
            case BsDatepickerActions.CALCULATE: {
                return calculateReducer(state);
            }
            case BsDatepickerActions.FORMAT: {
                return formatReducer(state);
            }
            case BsDatepickerActions.FLAG: {
                return flagReducer(state);
            }
            case BsDatepickerActions.NAVIGATE_OFFSET: {
                return navigateOffsetReducer(state, action);
            }
            case BsDatepickerActions.NAVIGATE_TO: {
                var payload = action.payload;
                if (!state.view || !payload.unit) {
                    return state;
                }
                var date = chronos.setFullDate(state.view.date, payload.unit);
                var newState = void 0;
                var mode = void 0;
                if (canSwitchMode(payload.viewMode, state.minMode)) {
                    mode = payload.viewMode;
                    newState = { view: { date: date, mode: mode } };
                }
                else {
                    mode = state.view.mode;
                    newState = { selectedDate: date, view: { date: date, mode: mode } };
                }
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.CHANGE_VIEWMODE: {
                if (!canSwitchMode(action.payload, state.minMode) || !state.view) {
                    return state;
                }
                var date = state.view.date;
                var mode = action.payload;
                var newState = { view: { date: date, mode: mode } };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.HOVER: {
                return Object.assign({}, state, { hoveredDate: action.payload });
            }
            case BsDatepickerActions.SELECT: {
                if (!state.view) {
                    return state;
                }
                var newState = {
                    selectedDate: action.payload,
                    view: state.view
                };
                var mode = state.view.mode;
                var _date = action.payload || state.view.date;
                var date = getViewDate(_date, state.minDate, state.maxDate);
                newState.view = { mode: mode, date: date };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.SET_OPTIONS: {
                if (!state.view) {
                    return state;
                }
                var newState = action.payload;
                // preserve view mode
                var mode = newState.minMode ? newState.minMode : state.view.mode;
                var _viewDate = chronos.isDateValid(newState.value) && newState.value
                    || chronos.isArray(newState.value) && chronos.isDateValid(newState.value[0]) && newState.value[0]
                    || state.view.date;
                var date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
                newState.view = { mode: mode, date: date };
                // update selected value
                if (newState.value) {
                    // if new value is array we work with date range
                    if (chronos.isArray(newState.value)) {
                        newState.selectedRange = newState.value;
                    }
                    // if new value is a date -> datepicker
                    if (newState.value instanceof Date) {
                        newState.selectedDate = newState.value;
                    }
                    // provided value is not supported :)
                    // need to report it somehow
                }
                return Object.assign({}, state, newState);
            }
            // date range picker
            case BsDatepickerActions.SELECT_RANGE: {
                if (!state.view) {
                    return state;
                }
                var newState = {
                    selectedRange: action.payload,
                    view: state.view
                };
                var mode = state.view.mode;
                var _date = action.payload && action.payload[0] || state.view.date;
                var date = getViewDate(_date, state.minDate, state.maxDate);
                newState.view = { mode: mode, date: date };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.SET_MIN_DATE: {
                return Object.assign({}, state, {
                    minDate: action.payload
                });
            }
            case BsDatepickerActions.SET_MAX_DATE: {
                return Object.assign({}, state, {
                    maxDate: action.payload
                });
            }
            case BsDatepickerActions.SET_IS_DISABLED: {
                return Object.assign({}, state, {
                    isDisabled: action.payload
                });
            }
            case BsDatepickerActions.SET_DATE_CUSTOM_CLASSES: {
                return Object.assign({}, state, {
                    dateCustomClasses: action.payload
                });
            }
            case BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS: {
                return Object.assign({}, state, {
                    dateTooltipTexts: action.payload
                });
            }
            default:
                return state;
        }
    }
    function calculateReducer(state) {
        if (!state.view) {
            return state;
        }
        // how many calendars
        var displayMonths;
        if (state.displayOneMonthRange &&
            isDisplayOneMonth(state.view.date, state.minDate, state.maxDate)) {
            displayMonths = 1;
        }
        else {
            displayMonths = state.displayMonths || 1;
        }
        // use selected date on initial rendering if set
        var viewDate = state.view.date;
        if (state.view.mode === 'day' && state.monthViewOptions) {
            if (state.showPreviousMonth && state.selectedRange && state.selectedRange.length === 0) {
                viewDate = chronos.shiftDate(viewDate, { month: -1 });
            }
            state.monthViewOptions.firstDayOfWeek = chronos.getLocale(state.locale).firstDayOfWeek();
            var monthsModel = new Array(displayMonths);
            for (var monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
                viewDate = chronos.shiftDate(viewDate, { month: 1 });
            }
            // Check if parameter enabled and check if it's not months navigation event
            if (state.preventChangeToNextMonth && state.flaggedMonths && state.hoveredDate) {
                var viewMonth = calcDaysCalendar(state.view.date, state.monthViewOptions);
                // Check if viewed right month same as in flaggedMonths state, then override months model with flaggedMonths
                if (state.flaggedMonths.length && state.flaggedMonths[1].month.getMonth() === viewMonth.month.getMonth()) {
                    monthsModel = state.flaggedMonths
                        .map(function (item) {
                        if (state.monthViewOptions) {
                            return calcDaysCalendar(item.month, state.monthViewOptions);
                        }
                        return null;
                    })
                        .filter(function (item) { return item !== null; });
                }
            }
            return Object.assign({}, state, { monthsModel: monthsModel });
        }
        if (state.view.mode === 'month') {
            var monthsCalendar = new Array(displayMonths);
            for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 1 });
            }
            return Object.assign({}, state, { monthsCalendar: monthsCalendar });
        }
        if (state.view.mode === 'year') {
            var yearsCalendarModel = new Array(displayMonths);
            for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state), state.minMode === 'year' ? getYearsCalendarInitialDate(state, calendarIndex) : undefined);
                viewDate = chronos.shiftDate(viewDate, { year: yearsPerCalendar });
            }
            return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
        }
        return state;
    }
    function formatReducer(state) {
        if (!state.view) {
            return state;
        }
        if (state.view.mode === 'day' && state.monthsModel) {
            var formattedMonths = state.monthsModel.map(function (month, monthIndex) { return formatDaysCalendar(month, getFormatOptions(state), monthIndex); });
            return Object.assign({}, state, { formattedMonths: formattedMonths });
        }
        // how many calendars
        var displayMonths = state.displayMonths || 1;
        // check initial rendering
        // use selected date on initial rendering if set
        var viewDate = state.view.date;
        if (state.view.mode === 'month') {
            var monthsCalendar = new Array(displayMonths);
            for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 1 });
            }
            return Object.assign({}, state, { monthsCalendar: monthsCalendar });
        }
        if (state.view.mode === 'year') {
            var yearsCalendarModel = new Array(displayMonths);
            for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 16 });
            }
            return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
        }
        return state;
    }
    function flagReducer(state) {
        if (!state.view) {
            return state;
        }
        var displayMonths = isDisplayOneMonth(state.view.date, state.minDate, state.maxDate) ? 1 : state.displayMonths;
        if (state.formattedMonths && state.view.mode === 'day') {
            var flaggedMonths = state.formattedMonths.map(function (formattedMonth, monthIndex) { return flagDaysCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                daysDisabled: state.daysDisabled,
                datesDisabled: state.datesDisabled,
                datesEnabled: state.datesEnabled,
                hoveredDate: state.hoveredDate,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: displayMonths,
                dateCustomClasses: state.dateCustomClasses,
                dateTooltipTexts: state.dateTooltipTexts,
                monthIndex: monthIndex
            }); });
            return Object.assign({}, state, { flaggedMonths: flaggedMonths });
        }
        if (state.view.mode === 'month' && state.monthsCalendar) {
            var flaggedMonthsCalendar = state.monthsCalendar.map(function (formattedMonth, monthIndex) { return flagMonthsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredMonth: state.hoveredMonth,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: displayMonths,
                monthIndex: monthIndex
            }); });
            return Object.assign({}, state, { flaggedMonthsCalendar: flaggedMonthsCalendar });
        }
        if (state.view.mode === 'year' && state.yearsCalendarModel) {
            var yearsCalendarFlagged = state.yearsCalendarModel.map(function (formattedMonth, yearIndex) { return flagYearsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredYear: state.hoveredYear,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: displayMonths,
                yearIndex: yearIndex
            }); });
            return Object.assign({}, state, { yearsCalendarFlagged: yearsCalendarFlagged });
        }
        return state;
    }
    function navigateOffsetReducer(state, action) {
        if (!state.view) {
            return state;
        }
        var date = shiftViewDate(state, action);
        if (!date) {
            return state;
        }
        var newState = {
            view: {
                mode: state.view.mode,
                date: date
            }
        };
        return Object.assign({}, state, newState);
    }
    function shiftViewDate(state, action) {
        if (!state.view) {
            return undefined;
        }
        if (state.view.mode === 'year' && state.minMode === 'year') {
            var initialDate = getYearsCalendarInitialDate(state, 0);
            if (initialDate) {
                var middleDate = chronos.shiftDate(initialDate, { year: -initialYearShift });
                return chronos.shiftDate(middleDate, action.payload);
            }
        }
        return chronos.shiftDate(chronos.startOf(state.view.date, 'month'), action.payload);
    }
    function getFormatOptions(state) {
        return {
            locale: state.locale,
            monthTitle: state.monthTitle,
            yearTitle: state.yearTitle,
            dayLabel: state.dayLabel,
            monthLabel: state.monthLabel,
            yearLabel: state.yearLabel,
            weekNumbers: state.weekNumbers
        };
    }
    /**
     * if view date is provided (bsValue|ngModel) it should be shown
     * if view date is not provider:
     * if minDate>currentDate (default view value), show minDate
     * if maxDate<currentDate(default view value) show maxDate
     */
    function getViewDate(viewDate, minDate, maxDate) {
        var _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
        if (minDate && chronos.isAfter(minDate, _date, 'day')) {
            return minDate;
        }
        if (maxDate && chronos.isBefore(maxDate, _date, 'day')) {
            return maxDate;
        }
        return _date;
    }
    function isDisplayOneMonth(viewDate, minDate, maxDate) {
        if (maxDate && chronos.isSame(maxDate, viewDate, 'day')) {
            return true;
        }
        return minDate && maxDate && minDate.getMonth() === maxDate.getMonth();
    }

    var BsDatepickerStore = /** @class */ (function (_super) {
        __extends(BsDatepickerStore, _super);
        function BsDatepickerStore() {
            var _this = this;
            var _dispatcher = new rxjs.BehaviorSubject({
                type: '[datepicker] dispatcher init'
            });
            var state = new miniNgrx.MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
            _this = _super.call(this, _dispatcher, bsDatepickerReducer, state) || this;
            return _this;
        }
        return BsDatepickerStore;
    }(miniNgrx.MiniStore));
    BsDatepickerStore.decorators = [
        { type: i0.Injectable }
    ];
    BsDatepickerStore.ctorParameters = function () { return []; };

    var BsDatepickerContainerComponent = /** @class */ (function (_super) {
        __extends(BsDatepickerContainerComponent, _super);
        function BsDatepickerContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this._store = _store;
            _this._element = _element;
            _this._actions = _actions;
            _this._positionService = _positionService;
            _this.valueChange = new i0.EventEmitter();
            _this.animationState = 'void';
            _this._subs = [];
            _this._effects = _effects;
            _renderer.setStyle(_element.nativeElement, 'display', 'block');
            _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
            return _this;
        }
        Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setValue(value);
            },
            enumerable: false,
            configurable: true
        });
        BsDatepickerContainerComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a, _b;
            this._positionService.setOptions({
                modifiers: { flip: { enabled: this._config.adaptivePosition } },
                allowedPositions: ['top', 'bottom']
            });
            (_a = this._positionService.event$) === null || _a === void 0 ? void 0 : _a.pipe(operators.take(1)).subscribe(function () {
                _this._positionService.disable();
                if (_this._config.isAnimated) {
                    _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';
                    return;
                }
                _this.animationState = 'unanimated';
            });
            this.isOtherMonthsActive = this._config.selectFromOtherMonth;
            this.containerClass = this._config.containerClass;
            this.showTodayBtn = this._config.showTodayButton;
            this.todayBtnLbl = this._config.todayButtonLabel;
            this.todayPos = this._config.todayPosition;
            this.showClearBtn = this._config.showClearButton;
            this.clearBtnLbl = this._config.clearButtonLabel;
            this.clearPos = this._config.clearPosition;
            this.customRangeBtnLbl = this._config.customRangeButtonLabel;
            (_b = this._effects) === null || _b === void 0 ? void 0 : _b.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
            // todo: move it somewhere else
            // on selected date change
            this._subs.push(this._store
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .select(function (state) { return state.selectedDate; })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .subscribe(function (date) { return _this.valueChange.emit(date); }));
            this._store.dispatch(this._actions.changeViewMode(this._config.startView));
        };
        Object.defineProperty(BsDatepickerContainerComponent.prototype, "isTopPosition", {
            get: function () {
                return this._element.nativeElement.classList.contains('top');
            },
            enumerable: false,
            configurable: true
        });
        BsDatepickerContainerComponent.prototype.positionServiceEnable = function () {
            this._positionService.enable();
        };
        BsDatepickerContainerComponent.prototype.daySelectHandler = function (day) {
            if (!day) {
                return;
            }
            var isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
            if (isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.select(day.date));
        };
        BsDatepickerContainerComponent.prototype.monthSelectHandler = function (day) {
            if (!day || day.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    month: chronos.getMonth(day.date),
                    year: chronos.getFullYear(day.date)
                },
                viewMode: 'day'
            }));
        };
        BsDatepickerContainerComponent.prototype.yearSelectHandler = function (day) {
            if (!day || day.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    year: chronos.getFullYear(day.date)
                },
                viewMode: 'month'
            }));
        };
        BsDatepickerContainerComponent.prototype.setToday = function () {
            this._store.dispatch(this._actions.select(new Date()));
        };
        BsDatepickerContainerComponent.prototype.clearDate = function () {
            this._store.dispatch(this._actions.select(undefined));
        };
        BsDatepickerContainerComponent.prototype.ngOnDestroy = function () {
            var e_1, _c;
            var _a;
            try {
                for (var _d = __values(this._subs), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var sub = _e.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            (_a = this._effects) === null || _a === void 0 ? void 0 : _a.destroy();
        };
        return BsDatepickerContainerComponent;
    }(BsDatepickerAbstractComponent));
    BsDatepickerContainerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-datepicker-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar$ | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          [options]=\"options$ | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\n      <div class=\"btn-today-wrapper\"\n           [class.today-left]=\"todayPos === 'left'\"\n           [class.today-right]=\"todayPos === 'right'\"\n           [class.today-center]=\"todayPos === 'center'\"\n           *ngIf=\"showTodayBtn\">\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\n      </div>\n\n        <div class=\"btn-clear-wrapper\"\n        [class.clear-left]=\"clearPos === 'left'\"\n        [class.clear-right]=\"clearPos === 'right'\"\n        [class.clear-center]=\"clearPos === 'center'\"\n        *ngIf=\"showClearBtn\">\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\n        </div>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\n    <bs-custom-date-view\n      [selectedRange]=\"chosenRange\"\n      [ranges]=\"customRanges\"\n      [customRangeLabel]=\"customRangeBtnLbl\"\n      (onSelect)=\"setRangeOnCalendar($event)\">\n    </bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        class: 'bottom',
                        '(click)': '_stopPropagation($event)',
                        role: 'dialog',
                        'aria-label': 'calendar'
                    },
                    animations: [datepickerAnimation]
                },] }
    ];
    BsDatepickerContainerComponent.ctorParameters = function () { return [
        { type: i0.Renderer2 },
        { type: BsDatepickerConfig },
        { type: BsDatepickerStore },
        { type: i0.ElementRef },
        { type: BsDatepickerActions },
        { type: BsDatepickerEffects },
        { type: positioning.PositioningService }
    ]; };

    var BsDatepickerDirective = /** @class */ (function () {
        function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            /**
             * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'bottom';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            /**
             * Close datepicker on outside click
             */
            this.outsideClick = true;
            /**
             * A selector specifying the element the datepicker should be appended to.
             */
            this.container = 'body';
            this.outsideEsc = true;
            this.isDestroy$ = new rxjs.Subject();
            /**
             * Indicates whether datepicker's content is enabled or not
             */
            this.isDisabled = false;
            /**
             * Emits when datepicker value has been changed
             */
            this.bsValueChange = new i0.EventEmitter();
            this._subs = [];
            this._dateInputFormat$ = new rxjs.Subject();
            // todo: assign only subset of fields
            Object.assign(this, this._config);
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
            this.onShown = this._datepicker.onShown;
            this.onHidden = this._datepicker.onHidden;
            this.isOpen$ = new rxjs.BehaviorSubject(this.isOpen);
        }
        Object.defineProperty(BsDatepickerDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the datepicker is currently being shown
             */
            get: function () {
                return this._datepicker.isShown;
            },
            set: function (value) {
                this.isOpen$.next(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerDirective.prototype, "bsValue", {
            /**
             * Initial value of datepicker
             */
            set: function (value) {
                if (this._bsValue && value && this._bsValue.getTime() === value.getTime()) {
                    return;
                }
                if (!this._bsValue && value) {
                    var now = new Date();
                    value.setMilliseconds(now.getMilliseconds());
                    value.setSeconds(now.getSeconds());
                    value.setMinutes(now.getMinutes());
                    value.setHours(now.getHours());
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerDirective.prototype, "dateInputFormat$", {
            get: function () {
                return this._dateInputFormat$;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerDirective.prototype, "bsConfig", {
            get: function () {
                return this._bsConfig;
            },
            /**
             * Config object for datepicker
             */
            set: function (bsConfig) {
                this._bsConfig = bsConfig;
                this.setConfig();
                this._dateInputFormat$.next(bsConfig && bsConfig.dateInputFormat);
            },
            enumerable: false,
            configurable: true
        });
        BsDatepickerDirective.prototype.ngOnInit = function () {
            var _this = this;
            this._datepicker.listen({
                outsideClick: this.outsideClick,
                outsideEsc: this.outsideEsc,
                triggers: this.triggers,
                show: function () { return _this.show(); }
            });
            this.setConfig();
        };
        BsDatepickerDirective.prototype.ngOnChanges = function (changes) {
            if (!this._datepickerRef || !this._datepickerRef.instance) {
                return;
            }
            if (changes.minDate) {
                this._datepickerRef.instance.minDate = this.minDate;
            }
            if (changes.maxDate) {
                this._datepickerRef.instance.maxDate = this.maxDate;
            }
            if (changes.daysDisabled) {
                this._datepickerRef.instance.daysDisabled = this.daysDisabled;
            }
            if (changes.datesDisabled) {
                this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            }
            if (changes.datesEnabled) {
                this._datepickerRef.instance.datesEnabled = this.datesEnabled;
            }
            if (changes.isDisabled) {
                this._datepickerRef.instance.isDisabled = this.isDisabled;
            }
            if (changes.dateCustomClasses) {
                this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            }
            if (changes.dateTooltipTexts) {
                this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
            }
        };
        BsDatepickerDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.isOpen$.pipe(operators.filter(function (isOpen) { return isOpen !== _this.isOpen; }), operators.takeUntil(this.isDestroy$))
                .subscribe(function () { return _this.toggle(); });
        };
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        BsDatepickerDirective.prototype.show = function () {
            var _this = this;
            if (this._datepicker.isShown) {
                return;
            }
            this.setConfig();
            this._datepickerRef = this._datepicker
                .provide({ provide: BsDatepickerConfig, useValue: this._config })
                .attach(BsDatepickerContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({ placement: this.placement });
            // if date changes from external source (model -> view)
            this._subs.push(this.bsValueChange.subscribe(function (value) {
                if (_this._datepickerRef) {
                    _this._datepickerRef.instance.value = value;
                }
            }));
            // if date changes from picker (view -> model)
            if (this._datepickerRef) {
                this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
                    _this.bsValue = value;
                    _this.hide();
                }));
            }
        };
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        BsDatepickerDirective.prototype.hide = function () {
            var e_1, _a;
            if (this.isOpen) {
                this._datepicker.hide();
            }
            try {
                for (var _b = __values(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            if (this._config.returnFocusToInput) {
                this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
            }
        };
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         */
        BsDatepickerDirective.prototype.toggle = function () {
            if (this.isOpen) {
                return this.hide();
            }
            this.show();
        };
        /**
         * Set config for datepicker
         */
        BsDatepickerDirective.prototype.setConfig = function () {
            this._config = Object.assign({}, this._config, this.bsConfig, {
                value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
                isDisabled: this.isDisabled,
                minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
                dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
                dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
                datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
                datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
                minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
            });
        };
        BsDatepickerDirective.prototype.ngOnDestroy = function () {
            this._datepicker.dispose();
            this.isOpen$.next(false);
            if (this.isDestroy$) {
                this.isDestroy$.next();
                this.isDestroy$.complete();
            }
        };
        return BsDatepickerDirective;
    }());
    BsDatepickerDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[bsDatepicker]',
                    exportAs: 'bsDatepicker'
                },] }
    ];
    BsDatepickerDirective.ctorParameters = function () { return [
        { type: BsDatepickerConfig },
        { type: i0.ElementRef },
        { type: i0.Renderer2 },
        { type: i0.ViewContainerRef },
        { type: componentLoader.ComponentLoaderFactory }
    ]; };
    BsDatepickerDirective.propDecorators = {
        placement: [{ type: i0.Input }],
        triggers: [{ type: i0.Input }],
        outsideClick: [{ type: i0.Input }],
        container: [{ type: i0.Input }],
        outsideEsc: [{ type: i0.Input }],
        onShown: [{ type: i0.Output }],
        onHidden: [{ type: i0.Output }],
        isDisabled: [{ type: i0.Input }],
        minDate: [{ type: i0.Input }],
        maxDate: [{ type: i0.Input }],
        minMode: [{ type: i0.Input }],
        daysDisabled: [{ type: i0.Input }],
        datesDisabled: [{ type: i0.Input }],
        datesEnabled: [{ type: i0.Input }],
        dateCustomClasses: [{ type: i0.Input }],
        dateTooltipTexts: [{ type: i0.Input }],
        bsValueChange: [{ type: i0.Output }],
        isOpen: [{ type: i0.Input }],
        bsValue: [{ type: i0.Input }],
        bsConfig: [{ type: i0.Input }]
    };

    var BsDatepickerInlineConfig = /** @class */ (function (_super) {
        __extends(BsDatepickerInlineConfig, _super);
        function BsDatepickerInlineConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BsDatepickerInlineConfig;
    }(BsDatepickerConfig));
    BsDatepickerInlineConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function BsDatepickerInlineConfig_Factory() { return new BsDatepickerInlineConfig(); }, token: BsDatepickerInlineConfig, providedIn: "root" });
    BsDatepickerInlineConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var BsDatepickerInlineContainerComponent = /** @class */ (function (_super) {
        __extends(BsDatepickerInlineContainerComponent, _super);
        function BsDatepickerInlineContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
            var _this = _super.call(this, _renderer, _config, _store, _element, _actions, _effects, _positioningService) || this;
            _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
            _renderer.setStyle(_element.nativeElement, 'position', 'static');
            return _this;
        }
        return BsDatepickerInlineContainerComponent;
    }(BsDatepickerContainerComponent));
    BsDatepickerInlineContainerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-datepicker-inline-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar$ | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          [options]=\"options$ | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\n      <div class=\"btn-today-wrapper\"\n           [class.today-left]=\"todayPos === 'left'\"\n           [class.today-right]=\"todayPos === 'right'\"\n           [class.today-center]=\"todayPos === 'center'\"\n           *ngIf=\"showTodayBtn\">\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\n      </div>\n\n        <div class=\"btn-clear-wrapper\"\n        [class.clear-left]=\"clearPos === 'left'\"\n        [class.clear-right]=\"clearPos === 'right'\"\n        [class.clear-center]=\"clearPos === 'center'\"\n        *ngIf=\"showClearBtn\">\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\n        </div>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\n    <bs-custom-date-view\n      [selectedRange]=\"chosenRange\"\n      [ranges]=\"customRanges\"\n      [customRangeLabel]=\"customRangeBtnLbl\"\n      (onSelect)=\"setRangeOnCalendar($event)\">\n    </bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        '(click)': '_stopPropagation($event)'
                    },
                    animations: [datepickerAnimation]
                },] }
    ];
    BsDatepickerInlineContainerComponent.ctorParameters = function () { return [
        { type: i0.Renderer2 },
        { type: BsDatepickerConfig },
        { type: BsDatepickerStore },
        { type: i0.ElementRef },
        { type: BsDatepickerActions },
        { type: BsDatepickerEffects },
        { type: positioning.PositioningService }
    ]; };

    var BsDatepickerInlineDirective = /** @class */ (function () {
        function BsDatepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            this._elementRef = _elementRef;
            /**
             * Indicates whether datepicker is enabled or not
             */
            this.isDisabled = false;
            /**
             * Emits when datepicker value has been changed
             */
            this.bsValueChange = new i0.EventEmitter();
            this._subs = [];
            // todo: assign only subset of fields
            Object.assign(this, this._config);
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        }
        Object.defineProperty(BsDatepickerInlineDirective.prototype, "bsValue", {
            /**
             * Initial value of datepicker
             */
            set: function (value) {
                if (this._bsValue === value) {
                    return;
                }
                if (!this._bsValue && value) {
                    var now = new Date();
                    value.setMilliseconds(now.getMilliseconds());
                    value.setSeconds(now.getSeconds());
                    value.setMinutes(now.getMinutes());
                    value.setHours(now.getHours());
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        BsDatepickerInlineDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.setConfig();
            // if date changes from external source (model -> view)
            this._subs.push(this.bsValueChange.subscribe(function (value) {
                if (_this._datepickerRef) {
                    _this._datepickerRef.instance.value = value;
                }
            }));
            // if date changes from picker (view -> model)
            if (this._datepickerRef) {
                this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
                    _this.bsValue = value;
                }));
            }
        };
        BsDatepickerInlineDirective.prototype.ngOnChanges = function (changes) {
            if (!this._datepickerRef || !this._datepickerRef.instance) {
                return;
            }
            if (changes.minDate) {
                this._datepickerRef.instance.minDate = this.minDate;
                this.setConfig();
            }
            if (changes.maxDate) {
                this._datepickerRef.instance.maxDate = this.maxDate;
                this.setConfig();
            }
            if (changes.datesDisabled) {
                this._datepickerRef.instance.datesDisabled = this.datesDisabled;
                this.setConfig();
            }
            if (changes.datesEnabled) {
                this._datepickerRef.instance.datesEnabled = this.datesEnabled;
                this._datepickerRef.instance.value = this._bsValue;
            }
            if (changes.isDisabled) {
                this._datepickerRef.instance.isDisabled = this.isDisabled;
                this.setConfig();
            }
            if (changes.dateCustomClasses) {
                this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
                this.setConfig();
            }
            if (changes.dateTooltipTexts) {
                this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
                this.setConfig();
            }
        };
        /**
         * Set config for datepicker
         */
        BsDatepickerInlineDirective.prototype.setConfig = function () {
            if (this._datepicker) {
                this._datepicker.hide();
            }
            this._config = Object.assign({}, this._config, this.bsConfig, {
                value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
                isDisabled: this.isDisabled,
                minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
                dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
                datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
                datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled
            });
            this._datepickerRef = this._datepicker
                .provide({ provide: BsDatepickerConfig, useValue: this._config })
                .attach(BsDatepickerInlineContainerComponent)
                .to(this._elementRef)
                .show();
        };
        BsDatepickerInlineDirective.prototype.ngOnDestroy = function () {
            this._datepicker.dispose();
        };
        return BsDatepickerInlineDirective;
    }());
    BsDatepickerInlineDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: 'bs-datepicker-inline',
                    exportAs: 'bsDatepickerInline'
                },] }
    ];
    BsDatepickerInlineDirective.ctorParameters = function () { return [
        { type: BsDatepickerInlineConfig },
        { type: i0.ElementRef },
        { type: i0.Renderer2 },
        { type: i0.ViewContainerRef },
        { type: componentLoader.ComponentLoaderFactory }
    ]; };
    BsDatepickerInlineDirective.propDecorators = {
        bsConfig: [{ type: i0.Input }],
        isDisabled: [{ type: i0.Input }],
        minDate: [{ type: i0.Input }],
        maxDate: [{ type: i0.Input }],
        dateCustomClasses: [{ type: i0.Input }],
        dateTooltipTexts: [{ type: i0.Input }],
        datesEnabled: [{ type: i0.Input }],
        datesDisabled: [{ type: i0.Input }],
        bsValueChange: [{ type: i0.Output }],
        bsValue: [{ type: i0.Input }]
    };

    var BsDaterangepickerInlineConfig = /** @class */ (function (_super) {
        __extends(BsDaterangepickerInlineConfig, _super);
        function BsDaterangepickerInlineConfig() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            // DatepickerRenderOptions
            _this.displayMonths = 2;
            /** turn on/off animation */
            _this.isAnimated = false;
            return _this;
        }
        return BsDaterangepickerInlineConfig;
    }(BsDatepickerConfig));
    BsDaterangepickerInlineConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function BsDaterangepickerInlineConfig_Factory() { return new BsDaterangepickerInlineConfig(); }, token: BsDaterangepickerInlineConfig, providedIn: "root" });
    BsDaterangepickerInlineConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var BsDaterangepickerContainerComponent = /** @class */ (function (_super) {
        __extends(BsDaterangepickerContainerComponent, _super);
        function BsDaterangepickerContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this._store = _store;
            _this._element = _element;
            _this._actions = _actions;
            _this._positionService = _positionService;
            _this.valueChange = new i0.EventEmitter();
            _this.animationState = 'void';
            _this._rangeStack = [];
            _this.chosenRange = [];
            _this._subs = [];
            _this._effects = _effects;
            _this.customRanges = _this._config.ranges || [];
            _this.customRangeBtnLbl = _this._config.customRangeButtonLabel;
            _renderer.setStyle(_element.nativeElement, 'display', 'block');
            _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
            return _this;
        }
        Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setRangeValue(value);
            },
            enumerable: false,
            configurable: true
        });
        BsDaterangepickerContainerComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a, _b;
            this._positionService.setOptions({
                modifiers: { flip: { enabled: this._config.adaptivePosition } },
                allowedPositions: ['top', 'bottom']
            });
            (_a = this._positionService.event$) === null || _a === void 0 ? void 0 : _a.pipe(operators.take(1)).subscribe(function () {
                _this._positionService.disable();
                if (_this._config.isAnimated) {
                    _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';
                    return;
                }
                _this.animationState = 'unanimated';
            });
            this.containerClass = this._config.containerClass;
            this.isOtherMonthsActive = this._config.selectFromOtherMonth;
            (_b = this._effects) === null || _b === void 0 ? void 0 : _b.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
            // todo: move it somewhere else
            // on selected date change
            this._subs.push(this._store
                .select(function (state) { return state.selectedRange; })
                .subscribe(function (dateRange) {
                _this.valueChange.emit(dateRange);
                _this.chosenRange = dateRange || [];
            }));
        };
        Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "isTopPosition", {
            get: function () {
                return this._element.nativeElement.classList.contains('top');
            },
            enumerable: false,
            configurable: true
        });
        BsDaterangepickerContainerComponent.prototype.positionServiceEnable = function () {
            this._positionService.enable();
        };
        BsDaterangepickerContainerComponent.prototype.daySelectHandler = function (day) {
            if (!day) {
                return;
            }
            var isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
            if (isDisabled) {
                return;
            }
            this.rangesProcessing(day);
        };
        BsDaterangepickerContainerComponent.prototype.monthSelectHandler = function (day) {
            if (!day || day.isDisabled) {
                return;
            }
            day.isSelected = true;
            if (this._config.minMode !== 'month') {
                if (day.isDisabled) {
                    return;
                }
                this._store.dispatch(this._actions.navigateTo({
                    unit: {
                        month: chronos.getMonth(day.date),
                        year: chronos.getFullYear(day.date)
                    },
                    viewMode: 'day'
                }));
                return;
            }
            this.rangesProcessing(day);
        };
        BsDaterangepickerContainerComponent.prototype.yearSelectHandler = function (day) {
            if (!day || day.isDisabled) {
                return;
            }
            day.isSelected = true;
            if (this._config.minMode !== 'year') {
                if (day.isDisabled) {
                    return;
                }
                this._store.dispatch(this._actions.navigateTo({
                    unit: {
                        year: chronos.getFullYear(day.date)
                    },
                    viewMode: 'month'
                }));
                return;
            }
            this.rangesProcessing(day);
        };
        BsDaterangepickerContainerComponent.prototype.rangesProcessing = function (day) {
            // if only one date is already selected
            // and user clicks on previous date
            // start selection from new date
            // but if new date is after initial one
            // than finish selection
            if (this._rangeStack.length === 1) {
                this._rangeStack =
                    day.date >= this._rangeStack[0]
                        ? [this._rangeStack[0], day.date]
                        : [day.date];
            }
            if (this._config.maxDateRange) {
                this.setMaxDateRangeOnCalendar(day.date);
            }
            if (this._rangeStack.length === 0) {
                this._rangeStack = [day.date];
                if (this._config.maxDateRange) {
                    this.setMaxDateRangeOnCalendar(day.date);
                }
            }
            this._store.dispatch(this._actions.selectRange(this._rangeStack));
            if (this._rangeStack.length === 2) {
                this._rangeStack = [];
            }
        };
        BsDaterangepickerContainerComponent.prototype.ngOnDestroy = function () {
            var e_1, _c;
            var _a;
            try {
                for (var _d = __values(this._subs), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var sub = _e.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            (_a = this._effects) === null || _a === void 0 ? void 0 : _a.destroy();
        };
        BsDaterangepickerContainerComponent.prototype.setRangeOnCalendar = function (dates) {
            if (dates) {
                this._rangeStack = dates.value instanceof Date ? [dates.value] : dates.value;
            }
            this._store.dispatch(this._actions.selectRange(this._rangeStack));
        };
        BsDaterangepickerContainerComponent.prototype.setMaxDateRangeOnCalendar = function (currentSelection) {
            var _a;
            var maxDateRange = new Date(currentSelection);
            if (this._config.maxDate) {
                var maxDateValueInMilliseconds = this._config.maxDate.getTime();
                var maxDateRangeInMilliseconds = currentSelection.getTime() + ((this._config.maxDateRange || 0) * dayInMilliseconds);
                maxDateRange = maxDateRangeInMilliseconds > maxDateValueInMilliseconds ?
                    new Date(this._config.maxDate) :
                    new Date(maxDateRangeInMilliseconds);
            }
            else {
                maxDateRange.setDate(currentSelection.getDate() + (this._config.maxDateRange || 0));
            }
            (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setMaxDate(maxDateRange);
        };
        return BsDaterangepickerContainerComponent;
    }(BsDatepickerAbstractComponent));
    BsDaterangepickerContainerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-daterangepicker-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar$ | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          [options]=\"options$ | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\n      <div class=\"btn-today-wrapper\"\n           [class.today-left]=\"todayPos === 'left'\"\n           [class.today-right]=\"todayPos === 'right'\"\n           [class.today-center]=\"todayPos === 'center'\"\n           *ngIf=\"showTodayBtn\">\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\n      </div>\n\n        <div class=\"btn-clear-wrapper\"\n        [class.clear-left]=\"clearPos === 'left'\"\n        [class.clear-right]=\"clearPos === 'right'\"\n        [class.clear-center]=\"clearPos === 'center'\"\n        *ngIf=\"showClearBtn\">\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\n        </div>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\n    <bs-custom-date-view\n      [selectedRange]=\"chosenRange\"\n      [ranges]=\"customRanges\"\n      [customRangeLabel]=\"customRangeBtnLbl\"\n      (onSelect)=\"setRangeOnCalendar($event)\">\n    </bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        class: 'bottom',
                        '(click)': '_stopPropagation($event)',
                        role: 'dialog',
                        'aria-label': 'calendar'
                    },
                    animations: [datepickerAnimation]
                },] }
    ];
    BsDaterangepickerContainerComponent.ctorParameters = function () { return [
        { type: i0.Renderer2 },
        { type: BsDatepickerConfig },
        { type: BsDatepickerStore },
        { type: i0.ElementRef },
        { type: BsDatepickerActions },
        { type: BsDatepickerEffects },
        { type: positioning.PositioningService }
    ]; };

    var BsDaterangepickerInlineContainerComponent = /** @class */ (function (_super) {
        __extends(BsDaterangepickerInlineContainerComponent, _super);
        function BsDaterangepickerInlineContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
            var _this = _super.call(this, _renderer, _config, _store, _element, _actions, _effects, _positioningService) || this;
            _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
            _renderer.setStyle(_element.nativeElement, 'position', 'static');
            return _this;
        }
        return BsDaterangepickerInlineContainerComponent;
    }(BsDaterangepickerContainerComponent));
    BsDaterangepickerInlineContainerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-daterangepicker-inline-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar$ | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          [options]=\"options$ | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\n      <div class=\"btn-today-wrapper\"\n           [class.today-left]=\"todayPos === 'left'\"\n           [class.today-right]=\"todayPos === 'right'\"\n           [class.today-center]=\"todayPos === 'center'\"\n           *ngIf=\"showTodayBtn\">\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\n      </div>\n\n        <div class=\"btn-clear-wrapper\"\n        [class.clear-left]=\"clearPos === 'left'\"\n        [class.clear-right]=\"clearPos === 'right'\"\n        [class.clear-center]=\"clearPos === 'center'\"\n        *ngIf=\"showClearBtn\">\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\n        </div>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\n    <bs-custom-date-view\n      [selectedRange]=\"chosenRange\"\n      [ranges]=\"customRanges\"\n      [customRangeLabel]=\"customRangeBtnLbl\"\n      (onSelect)=\"setRangeOnCalendar($event)\">\n    </bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        '(click)': '_stopPropagation($event)'
                    },
                    animations: [datepickerAnimation]
                },] }
    ];
    BsDaterangepickerInlineContainerComponent.ctorParameters = function () { return [
        { type: i0.Renderer2 },
        { type: BsDatepickerConfig },
        { type: BsDatepickerStore },
        { type: i0.ElementRef },
        { type: BsDatepickerActions },
        { type: BsDatepickerEffects },
        { type: positioning.PositioningService }
    ]; };

    var BsDaterangepickerInlineDirective = /** @class */ (function () {
        function BsDaterangepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            this._elementRef = _elementRef;
            /**
             * Indicates whether datepicker is enabled or not
             */
            this.isDisabled = false;
            /**
             * Emits when daterangepicker value has been changed
             */
            this.bsValueChange = new i0.EventEmitter();
            this._subs = [];
            // todo: assign only subset of fields
            Object.assign(this, this._config);
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        }
        Object.defineProperty(BsDaterangepickerInlineDirective.prototype, "bsValue", {
            /**
             * Initial value of datepicker
             */
            set: function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        BsDaterangepickerInlineDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.setConfig();
            // if date changes from external source (model -> view)
            this._subs.push(this.bsValueChange.subscribe(function (value) {
                if (_this._datepickerRef) {
                    _this._datepickerRef.instance.value = value;
                }
            }));
            // if date changes from picker (view -> model)
            if (this._datepickerRef) {
                this._subs.push(this._datepickerRef.instance.valueChange
                    .pipe(operators.filter(function (range) { return range && range[0] && !!range[1]; }))
                    .subscribe(function (value) {
                    _this.bsValue = value;
                }));
            }
        };
        BsDaterangepickerInlineDirective.prototype.ngOnChanges = function (changes) {
            if (!this._datepickerRef || !this._datepickerRef.instance) {
                return;
            }
            if (changes.minDate) {
                this._datepickerRef.instance.minDate = this.minDate;
                this.setConfig();
            }
            if (changes.maxDate) {
                this._datepickerRef.instance.maxDate = this.maxDate;
                this.setConfig();
            }
            if (changes.datesEnabled) {
                this._datepickerRef.instance.datesEnabled = this.datesEnabled;
            }
            if (changes.datesDisabled) {
                this._datepickerRef.instance.datesDisabled = this.datesDisabled;
                this.setConfig();
            }
            if (changes.daysDisabled) {
                this._datepickerRef.instance.daysDisabled = this.daysDisabled;
                this.setConfig();
            }
            if (changes.isDisabled) {
                this._datepickerRef.instance.isDisabled = this.isDisabled;
                this.setConfig();
            }
            if (changes.dateCustomClasses) {
                this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
                this.setConfig();
            }
        };
        /**
         * Set config for datepicker
         */
        BsDaterangepickerInlineDirective.prototype.setConfig = function () {
            if (this._datepicker) {
                this._datepicker.hide();
            }
            this._config = Object.assign({}, this._config, this.bsConfig, {
                value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
                isDisabled: this.isDisabled,
                minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
                dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
                datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
                datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
                ranges: checkRangesWithMaxDate(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
                maxDateRange: this.bsConfig && this.bsConfig.maxDateRange
            });
            this._datepickerRef = this._datepicker
                .provide({ provide: BsDatepickerConfig, useValue: this._config })
                .attach(BsDaterangepickerInlineContainerComponent)
                .to(this._elementRef)
                .show();
        };
        BsDaterangepickerInlineDirective.prototype.ngOnDestroy = function () {
            this._datepicker.dispose();
        };
        return BsDaterangepickerInlineDirective;
    }());
    BsDaterangepickerInlineDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: 'bs-daterangepicker-inline',
                    exportAs: 'bsDaterangepickerInline'
                },] }
    ];
    BsDaterangepickerInlineDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerInlineConfig },
        { type: i0.ElementRef },
        { type: i0.Renderer2 },
        { type: i0.ViewContainerRef },
        { type: componentLoader.ComponentLoaderFactory }
    ]; };
    BsDaterangepickerInlineDirective.propDecorators = {
        bsValue: [{ type: i0.Input }],
        bsConfig: [{ type: i0.Input }],
        isDisabled: [{ type: i0.Input }],
        minDate: [{ type: i0.Input }],
        maxDate: [{ type: i0.Input }],
        dateCustomClasses: [{ type: i0.Input }],
        daysDisabled: [{ type: i0.Input }],
        datesDisabled: [{ type: i0.Input }],
        datesEnabled: [{ type: i0.Input }],
        bsValueChange: [{ type: i0.Output }]
    };

    var BS_DATEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return BsDatepickerInputDirective; }),
        multi: true
    };
    var BS_DATEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: i0.forwardRef(function () { return BsDatepickerInputDirective; }),
        multi: true
    };
    var BsDatepickerInputDirective = /** @class */ (function () {
        function BsDatepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
            this._picker = _picker;
            this._localeService = _localeService;
            this._renderer = _renderer;
            this._elRef = _elRef;
            this.changeDetection = changeDetection;
            this._onChange = Function.prototype;
            this._onTouched = Function.prototype;
            this._validatorChange = Function.prototype;
            this._subs = new rxjs.Subscription();
        }
        BsDatepickerInputDirective.prototype.ngOnInit = function () {
            var _this = this;
            var setBsValue = function (value) {
                _this._setInputValue(value);
                if (_this._value !== value) {
                    _this._value = value;
                    _this._onChange(value);
                    _this._onTouched();
                }
                _this.changeDetection.markForCheck();
            };
            // if value set via [bsValue] it will not get into value change
            if (this._picker._bsValue) {
                setBsValue(this._picker._bsValue);
            }
            // update input value on datepicker value update
            this._subs.add(this._picker.bsValueChange.subscribe(setBsValue));
            // update input value on locale change
            this._subs.add(this._localeService.localeChange.subscribe(function () {
                _this._setInputValue(_this._value);
            }));
            this._subs.add(this._picker.dateInputFormat$.pipe(operators.distinctUntilChanged()).subscribe(function () {
                _this._setInputValue(_this._value);
            }));
        };
        BsDatepickerInputDirective.prototype.ngOnDestroy = function () {
            this._subs.unsubscribe();
        };
        BsDatepickerInputDirective.prototype.onKeydownEvent = function (event) {
            if (event.keyCode === 13 || event.code === 'Enter') {
                this.hide();
            }
        };
        BsDatepickerInputDirective.prototype._setInputValue = function (value) {
            var initialDate = !value ? ''
                : chronos.formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
            this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
        };
        BsDatepickerInputDirective.prototype.onChange = function (event) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.writeValue(event.target.value);
            this._onChange(this._value);
            if (this._picker._config.returnFocusToInput) {
                this._renderer.selectRootElement(this._elRef.nativeElement).focus();
            }
            this._onTouched();
        };
        BsDatepickerInputDirective.prototype.validate = function (c) {
            var _value = c.value;
            if (_value === null || _value === undefined || _value === '') {
                return null;
            }
            if (chronos.isDate(_value)) {
                var _isDateValid = chronos.isDateValid(_value);
                if (!_isDateValid) {
                    return { bsDate: { invalid: _value } };
                }
                if (this._picker && this._picker.minDate && chronos.isBefore(_value, this._picker.minDate, 'date')) {
                    this.writeValue(this._picker.minDate);
                    return { bsDate: { minDate: this._picker.minDate } };
                }
                if (this._picker && this._picker.maxDate && chronos.isAfter(_value, this._picker.maxDate, 'date')) {
                    this.writeValue(this._picker.maxDate);
                    return { bsDate: { maxDate: this._picker.maxDate } };
                }
            }
            return null;
        };
        BsDatepickerInputDirective.prototype.registerOnValidatorChange = function (fn) {
            this._validatorChange = fn;
        };
        BsDatepickerInputDirective.prototype.writeValue = function (value) {
            if (!value) {
                this._value = void 0;
            }
            else {
                var _localeKey = this._localeService.currentLocale;
                var _locale = chronos.getLocale(_localeKey);
                if (!_locale) {
                    throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
                }
                this._value = chronos.parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
                if (this._picker._config.useUtc) {
                    this._value = chronos.utcAsLocal(this._value);
                }
            }
            this._picker.bsValue = this._value;
        };
        BsDatepickerInputDirective.prototype.setDisabledState = function (isDisabled) {
            this._picker.isDisabled = isDisabled;
            if (isDisabled) {
                this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
                return;
            }
            this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
        };
        BsDatepickerInputDirective.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        BsDatepickerInputDirective.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        BsDatepickerInputDirective.prototype.onBlur = function () {
            this._onTouched();
        };
        BsDatepickerInputDirective.prototype.hide = function () {
            this._picker.hide();
            this._renderer.selectRootElement(this._elRef.nativeElement).blur();
            if (this._picker._config.returnFocusToInput) {
                this._renderer.selectRootElement(this._elRef.nativeElement).focus();
            }
        };
        return BsDatepickerInputDirective;
    }());
    BsDatepickerInputDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: "input[bsDatepicker]",
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(keydown)': 'onKeydownEvent($event)',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
                },] }
    ];
    BsDatepickerInputDirective.ctorParameters = function () { return [
        { type: BsDatepickerDirective, decorators: [{ type: i0.Host }] },
        { type: BsLocaleService },
        { type: i0.Renderer2 },
        { type: i0.ElementRef },
        { type: i0.ChangeDetectorRef }
    ]; };

    var BsDaterangepickerConfig = /** @class */ (function (_super) {
        __extends(BsDaterangepickerConfig, _super);
        function BsDaterangepickerConfig() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            // DatepickerRenderOptions
            _this.displayMonths = 2;
            return _this;
        }
        return BsDaterangepickerConfig;
    }(BsDatepickerConfig));
    BsDaterangepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function BsDaterangepickerConfig_Factory() { return new BsDaterangepickerConfig(); }, token: BsDaterangepickerConfig, providedIn: "root" });
    BsDaterangepickerConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var BsDaterangepickerDirective = /** @class */ (function () {
        function BsDaterangepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            /**
             * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'bottom';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            /**
             * Close daterangepicker on outside click
             */
            this.outsideClick = true;
            /**
             * A selector specifying the element the daterangepicker should be appended to.
             */
            this.container = 'body';
            this.outsideEsc = true;
            this.isDestroy$ = new rxjs.Subject();
            /**
             * Indicates whether daterangepicker's content is enabled or not
             */
            this.isDisabled = false;
            /**
             * Emits when daterangepicker value has been changed
             */
            this.bsValueChange = new i0.EventEmitter();
            this._subs = [];
            this._rangeInputFormat$ = new rxjs.Subject();
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
            Object.assign(this, _config);
            this.onShown = this._datepicker.onShown;
            this.onHidden = this._datepicker.onHidden;
            this.isOpen$ = new rxjs.BehaviorSubject(this.isOpen);
        }
        Object.defineProperty(BsDaterangepickerDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the daterangepicker is currently being shown
             */
            get: function () {
                return this._datepicker.isShown;
            },
            set: function (value) {
                this.isOpen$.next(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDaterangepickerDirective.prototype, "bsValue", {
            /**
             * Initial value of daterangepicker
             */
            set: function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDaterangepickerDirective.prototype, "bsConfig", {
            get: function () {
                return this._bsConfig;
            },
            /**
             * Config object for daterangepicker
             */
            set: function (bsConfig) {
                this._bsConfig = bsConfig;
                this.setConfig();
                this._rangeInputFormat$.next(bsConfig && bsConfig.rangeInputFormat);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDaterangepickerDirective.prototype, "rangeInputFormat$", {
            get: function () {
                return this._rangeInputFormat$;
            },
            enumerable: false,
            configurable: true
        });
        BsDaterangepickerDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.isDestroy$ = new rxjs.Subject();
            this._datepicker.listen({
                outsideClick: this.outsideClick,
                outsideEsc: this.outsideEsc,
                triggers: this.triggers,
                show: function () { return _this.show(); }
            });
            this.setConfig();
        };
        BsDaterangepickerDirective.prototype.ngOnChanges = function (changes) {
            if (!this._datepickerRef || !this._datepickerRef.instance) {
                return;
            }
            if (changes.minDate) {
                this._datepickerRef.instance.minDate = this.minDate;
            }
            if (changes.maxDate) {
                this._datepickerRef.instance.maxDate = this.maxDate;
            }
            if (changes.datesDisabled) {
                this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            }
            if (changes.datesEnabled) {
                this._datepickerRef.instance.datesEnabled = this.datesEnabled;
            }
            if (changes.daysDisabled) {
                this._datepickerRef.instance.daysDisabled = this.daysDisabled;
            }
            if (changes.isDisabled) {
                this._datepickerRef.instance.isDisabled = this.isDisabled;
            }
            if (changes.dateCustomClasses) {
                this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            }
        };
        BsDaterangepickerDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.isOpen$.pipe(operators.filter(function (isOpen) { return isOpen !== _this.isOpen; }), operators.takeUntil(this.isDestroy$))
                .subscribe(function () { return _this.toggle(); });
        };
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        BsDaterangepickerDirective.prototype.show = function () {
            var _this = this;
            if (this._datepicker.isShown) {
                return;
            }
            this.setConfig();
            this._datepickerRef = this._datepicker
                .provide({ provide: BsDatepickerConfig, useValue: this._config })
                .attach(BsDaterangepickerContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({ placement: this.placement });
            // if date changes from external source (model -> view)
            this._subs.push(this.bsValueChange.subscribe(function (value) {
                if (_this._datepickerRef) {
                    _this._datepickerRef.instance.value = value;
                }
            }));
            // if date changes from picker (view -> model)
            if (this._datepickerRef) {
                this._subs.push(this._datepickerRef.instance.valueChange
                    .pipe(operators.filter(function (range) { return range && range[0] && !!range[1]; }))
                    .subscribe(function (value) {
                    _this.bsValue = value;
                    _this.hide();
                }));
            }
        };
        /**
         * Set config for daterangepicker
         */
        BsDaterangepickerDirective.prototype.setConfig = function () {
            this._config = Object.assign({}, this._config, this.bsConfig, {
                value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
                isDisabled: this.isDisabled,
                minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
                dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
                datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
                datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
                ranges: checkRangesWithMaxDate(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
                maxDateRange: this.bsConfig && this.bsConfig.maxDateRange
            });
        };
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        BsDaterangepickerDirective.prototype.hide = function () {
            var e_1, _a;
            if (this.isOpen) {
                this._datepicker.hide();
            }
            try {
                for (var _b = __values(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
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
            if (this._config.returnFocusToInput) {
                this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
            }
        };
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         */
        BsDaterangepickerDirective.prototype.toggle = function () {
            if (this.isOpen) {
                return this.hide();
            }
            this.show();
        };
        BsDaterangepickerDirective.prototype.ngOnDestroy = function () {
            this._datepicker.dispose();
            this.isOpen$.next(false);
            if (this.isDestroy$) {
                this.isDestroy$.next();
                this.isDestroy$.complete();
            }
        };
        return BsDaterangepickerDirective;
    }());
    BsDaterangepickerDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[bsDaterangepicker]',
                    exportAs: 'bsDaterangepicker'
                },] }
    ];
    BsDaterangepickerDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerConfig },
        { type: i0.ElementRef },
        { type: i0.Renderer2 },
        { type: i0.ViewContainerRef },
        { type: componentLoader.ComponentLoaderFactory }
    ]; };
    BsDaterangepickerDirective.propDecorators = {
        placement: [{ type: i0.Input }],
        triggers: [{ type: i0.Input }],
        outsideClick: [{ type: i0.Input }],
        container: [{ type: i0.Input }],
        outsideEsc: [{ type: i0.Input }],
        isOpen: [{ type: i0.Input }],
        onShown: [{ type: i0.Output }],
        onHidden: [{ type: i0.Output }],
        bsValue: [{ type: i0.Input }],
        bsConfig: [{ type: i0.Input }],
        isDisabled: [{ type: i0.Input }],
        minDate: [{ type: i0.Input }],
        maxDate: [{ type: i0.Input }],
        dateCustomClasses: [{ type: i0.Input }],
        daysDisabled: [{ type: i0.Input }],
        datesDisabled: [{ type: i0.Input }],
        datesEnabled: [{ type: i0.Input }],
        bsValueChange: [{ type: i0.Output }]
    };

    var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return BsDaterangepickerInputDirective; }),
        multi: true
    };
    var BS_DATERANGEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: i0.forwardRef(function () { return BsDaterangepickerInputDirective; }),
        multi: true
    };
    var BsDaterangepickerInputDirective = /** @class */ (function () {
        function BsDaterangepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
            this._picker = _picker;
            this._localeService = _localeService;
            this._renderer = _renderer;
            this._elRef = _elRef;
            this.changeDetection = changeDetection;
            this._onChange = Function.prototype;
            this._onTouched = Function.prototype;
            this._validatorChange = Function.prototype;
            this._subs = new rxjs.Subscription();
        }
        BsDaterangepickerInputDirective.prototype.ngOnInit = function () {
            var _this = this;
            var setBsValue = function (value) {
                _this._setInputValue(value);
                if (_this._value !== value) {
                    _this._value = value;
                    _this._onChange(value);
                    _this._onTouched();
                }
                _this.changeDetection.markForCheck();
            };
            // if value set via [bsValue] it will not get into value change
            if (this._picker._bsValue) {
                setBsValue(this._picker._bsValue);
            }
            // update input value on datepicker value update
            this._subs.add(this._picker.bsValueChange.subscribe(function (value) {
                _this._setInputValue(value);
                if (_this._value !== value) {
                    _this._value = value;
                    _this._onChange(value);
                    _this._onTouched();
                }
                _this.changeDetection.markForCheck();
            }));
            // update input value on locale change
            this._subs.add(this._localeService.localeChange.subscribe(function () {
                _this._setInputValue(_this._value);
            }));
            this._subs.add(
            // update input value on format change
            this._picker.rangeInputFormat$.pipe(operators.distinctUntilChanged()).subscribe(function () {
                _this._setInputValue(_this._value);
            }));
        };
        BsDaterangepickerInputDirective.prototype.ngOnDestroy = function () {
            this._subs.unsubscribe();
        };
        BsDaterangepickerInputDirective.prototype.onKeydownEvent = function (event) {
            if (event.keyCode === 13 || event.code === 'Enter') {
                this.hide();
            }
        };
        BsDaterangepickerInputDirective.prototype._setInputValue = function (date) {
            var range = '';
            if (date) {
                var start = !date[0] ? ''
                    : chronos.formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
                var end = !date[1] ? ''
                    : chronos.formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
                range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
            }
            this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
        };
        BsDaterangepickerInputDirective.prototype.onChange = function (event) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.writeValue(event.target.value);
            this._onChange(this._value);
            if (this._picker._config.returnFocusToInput) {
                this._renderer.selectRootElement(this._elRef.nativeElement).focus();
            }
            this._onTouched();
        };
        BsDaterangepickerInputDirective.prototype.validate = function (c) {
            var _value = c.value;
            var errors = [];
            if (_value === null || _value === undefined || !chronos.isArray(_value)) {
                return null;
            }
            _value = _value.slice().sort(function (a, b) { return a.getTime() - b.getTime(); });
            var _isFirstDateValid = chronos.isDateValid(_value[0]);
            var _isSecondDateValid = chronos.isDateValid(_value[1]);
            if (!_isFirstDateValid) {
                return { bsDate: { invalid: _value[0] } };
            }
            if (!_isSecondDateValid) {
                return { bsDate: { invalid: _value[1] } };
            }
            if (this._picker && this._picker.minDate && chronos.isBefore(_value[0], this._picker.minDate, 'date')) {
                _value[0] = this._picker.minDate;
                errors.push({ bsDate: { minDate: this._picker.minDate } });
            }
            if (this._picker && this._picker.maxDate && chronos.isAfter(_value[1], this._picker.maxDate, 'date')) {
                _value[1] = this._picker.maxDate;
                errors.push({ bsDate: { maxDate: this._picker.maxDate } });
            }
            if (errors.length > 0) {
                this.writeValue(_value);
                return errors;
            }
            return null;
        };
        BsDaterangepickerInputDirective.prototype.registerOnValidatorChange = function (fn) {
            this._validatorChange = fn;
        };
        BsDaterangepickerInputDirective.prototype.writeValue = function (value) {
            var _this = this;
            if (!value) {
                this._value = void 0;
            }
            else {
                var _localeKey = this._localeService.currentLocale;
                var _locale = chronos.getLocale(_localeKey);
                if (!_locale) {
                    throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
                }
                var _input = [];
                if (typeof value === 'string') {
                    var trimmedSeparator = this._picker._config.rangeSeparator.trim();
                    _input = value
                        .split(trimmedSeparator.length > 0 ? trimmedSeparator : this._picker._config.rangeSeparator)
                        .map(function (_val) { return _val.trim(); });
                }
                if (Array.isArray(value)) {
                    _input = value;
                }
                this._value = _input
                    .map(function (_val) {
                    if (_this._picker._config.useUtc) {
                        return chronos.utcAsLocal(chronos.parseDate(_val, _this._picker._config.rangeInputFormat, _this._localeService.currentLocale));
                    }
                    return chronos.parseDate(_val, _this._picker._config.rangeInputFormat, _this._localeService.currentLocale);
                })
                    .map(function (date) { return (isNaN(date.valueOf()) ? void 0 : date); });
            }
            this._picker.bsValue = this._value;
        };
        BsDaterangepickerInputDirective.prototype.setDisabledState = function (isDisabled) {
            this._picker.isDisabled = isDisabled;
            if (isDisabled) {
                this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
                return;
            }
            this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        BsDaterangepickerInputDirective.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        BsDaterangepickerInputDirective.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        BsDaterangepickerInputDirective.prototype.onBlur = function () {
            this._onTouched();
        };
        BsDaterangepickerInputDirective.prototype.hide = function () {
            this._picker.hide();
            this._renderer.selectRootElement(this._elRef.nativeElement).blur();
            if (this._picker._config.returnFocusToInput) {
                this._renderer.selectRootElement(this._elRef.nativeElement).focus();
            }
        };
        return BsDaterangepickerInputDirective;
    }());
    BsDaterangepickerInputDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: "input[bsDaterangepicker]",
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(keydown)': 'onKeydownEvent($event)',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
                },] }
    ];
    BsDaterangepickerInputDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerDirective, decorators: [{ type: i0.Host }] },
        { type: BsLocaleService },
        { type: i0.Renderer2 },
        { type: i0.ElementRef },
        { type: i0.ChangeDetectorRef }
    ]; };

    var DateFormatter = /** @class */ (function () {
        function DateFormatter() {
        }
        DateFormatter.prototype.format = function (date, format, locale) {
            return chronos.formatDate(date, format, locale);
        };
        return DateFormatter;
    }());

    var DatePickerInnerComponent = /** @class */ (function () {
        function DatePickerInnerComponent() {
            this.monthColLimit = 0;
            this.yearColLimit = 0;
            this.selectionDone = new i0.EventEmitter(undefined);
            this.update = new i0.EventEmitter(false);
            this.activeDateChange = new i0.EventEmitter(undefined);
            this.stepDay = {};
            this.stepMonth = {};
            this.stepYear = {};
            this.modes = ['day', 'month', 'year'];
            this.dateFormatter = new DateFormatter();
        }
        Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
            get: function () {
                return this._activeDate;
            },
            set: function (value) {
                this._activeDate = value;
            },
            enumerable: false,
            configurable: true
        });
        // todo: add formatter value to Date object
        DatePickerInnerComponent.prototype.ngOnInit = function () {
            // todo: use date for unique value
            this.uniqueId = "datepicker--" + Math.floor(Math.random() * 10000);
            if (this.initDate) {
                this.activeDate = this.initDate;
                this.selectedDate = new Date(this.activeDate.valueOf());
                this.update.emit(this.activeDate);
            }
            else if (this.activeDate === undefined) {
                this.activeDate = new Date();
            }
        };
        // this.refreshView should be called here to reflect the changes on the fly
        DatePickerInnerComponent.prototype.ngOnChanges = function (changes) {
            this.refreshView();
            this.checkIfActiveDateGotUpdated(changes.activeDate);
        };
        // Check if activeDate has been update and then emit the activeDateChange with the new date
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        DatePickerInnerComponent.prototype.checkIfActiveDateGotUpdated = function (activeDate) {
            if (activeDate && !activeDate.firstChange) {
                var previousValue = activeDate.previousValue;
                if (previousValue &&
                    previousValue instanceof Date &&
                    previousValue.getTime() !== activeDate.currentValue.getTime()) {
                    this.activeDateChange.emit(this.activeDate);
                }
            }
        };
        DatePickerInnerComponent.prototype.setCompareHandler = function (handler, type) {
            if (type === 'day') {
                this.compareHandlerDay = handler;
            }
            if (type === 'month') {
                this.compareHandlerMonth = handler;
            }
            if (type === 'year') {
                this.compareHandlerYear = handler;
            }
        };
        DatePickerInnerComponent.prototype.compare = function (date1, date2) {
            if (date1 === undefined || date2 === undefined) {
                return undefined;
            }
            if (this.datepickerMode === 'day' && this.compareHandlerDay) {
                return this.compareHandlerDay(date1, date2);
            }
            if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
                return this.compareHandlerMonth(date1, date2);
            }
            if (this.datepickerMode === 'year' && this.compareHandlerYear) {
                return this.compareHandlerYear(date1, date2);
            }
            return void 0;
        };
        DatePickerInnerComponent.prototype.setRefreshViewHandler = function (handler, type) {
            if (type === 'day') {
                this.refreshViewHandlerDay = handler;
            }
            if (type === 'month') {
                this.refreshViewHandlerMonth = handler;
            }
            if (type === 'year') {
                this.refreshViewHandlerYear = handler;
            }
        };
        DatePickerInnerComponent.prototype.refreshView = function () {
            if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
                this.refreshViewHandlerDay();
            }
            if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
                this.refreshViewHandlerMonth();
            }
            if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
                this.refreshViewHandlerYear();
            }
        };
        DatePickerInnerComponent.prototype.dateFilter = function (date, format) {
            return this.dateFormatter.format(date, format, this.locale);
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        DatePickerInnerComponent.prototype.isActive = function (dateObject) {
            if (this.compare(dateObject.date, this.activeDate) === 0) {
                this.activeDateId = dateObject.uid;
                return true;
            }
            return false;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        DatePickerInnerComponent.prototype.createDateObject = function (date, format) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var dateObject = {};
            dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            dateObject.date = this.fixTimeZone(dateObject.date);
            dateObject.label = this.dateFilter(date, format);
            dateObject.selected = this.compare(date, this.selectedDate) === 0;
            dateObject.disabled = this.isDisabled(date);
            dateObject.current = this.compare(date, new Date()) === 0;
            dateObject.customClass = this.getCustomClassForDate(dateObject.date);
            return dateObject;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        DatePickerInnerComponent.prototype.split = function (arr, size) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var arrays = [];
            while (arr.length > 0) {
                arrays.push(arr.splice(0, size));
            }
            return arrays;
        };
        // Fix a hard-reproducible bug with timezones
        // The bug depends on OS, browser, current timezone and current date
        // i.e.
        // var date = new Date(2014, 0, 1);
        // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
        // date.getHours()); can result in "2013 11 31 23" because of the bug.
        DatePickerInnerComponent.prototype.fixTimeZone = function (date) {
            var hours = date.getHours();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
        };
        DatePickerInnerComponent.prototype.select = function (date, isManual) {
            if (isManual === void 0) { isManual = true; }
            if (this.datepickerMode === this.minMode) {
                if (!this.activeDate) {
                    this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
                }
                this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                this.activeDate = this.fixTimeZone(this.activeDate);
                if (isManual) {
                    this.selectionDone.emit(this.activeDate);
                }
            }
            else {
                this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                this.activeDate = this.fixTimeZone(this.activeDate);
                if (isManual && this.datepickerMode) {
                    this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
                }
            }
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
            this.refreshView();
        };
        DatePickerInnerComponent.prototype.move = function (direction) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var expectedStep;
            if (this.datepickerMode === 'day') {
                expectedStep = this.stepDay;
            }
            if (this.datepickerMode === 'month') {
                expectedStep = this.stepMonth;
            }
            if (this.datepickerMode === 'year') {
                expectedStep = this.stepYear;
            }
            if (expectedStep && this.activeDate) {
                var year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
                var month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
                this.activeDate = new Date(year, month, 1);
                this.refreshView();
                this.activeDateChange.emit(this.activeDate);
            }
        };
        DatePickerInnerComponent.prototype.toggleMode = function (_direction) {
            var direction = _direction || 1;
            if ((this.datepickerMode === this.maxMode && direction === 1) ||
                (this.datepickerMode === this.minMode && direction === -1)) {
                return;
            }
            if (this.datepickerMode) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
            }
            this.refreshView();
        };
        DatePickerInnerComponent.prototype.getCustomClassForDate = function (date) {
            var _this = this;
            if (!this.customClass) {
                return '';
            }
            // todo: build a hash of custom classes, it will work faster
            var customClassObject = this.customClass.find(function (customClass) {
                return (customClass.date.valueOf() === date.valueOf() &&
                    customClass.mode === _this.datepickerMode);
            }, this);
            return customClassObject === undefined ? '' : customClassObject.clazz;
        };
        DatePickerInnerComponent.prototype.compareDateDisabled = function (date1Disabled, date2) {
            if (date1Disabled === undefined || date2 === undefined) {
                return undefined;
            }
            if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
                return this.compareHandlerDay(date1Disabled.date, date2);
            }
            if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
                return this.compareHandlerMonth(date1Disabled.date, date2);
            }
            if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
                return this.compareHandlerYear(date1Disabled.date, date2);
            }
            return undefined;
        };
        DatePickerInnerComponent.prototype.isDisabled = function (date) {
            var _this = this;
            var isDateDisabled = false;
            if (this.dateDisabled) {
                this.dateDisabled.forEach(function (disabledDate) {
                    if (_this.compareDateDisabled(disabledDate, date) === 0) {
                        isDateDisabled = true;
                    }
                });
            }
            if (this.dayDisabled) {
                isDateDisabled =
                    isDateDisabled ||
                        this.dayDisabled.indexOf(date.getDay()) > -1;
            }
            if (isDateDisabled) {
                return isDateDisabled;
            }
            var minDate = Number(this.minDate && this.compare(date, this.minDate));
            if (!isNaN(minDate)) {
                return minDate < 0;
            }
            var maxDate = Number(this.maxDate && this.compare(date, this.maxDate));
            if (!isNaN(maxDate)) {
                return maxDate > 0;
            }
            return false;
        };
        return DatePickerInnerComponent;
    }());
    DatePickerInnerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'datepicker-inner',
                    template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf='datepickerMode' class='well well-sm bg-faded p-a card' role='application'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] }
    ];
    DatePickerInnerComponent.propDecorators = {
        locale: [{ type: i0.Input }],
        datepickerMode: [{ type: i0.Input }],
        startingDay: [{ type: i0.Input }],
        yearRange: [{ type: i0.Input }],
        minDate: [{ type: i0.Input }],
        maxDate: [{ type: i0.Input }],
        minMode: [{ type: i0.Input }],
        maxMode: [{ type: i0.Input }],
        showWeeks: [{ type: i0.Input }],
        formatDay: [{ type: i0.Input }],
        formatMonth: [{ type: i0.Input }],
        formatYear: [{ type: i0.Input }],
        formatDayHeader: [{ type: i0.Input }],
        formatDayTitle: [{ type: i0.Input }],
        formatMonthTitle: [{ type: i0.Input }],
        onlyCurrentMonth: [{ type: i0.Input }],
        shortcutPropagation: [{ type: i0.Input }],
        customClass: [{ type: i0.Input }],
        monthColLimit: [{ type: i0.Input }],
        yearColLimit: [{ type: i0.Input }],
        dateDisabled: [{ type: i0.Input }],
        dayDisabled: [{ type: i0.Input }],
        initDate: [{ type: i0.Input }],
        selectionDone: [{ type: i0.Output }],
        update: [{ type: i0.Output }],
        activeDateChange: [{ type: i0.Output }],
        activeDate: [{ type: i0.Input }]
    };

    var DatepickerConfig = /** @class */ (function () {
        function DatepickerConfig() {
            this.locale = 'en';
            this.datepickerMode = 'day';
            this.startingDay = 0;
            this.yearRange = 20;
            this.minMode = 'day';
            this.maxMode = 'year';
            this.showWeeks = true;
            this.formatDay = 'DD';
            this.formatMonth = 'MMMM';
            this.formatYear = 'YYYY';
            this.formatDayHeader = 'dd';
            this.formatDayTitle = 'MMMM YYYY';
            this.formatMonthTitle = 'YYYY';
            this.onlyCurrentMonth = false;
            this.monthColLimit = 3;
            this.yearColLimit = 5;
            this.shortcutPropagation = false;
        }
        return DatepickerConfig;
    }());
    DatepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function DatepickerConfig_Factory() { return new DatepickerConfig(); }, token: DatepickerConfig, providedIn: "root" });
    DatepickerConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return DatePickerComponent; }),
        multi: true
    };
    var DatePickerComponent = /** @class */ (function () {
        function DatePickerComponent(config) {
            /** sets datepicker mode, supports: `day`, `month`, `year` */
            this.datepickerMode = 'day';
            /** if false week numbers will be hidden */
            this.showWeeks = true;
            /** number of months displayed in a single row of month picker */
            this.monthColLimit = 3;
            /** number of years displayed in a single row of year picker */
            this.yearColLimit = 5;
            this.selectionDone = new i0.EventEmitter(undefined);
            /** callback to invoke when the activeDate is changed. */
            this.activeDateChange = new i0.EventEmitter(undefined);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.onChange = Function.prototype;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.onTouched = Function.prototype;
            this._now = new Date();
            this.config = config;
            this.configureOptions();
        }
        Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
            /** currently active date */
            get: function () {
                return this._activeDate || this._now;
            },
            set: function (value) {
                this._activeDate = value;
            },
            enumerable: false,
            configurable: true
        });
        DatePickerComponent.prototype.configureOptions = function () {
            Object.assign(this, this.config);
        };
        DatePickerComponent.prototype.onUpdate = function (event) {
            this.activeDate = event;
            this.onChange(event);
        };
        DatePickerComponent.prototype.onSelectionDone = function (event) {
            this.selectionDone.emit(event);
        };
        DatePickerComponent.prototype.onActiveDateChange = function (event) {
            this.activeDateChange.emit(event);
        };
        // todo: support null value
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        DatePickerComponent.prototype.writeValue = function (value) {
            var _a, _b;
            if (((_a = this._datePicker) === null || _a === void 0 ? void 0 : _a.compare(value, this._activeDate)) === 0) {
                return;
            }
            if (value && value instanceof Date) {
                this.activeDate = value;
                (_b = this._datePicker) === null || _b === void 0 ? void 0 : _b.select(value, false);
                return;
            }
            this.activeDate = value ? new Date(value) : void 0;
        };
        DatePickerComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        DatePickerComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        return DatePickerComponent;
    }());
    DatePickerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'datepicker',
                    template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    DatePickerComponent.ctorParameters = function () { return [
        { type: DatepickerConfig }
    ]; };
    DatePickerComponent.propDecorators = {
        datepickerMode: [{ type: i0.Input }],
        initDate: [{ type: i0.Input }],
        minDate: [{ type: i0.Input }],
        maxDate: [{ type: i0.Input }],
        minMode: [{ type: i0.Input }],
        maxMode: [{ type: i0.Input }],
        showWeeks: [{ type: i0.Input }],
        formatDay: [{ type: i0.Input }],
        formatMonth: [{ type: i0.Input }],
        formatYear: [{ type: i0.Input }],
        formatDayHeader: [{ type: i0.Input }],
        formatDayTitle: [{ type: i0.Input }],
        formatMonthTitle: [{ type: i0.Input }],
        startingDay: [{ type: i0.Input }],
        yearRange: [{ type: i0.Input }],
        onlyCurrentMonth: [{ type: i0.Input }],
        shortcutPropagation: [{ type: i0.Input }],
        monthColLimit: [{ type: i0.Input }],
        yearColLimit: [{ type: i0.Input }],
        customClass: [{ type: i0.Input }],
        dateDisabled: [{ type: i0.Input }],
        dayDisabled: [{ type: i0.Input }],
        activeDate: [{ type: i0.Input }],
        selectionDone: [{ type: i0.Output }],
        activeDateChange: [{ type: i0.Output }],
        _datePicker: [{ type: i0.ViewChild, args: [DatePickerInnerComponent, { static: true },] }]
    };

    // @deprecated
    var DayPickerComponent = /** @class */ (function () {
        function DayPickerComponent(datePicker) {
            this.labels = [];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.rows = [];
            this.weekNumbers = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
            get: function () {
                return !utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        /*protected getDaysInMonth(year:number, month:number) {
         return ((month === 1) && (year % 4 === 0) &&
         ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
         }*/
        DayPickerComponent.prototype.ngOnInit = function () {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var self = this;
            this.datePicker.stepDay = { months: 1 };
            // todo valorkin fix
            this.datePicker.setRefreshViewHandler(function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                var that = this;
                var year = that.activeDate.getFullYear();
                var month = that.activeDate.getMonth();
                var firstDayOfMonth = new Date(year, month, 1);
                var difference = that.startingDay - firstDayOfMonth.getDay();
                var numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
                var firstDate = new Date(firstDayOfMonth.getTime());
                if (numDisplayedFromPreviousMonth > 0) {
                    firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
                }
                // 42 is the number of days on a six-week calendar
                var _days = self.getDates(firstDate, 42);
                var days = [];
                for (var i = 0; i < 42; i++) {
                    var _dateObject = that.createDateObject(_days[i], that.formatDay);
                    _dateObject.secondary = _days[i].getMonth() !== month;
                    _dateObject.uid = that.uniqueId + '-' + i;
                    days[i] = _dateObject;
                }
                self.labels = [];
                for (var j = 0; j < 7; j++) {
                    self.labels[j] = {};
                    self.labels[j].abbr = that.dateFilter(days[j].date, that.formatDayHeader);
                    self.labels[j].full = that.dateFilter(days[j].date, 'EEEE');
                }
                self.title = that.dateFilter(that.activeDate, that.formatDayTitle);
                self.rows = that.split(days, 7);
                if (that.showWeeks) {
                    self.weekNumbers = [];
                    var thursdayIndex = (4 + 7 - that.startingDay) % 7;
                    var numWeeks = self.rows.length;
                    for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                        var _date = self.rows[curWeek][thursdayIndex].date;
                        if (_date) {
                            self.weekNumbers.push(self.getISO8601WeekNumber(_date));
                        }
                    }
                }
            }, 'day');
            this.datePicker.setCompareHandler(function (date1, date2) {
                var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
                var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
                return d1.getTime() - d2.getTime();
            }, 'day');
            this.datePicker.refreshView();
        };
        DayPickerComponent.prototype.getDates = function (startDate, n) {
            var dates = new Array(n);
            var current = new Date(startDate.getTime());
            var i = 0;
            var date;
            while (i < n) {
                date = new Date(current.getTime());
                date = this.datePicker.fixTimeZone(date);
                dates[i++] = date;
                current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
            }
            return dates;
        };
        DayPickerComponent.prototype.getISO8601WeekNumber = function (date) {
            var checkDate = new Date(date.getTime());
            // Thursday
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            var time = checkDate.getTime();
            // Compare with Jan 1
            checkDate.setMonth(0);
            checkDate.setDate(1);
            return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
        };
        return DayPickerComponent;
    }());
    DayPickerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'daypicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "]
                },] }
    ];
    DayPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent }
    ]; };

    // @deprecated
    var MonthPickerComponent = /** @class */ (function () {
        function MonthPickerComponent(datePicker) {
            this.rows = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
            get: function () {
                return !utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        MonthPickerComponent.prototype.ngOnInit = function () {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var self = this;
            this.datePicker.stepMonth = { years: 1 };
            this.datePicker.setRefreshViewHandler(function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                var that = this;
                var months = new Array(12);
                var year = that.activeDate.getFullYear();
                var date;
                for (var i = 0; i < 12; i++) {
                    date = new Date(year, i, 1);
                    date = that.fixTimeZone(date);
                    months[i] = that.createDateObject(date, that.formatMonth);
                    months[i].uid = that.uniqueId + '-' + i;
                }
                self.title = that.dateFilter(that.activeDate, that.formatMonthTitle);
                self.rows = that.split(months, self.datePicker.monthColLimit);
            }, 'month');
            this.datePicker.setCompareHandler(function (date1, date2) {
                var d1 = new Date(date1.getFullYear(), date1.getMonth());
                var d2 = new Date(date2.getFullYear(), date2.getMonth());
                return d1.getTime() - d2.getTime();
            }, 'month');
            this.datePicker.refreshView();
        };
        return MonthPickerComponent;
    }());
    MonthPickerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'monthpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                },] }
    ];
    MonthPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent }
    ]; };

    // @deprecated
    var YearPickerComponent = /** @class */ (function () {
        function YearPickerComponent(datePicker) {
            this.rows = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
            get: function () {
                return !utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        YearPickerComponent.prototype.ngOnInit = function () {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var self = this;
            this.datePicker.stepYear = { years: this.datePicker.yearRange };
            this.datePicker.setRefreshViewHandler(function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                var that = this;
                var years = new Array(that.yearRange);
                var date;
                var start = self.getStartingYear(that.activeDate.getFullYear()) || 0;
                for (var i = 0; i < that.yearRange; i++) {
                    date = new Date(start + i, 0, 1);
                    date = that.fixTimeZone(date);
                    years[i] = that.createDateObject(date, that.formatYear);
                    years[i].uid = that.uniqueId + '-' + i;
                }
                self.title = [years[0].label, years[that.yearRange - 1].label].join(' - ');
                self.rows = that.split(years, self.datePicker.yearColLimit);
            }, 'year');
            this.datePicker.setCompareHandler(function (date1, date2) {
                return date1.getFullYear() - date2.getFullYear();
            }, 'year');
            this.datePicker.refreshView();
        };
        YearPickerComponent.prototype.getStartingYear = function (year) {
            // todo: parseInt
            if (this.datePicker && this.datePicker.yearRange) {
                return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
            }
            return undefined;
        };
        return YearPickerComponent;
    }());
    YearPickerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'yearpicker',
                    template: "\n    <table *ngIf=\"datePicker.datepickerMode==='year'\" role='grid'>\n      <thead>\n      <tr>\n        <th>\n          <button type='button' class='btn btn-default btn-sm pull-left float-left'\n                  (click)='datePicker.move(-1)' tabindex='-1'>\u2039\n          </button>\n        </th>\n        <th [attr.colspan]='((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2'>\n          <button [id]=\"datePicker.uniqueId + '-title'\" role='heading'\n                  type='button' class='btn btn-default btn-sm'\n                  (click)='datePicker.toggleMode(0)'\n                  [disabled]='datePicker.datepickerMode === datePicker.maxMode'\n                  [ngClass]='{disabled: datePicker.datepickerMode === datePicker.maxMode}' tabindex='-1'\n                  style='width:100%;'>\n            <strong>{{ title }}</strong>\n          </button>\n        </th>\n        <th>\n          <button type='button' class='btn btn-default btn-sm pull-right float-right'\n                  (click)='datePicker.move(1)' tabindex='-1'>\u203A\n          </button>\n        </th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor='let rowz of rows'>\n        <td *ngFor='let dtz of rowz' class='text-center' role='gridcell' [attr.id]='dtz.uid'>\n          <button type='button' style='min-width:100%;' class='btn btn-default'\n                  [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                  [disabled]='dtz.disabled'\n                  (click)='datePicker.select(dtz.date)' tabindex='-1'>\n            <span\n              [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  ",
                    styles: ["\n      :host .btn-info .text-success {\n        color: #fff !important;\n      }\n    "]
                },] }
    ];
    YearPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent }
    ]; };

    var BsCalendarLayoutComponent = /** @class */ (function () {
        function BsCalendarLayoutComponent() {
        }
        return BsCalendarLayoutComponent;
    }());
    BsCalendarLayoutComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-calendar-layout',
                    template: "\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "
                },] }
    ];

    var BsCurrentDateViewComponent = /** @class */ (function () {
        function BsCurrentDateViewComponent() {
        }
        return BsCurrentDateViewComponent;
    }());
    BsCurrentDateViewComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-current-date',
                    template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
                },] }
    ];
    BsCurrentDateViewComponent.propDecorators = {
        title: [{ type: i0.Input }]
    };

    var BsCustomDatesViewComponent = /** @class */ (function () {
        function BsCustomDatesViewComponent() {
            this.onSelect = new i0.EventEmitter();
        }
        BsCustomDatesViewComponent.prototype.selectFromRanges = function (range) {
            this.onSelect.emit(range);
        };
        return BsCustomDatesViewComponent;
    }());
    BsCustomDatesViewComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-custom-date-view',
                    template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\"\n        type=\"button\"\n        class=\"btn\"\n        (click)=\"selectFromRanges(range)\"\n        [class.selected]=\"range.value === selectedRange\">\n        {{ range.label }}\n      </button>\n    </div>\n  ",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    BsCustomDatesViewComponent.propDecorators = {
        ranges: [{ type: i0.Input }],
        selectedRange: [{ type: i0.Input }],
        customRangeLabel: [{ type: i0.Input }],
        onSelect: [{ type: i0.Output }]
    };

    var BsDatepickerDayDecoratorComponent = /** @class */ (function () {
        function BsDatepickerDayDecoratorComponent(_config, _elRef, _renderer) {
            this._config = _config;
            this._elRef = _elRef;
            this._renderer = _renderer;
            this.day = { date: new Date(), label: '' };
        }
        BsDatepickerDayDecoratorComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a, _b, _c;
            if (((_a = this.day) === null || _a === void 0 ? void 0 : _a.isToday) && this._config && this._config.customTodayClass) {
                this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
            }
            if (typeof ((_b = this.day) === null || _b === void 0 ? void 0 : _b.customClasses) === 'string') {
                (_c = this.day) === null || _c === void 0 ? void 0 : _c.customClasses.split(' ').filter(function (className) { return className; }).forEach(function (className) {
                    _this._renderer.addClass(_this._elRef.nativeElement, className);
                });
            }
        };
        return BsDatepickerDayDecoratorComponent;
    }());
    BsDatepickerDayDecoratorComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: '[bsDatepickerDayDecorator]',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.disabled]': 'day.isDisabled',
                        '[class.is-highlighted]': 'day.isHovered',
                        '[class.is-other-month]': 'day.isOtherMonth',
                        '[class.is-active-other-month]': 'day.isOtherMonthHovered',
                        '[class.in-range]': 'day.isInRange',
                        '[class.select-start]': 'day.isSelectionStart',
                        '[class.select-end]': 'day.isSelectionEnd',
                        '[class.selected]': 'day.isSelected'
                    },
                    template: "{{ day && day.label || '' }}"
                },] }
    ];
    BsDatepickerDayDecoratorComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig },
        { type: i0.ElementRef },
        { type: i0.Renderer2 }
    ]; };
    BsDatepickerDayDecoratorComponent.propDecorators = {
        day: [{ type: i0.Input }]
    };

    /** *************** */
    // events
    /** *************** */
    var BsNavigationDirection;
    (function (BsNavigationDirection) {
        BsNavigationDirection[BsNavigationDirection["UP"] = 0] = "UP";
        BsNavigationDirection[BsNavigationDirection["DOWN"] = 1] = "DOWN";
    })(BsNavigationDirection || (BsNavigationDirection = {}));

    var BsDatepickerNavigationViewComponent = /** @class */ (function () {
        function BsDatepickerNavigationViewComponent() {
            this.onNavigate = new i0.EventEmitter();
            this.onViewMode = new i0.EventEmitter();
        }
        BsDatepickerNavigationViewComponent.prototype.navTo = function (down) {
            this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
        };
        BsDatepickerNavigationViewComponent.prototype.view = function (viewMode) {
            this.onViewMode.emit(viewMode);
        };
        return BsDatepickerNavigationViewComponent;
    }());
    BsDatepickerNavigationViewComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-datepicker-navigation-view',
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            type=\"button\"\n            (click)=\"navTo(true)\">\n      <span>&lsaquo;</span>\n    </button>\n\n    <ng-container *ngIf=\"calendar && calendar.monthTitle\">\n      &#8203;  <!-- zero-width space needed for correct alignment\n                  with preserveWhitespaces: false in Angular -->\n\n      <button class=\"current\"\n            type=\"button\"\n            (click)=\"view('month')\"\n      ><span>{{ calendar.monthTitle }}</span>\n      </button>\n    </ng-container>\n\n    &#8203;  <!-- zero-width space needed for correct alignment\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\" (click)=\"view('year')\" type=\"button\">\n      <span>{{ calendar.yearTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignment\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            type=\"button\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                },] }
    ];
    BsDatepickerNavigationViewComponent.propDecorators = {
        calendar: [{ type: i0.Input }],
        onNavigate: [{ type: i0.Output }],
        onViewMode: [{ type: i0.Output }]
    };

    var BsDaysCalendarViewComponent = /** @class */ (function () {
        function BsDaysCalendarViewComponent(_config) {
            this._config = _config;
            this.onNavigate = new i0.EventEmitter();
            this.onViewMode = new i0.EventEmitter();
            this.onSelect = new i0.EventEmitter();
            this.onHover = new i0.EventEmitter();
            this.onHoverWeek = new i0.EventEmitter();
            this.isiOS = (/iPad|iPhone|iPod/.test(navigator.platform) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
            if (this._config.dateTooltipTexts && this._config.dateTooltipTexts.length > 0) {
                this.isShowTooltip = true;
            }
        }
        BsDaysCalendarViewComponent.prototype.navigateTo = function (event) {
            var step = BsNavigationDirection.DOWN === event ? -1 : 1;
            this.onNavigate.emit({ step: { month: step } });
        };
        BsDaysCalendarViewComponent.prototype.changeViewMode = function (event) {
            this.onViewMode.emit(event);
        };
        BsDaysCalendarViewComponent.prototype.selectDay = function (event) {
            this.onSelect.emit(event);
        };
        BsDaysCalendarViewComponent.prototype.selectWeek = function (week) {
            var _this = this;
            if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
                return;
            }
            if (week.days.length === 0) {
                return;
            }
            if (this._config.selectWeek && week.days[0]
                && !week.days[0].isDisabled
                && this._config.selectFromOtherMonth) {
                this.onSelect.emit(week.days[0]);
                return;
            }
            var selectedDay = week.days.find(function (day) {
                return _this._config.selectFromOtherMonth
                    ? !day.isDisabled
                    : !day.isOtherMonth && !day.isDisabled;
            });
            this.onSelect.emit(selectedDay);
            if (this._config.selectWeekDateRange) {
                var days = week.days.slice(0);
                var lastDayOfRange = days.reverse().find(function (day) {
                    return _this._config.selectFromOtherMonth
                        ? !day.isDisabled
                        : !day.isOtherMonth && !day.isDisabled;
                });
                this.onSelect.emit(lastDayOfRange);
            }
        };
        BsDaysCalendarViewComponent.prototype.weekHoverHandler = function (cell, isHovered) {
            var _this = this;
            if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
                return;
            }
            var hasActiveDays = cell.days.find(function (day) {
                return _this._config.selectFromOtherMonth
                    ? !day.isDisabled
                    : !day.isOtherMonth && !day.isDisabled;
            });
            if (hasActiveDays) {
                cell.isHovered = isHovered;
                this.isWeekHovered = isHovered;
                this.onHoverWeek.emit(cell);
            }
        };
        BsDaysCalendarViewComponent.prototype.hoverDay = function (cell, isHovered) {
            if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
                cell.isOtherMonthHovered = isHovered;
            }
            if (this._config.dateTooltipTexts) {
                cell.tooltipText = '';
                this._config.dateTooltipTexts.forEach(function (dateData) {
                    if (chronos.isSameDay(dateData.date, cell.date)) {
                        cell.tooltipText = dateData.tooltipText;
                        return;
                    }
                });
            }
            this.onHover.emit({ cell: cell, isHovered: isHovered });
        };
        return BsDaysCalendarViewComponent;
    }());
    BsDaysCalendarViewComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-days-calendar-view',
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options && options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" [class.active-week]=\"isWeekHovered\"  *ngIf=\"options && options.showWeekNumbers\">\n            <span *ngIf=\"isiOS\" (click)=\"selectWeek(week)\">{{ calendar.weekNumbers[i] }}</span>\n            <span *ngIf=\"!isiOS\"\n                (click)=\"selectWeek(week)\"\n                (mouseenter)=\"weekHoverHandler(week, true)\"\n                (mouseleave)=\"weekHoverHandler(week, false)\">{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n\n            <!-- When we want to show tooltips for dates -->\n            <span *ngIf=\"!isiOS && isShowTooltip\" bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                tooltip=\"{{day.tooltipText}}\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }} 3</span>\n            <!-- When tooltips for dates are disabled -->\n            <span *ngIf=\"!isiOS && !isShowTooltip\" bsDatepickerDayDecorator\n                  [day]=\"day\"\n                  (click)=\"selectDay(day)\"\n                  (mouseenter)=\"hoverDay(day, true)\"\n                  (mouseleave)=\"hoverDay(day, false)\">{{ day.label }} 2</span>\n\n            <!-- For mobile iOS view, tooltips are not needed -->\n            <span *ngIf=\"isiOS\" bsDatepickerDayDecorator\n                  [day]=\"day\"\n                  (click)=\"selectDay(day)\">{{ day.label }} 1</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                },] }
    ];
    BsDaysCalendarViewComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig }
    ]; };
    BsDaysCalendarViewComponent.propDecorators = {
        calendar: [{ type: i0.Input }],
        options: [{ type: i0.Input }],
        onNavigate: [{ type: i0.Output }],
        onViewMode: [{ type: i0.Output }],
        onSelect: [{ type: i0.Output }],
        onHover: [{ type: i0.Output }],
        onHoverWeek: [{ type: i0.Output }]
    };

    var BsMonthCalendarViewComponent = /** @class */ (function () {
        function BsMonthCalendarViewComponent() {
            this.onNavigate = new i0.EventEmitter();
            this.onViewMode = new i0.EventEmitter();
            this.onSelect = new i0.EventEmitter();
            this.onHover = new i0.EventEmitter();
        }
        BsMonthCalendarViewComponent.prototype.navigateTo = function (event) {
            var step = BsNavigationDirection.DOWN === event ? -1 : 1;
            this.onNavigate.emit({ step: { year: step } });
        };
        BsMonthCalendarViewComponent.prototype.viewMonth = function (month) {
            this.onSelect.emit(month);
        };
        BsMonthCalendarViewComponent.prototype.hoverMonth = function (cell, isHovered) {
            this.onHover.emit({ cell: cell, isHovered: isHovered });
        };
        BsMonthCalendarViewComponent.prototype.changeViewMode = function (event) {
            this.onViewMode.emit(event);
        };
        return BsMonthCalendarViewComponent;
    }());
    BsMonthCalendarViewComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-month-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar?.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span [class.selected]=\"month.isSelected\">{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                },] }
    ];
    BsMonthCalendarViewComponent.propDecorators = {
        calendar: [{ type: i0.Input }],
        onNavigate: [{ type: i0.Output }],
        onViewMode: [{ type: i0.Output }],
        onSelect: [{ type: i0.Output }],
        onHover: [{ type: i0.Output }]
    };

    var BsTimepickerViewComponent = /** @class */ (function () {
        function BsTimepickerViewComponent() {
            this.ampm = 'ok';
            this.hours = 0;
            this.minutes = 0;
        }
        return BsTimepickerViewComponent;
    }());
    BsTimepickerViewComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-timepicker',
                    template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <button class=\"switch-time-format\" type=\"button\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
                },] }
    ];

    var BsYearsCalendarViewComponent = /** @class */ (function () {
        function BsYearsCalendarViewComponent() {
            this.onNavigate = new i0.EventEmitter();
            this.onViewMode = new i0.EventEmitter();
            this.onSelect = new i0.EventEmitter();
            this.onHover = new i0.EventEmitter();
        }
        BsYearsCalendarViewComponent.prototype.navigateTo = function (event) {
            var step = BsNavigationDirection.DOWN === event ? -1 : 1;
            this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
        };
        BsYearsCalendarViewComponent.prototype.viewYear = function (year) {
            this.onSelect.emit(year);
        };
        BsYearsCalendarViewComponent.prototype.hoverYear = function (cell, isHovered) {
            this.onHover.emit({ cell: cell, isHovered: isHovered });
        };
        BsYearsCalendarViewComponent.prototype.changeViewMode = function (event) {
            this.onViewMode.emit(event);
        };
        return BsYearsCalendarViewComponent;
    }());
    BsYearsCalendarViewComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'bs-years-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar?.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span [class.selected]=\"year.isSelected\">{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                },] }
    ];
    BsYearsCalendarViewComponent.propDecorators = {
        calendar: [{ type: i0.Input }],
        onNavigate: [{ type: i0.Output }],
        onViewMode: [{ type: i0.Output }],
        onSelect: [{ type: i0.Output }],
        onHover: [{ type: i0.Output }]
    };

    var BsDatepickerModule = /** @class */ (function () {
        function BsDatepickerModule() {
        }
        BsDatepickerModule.forRoot = function () {
            return {
                ngModule: BsDatepickerModule,
                providers: [
                    componentLoader.ComponentLoaderFactory,
                    positioning.PositioningService,
                    BsDatepickerStore,
                    BsDatepickerActions,
                    BsDatepickerEffects,
                    BsLocaleService
                ]
            };
        };
        return BsDatepickerModule;
    }());
    BsDatepickerModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, tooltip.TooltipModule],
                    declarations: [
                        BsCalendarLayoutComponent,
                        BsCurrentDateViewComponent,
                        BsCustomDatesViewComponent,
                        BsDatepickerDayDecoratorComponent,
                        BsDatepickerNavigationViewComponent,
                        BsDaysCalendarViewComponent,
                        BsMonthCalendarViewComponent,
                        BsTimepickerViewComponent,
                        BsYearsCalendarViewComponent,
                        BsDatepickerContainerComponent,
                        BsDatepickerDirective,
                        BsDatepickerInlineContainerComponent,
                        BsDatepickerInlineDirective,
                        BsDatepickerInputDirective,
                        BsDaterangepickerContainerComponent,
                        BsDaterangepickerDirective,
                        BsDaterangepickerInlineContainerComponent,
                        BsDaterangepickerInlineDirective,
                        BsDaterangepickerInputDirective
                    ],
                    entryComponents: [
                        BsDatepickerContainerComponent,
                        BsDaterangepickerContainerComponent,
                        BsDatepickerInlineContainerComponent,
                        BsDaterangepickerInlineContainerComponent
                    ],
                    exports: [
                        BsDatepickerContainerComponent,
                        BsDatepickerDirective,
                        BsDatepickerInlineContainerComponent,
                        BsDatepickerInlineDirective,
                        BsDatepickerInputDirective,
                        BsDaterangepickerContainerComponent,
                        BsDaterangepickerDirective,
                        BsDaterangepickerInlineContainerComponent,
                        BsDaterangepickerInlineDirective,
                        BsDaterangepickerInputDirective
                    ]
                },] }
    ];

    var DatepickerModule = /** @class */ (function () {
        function DatepickerModule() {
        }
        DatepickerModule.forRoot = function () {
            return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
        };
        return DatepickerModule;
    }());
    DatepickerModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, forms.FormsModule],
                    declarations: [
                        DatePickerComponent,
                        DatePickerInnerComponent,
                        DayPickerComponent,
                        MonthPickerComponent,
                        YearPickerComponent
                    ],
                    exports: [
                        DatePickerComponent,
                        DatePickerInnerComponent,
                        DayPickerComponent,
                        MonthPickerComponent,
                        YearPickerComponent
                    ],
                    entryComponents: [DatePickerComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BsDatepickerConfig = BsDatepickerConfig;
    exports.BsDatepickerContainerComponent = BsDatepickerContainerComponent;
    exports.BsDatepickerDirective = BsDatepickerDirective;
    exports.BsDatepickerInlineConfig = BsDatepickerInlineConfig;
    exports.BsDatepickerInlineContainerComponent = BsDatepickerInlineContainerComponent;
    exports.BsDatepickerInlineDirective = BsDatepickerInlineDirective;
    exports.BsDatepickerInputDirective = BsDatepickerInputDirective;
    exports.BsDatepickerModule = BsDatepickerModule;
    exports.BsDaterangepickerConfig = BsDaterangepickerConfig;
    exports.BsDaterangepickerContainerComponent = BsDaterangepickerContainerComponent;
    exports.BsDaterangepickerDirective = BsDaterangepickerDirective;
    exports.BsDaterangepickerInlineConfig = BsDaterangepickerInlineConfig;
    exports.BsDaterangepickerInlineContainerComponent = BsDaterangepickerInlineContainerComponent;
    exports.BsDaterangepickerInlineDirective = BsDaterangepickerInlineDirective;
    exports.BsDaterangepickerInputDirective = BsDaterangepickerInputDirective;
    exports.BsLocaleService = BsLocaleService;
    exports.DateFormatter = DateFormatter;
    exports.DatePickerComponent = DatePickerComponent;
    exports.DatePickerInnerComponent = DatePickerInnerComponent;
    exports.DatepickerConfig = DatepickerConfig;
    exports.DatepickerModule = DatepickerModule;
    exports.DayPickerComponent = DayPickerComponent;
    exports.MonthPickerComponent = MonthPickerComponent;
    exports.YearPickerComponent = YearPickerComponent;
    exports.ɵa = DATEPICKER_CONTROL_VALUE_ACCESSOR;
    exports.ɵb = BsDatepickerAbstractComponent;
    exports.ɵc = BsDatepickerStore;
    exports.ɵd = BsDatepickerEffects;
    exports.ɵe = BsDatepickerActions;
    exports.ɵf = datepickerAnimation;
    exports.ɵg = BsCalendarLayoutComponent;
    exports.ɵh = BsCurrentDateViewComponent;
    exports.ɵi = BsCustomDatesViewComponent;
    exports.ɵj = BsDatepickerDayDecoratorComponent;
    exports.ɵk = BsDatepickerNavigationViewComponent;
    exports.ɵl = BsDaysCalendarViewComponent;
    exports.ɵm = BsMonthCalendarViewComponent;
    exports.ɵn = BsTimepickerViewComponent;
    exports.ɵo = BsYearsCalendarViewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-datepicker.umd.js.map
