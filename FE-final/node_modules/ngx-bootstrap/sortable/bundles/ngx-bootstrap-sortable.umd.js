(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/sortable', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].sortable = {}), global.ng.core, global.ng.common, global.ng.forms, global.rxjs));
}(this, (function (exports, core, common, forms, rxjs) { 'use strict';

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

    var DraggableItemService = /** @class */ (function () {
        function DraggableItemService() {
            this.onCapture = new rxjs.Subject();
        }
        DraggableItemService.prototype.dragStart = function (item) {
            this.draggableItem = item;
        };
        DraggableItemService.prototype.getItem = function () {
            return this.draggableItem;
        };
        DraggableItemService.prototype.captureItem = function (overZoneIndex, newIndex) {
            if (this.draggableItem && this.draggableItem.overZoneIndex !== overZoneIndex) {
                this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
                this.draggableItem.overZoneIndex = overZoneIndex;
                this.onCapture.next(this.draggableItem);
                this.draggableItem = Object.assign({}, this.draggableItem, {
                    overZoneIndex: overZoneIndex,
                    i: newIndex
                });
            }
            return this.draggableItem;
        };
        DraggableItemService.prototype.onCaptureItem = function () {
            return this.onCapture;
        };
        return DraggableItemService;
    }());
    DraggableItemService.decorators = [
        { type: core.Injectable }
    ];

    var SortableComponent = /** @class */ (function () {
        function SortableComponent(transfer) {
            var _this = this;
            /** class name for items wrapper */
            this.wrapperClass = '';
            /** style object for items wrapper */
            this.wrapperStyle = {};
            /** class name for item */
            this.itemClass = '';
            /** style object for item */
            this.itemStyle = {};
            /** class name for active item */
            this.itemActiveClass = '';
            /** style object for active item */
            this.itemActiveStyle = {};
            /** class name for placeholder */
            this.placeholderClass = '';
            /** style object for placeholder */
            this.placeholderStyle = {};
            /** placeholder item which will be shown if collection is empty */
            this.placeholderItem = '';
            /** fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
             *  Returns new items collection as a payload.
             */
            this.onChange = new core.EventEmitter();
            this.showPlaceholder = false;
            this.activeItem = -1;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.onTouched = Function.prototype;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.onChanged = Function.prototype;
            this._items = [];
            this.transfer = transfer;
            this.currentZoneIndex = SortableComponent.globalZoneIndex++;
            this.transfer
                .onCaptureItem()
                .subscribe(function (item) { return _this.onDrop(item); });
        }
        Object.defineProperty(SortableComponent.prototype, "items", {
            get: function () {
                return this._items;
            },
            set: function (value) {
                this._items = value;
                var out = this.items.map(function (x) { return x.initData; });
                this.onChanged(out);
                this.onChange.emit(out);
            },
            enumerable: false,
            configurable: true
        });
        SortableComponent.prototype.onItemDragstart = function (event, item, i) {
            this.initDragstartEvent(event);
            this.onTouched();
            this.transfer.dragStart({
                event: event,
                item: item,
                i: i,
                initialIndex: i,
                lastZoneIndex: this.currentZoneIndex,
                overZoneIndex: this.currentZoneIndex
            });
        };
        SortableComponent.prototype.onItemDragover = function (event, i) {
            if (!this.transfer.getItem()) {
                return;
            }
            event.preventDefault();
            var dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var newArray = [];
            if (!dragItem) {
                return;
            }
            if (!this.items.length) {
                newArray = [dragItem.item];
            }
            else if (dragItem.i > i) {
                newArray = __spread(this.items.slice(0, i), [
                    dragItem.item
                ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
            }
            else {
                // this.draggedItem.i < i
                newArray = __spread(this.items.slice(0, dragItem.i), this.items.slice(dragItem.i + 1, i + 1), [
                    dragItem.item
                ], this.items.slice(i + 1));
            }
            this.items = newArray;
            dragItem.i = i;
            this.activeItem = i;
            this.updatePlaceholderState();
        };
        SortableComponent.prototype.cancelEvent = function (event) {
            if (!this.transfer.getItem() || !event) {
                return;
            }
            event.preventDefault();
        };
        SortableComponent.prototype.onDrop = function (item) {
            if (item &&
                item.overZoneIndex !== this.currentZoneIndex &&
                item.lastZoneIndex === this.currentZoneIndex) {
                this.items = this.items.filter(function (x, i) { return i !== item.i; });
                this.updatePlaceholderState();
            }
            this.resetActiveItem();
        };
        SortableComponent.prototype.resetActiveItem = function (event) {
            this.cancelEvent(event);
            this.activeItem = -1;
        };
        SortableComponent.prototype.registerOnChange = function (callback) {
            this.onChanged = callback;
        };
        SortableComponent.prototype.registerOnTouched = function (callback) {
            this.onTouched = callback;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        SortableComponent.prototype.writeValue = function (value) {
            var _this = this;
            if (value) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.items = value.map(function (x, i) { return ({
                    id: i,
                    initData: x,
                    value: _this.fieldName ? x[_this.fieldName] : x
                }); });
            }
            else {
                this.items = [];
            }
            this.updatePlaceholderState();
        };
        SortableComponent.prototype.updatePlaceholderState = function () {
            this.showPlaceholder = !this._items.length;
        };
        SortableComponent.prototype.getItemStyle = function (isActive) {
            return isActive
                ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
                : this.itemStyle;
        };
        SortableComponent.prototype.initDragstartEvent = function (event) {
            var _a;
            // it is necessary for mozilla
            // data type should be 'Text' instead of 'text/plain' to keep compatibility
            // with IE
            (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('Text', 'placeholder');
        };
        return SortableComponent;
    }());
    SortableComponent.globalZoneIndex = 0;
    SortableComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bs-sortable',
                    exportAs: 'bs-sortable',
                    template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>\n",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return SortableComponent; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    SortableComponent.ctorParameters = function () { return [
        { type: DraggableItemService }
    ]; };
    SortableComponent.propDecorators = {
        fieldName: [{ type: core.Input }],
        wrapperClass: [{ type: core.Input }],
        wrapperStyle: [{ type: core.Input }],
        itemClass: [{ type: core.Input }],
        itemStyle: [{ type: core.Input }],
        itemActiveClass: [{ type: core.Input }],
        itemActiveStyle: [{ type: core.Input }],
        placeholderClass: [{ type: core.Input }],
        placeholderStyle: [{ type: core.Input }],
        placeholderItem: [{ type: core.Input }],
        itemTemplate: [{ type: core.Input }],
        onChange: [{ type: core.Output }]
    };

    var SortableModule = /** @class */ (function () {
        function SortableModule() {
        }
        SortableModule.forRoot = function () {
            return { ngModule: SortableModule, providers: [DraggableItemService] };
        };
        return SortableModule;
    }());
    SortableModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [SortableComponent],
                    imports: [common.CommonModule],
                    exports: [SortableComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DraggableItemService = DraggableItemService;
    exports.SortableComponent = SortableComponent;
    exports.SortableModule = SortableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-sortable.umd.js.map
