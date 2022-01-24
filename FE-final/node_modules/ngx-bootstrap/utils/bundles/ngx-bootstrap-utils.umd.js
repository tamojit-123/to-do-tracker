(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/utils', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].utils = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */
    var Trigger = /** @class */ (function () {
        function Trigger(open, close) {
            this.open = open;
            this.close = close || open;
        }
        Trigger.prototype.isManual = function () {
            return this.open === 'manual' || this.close === 'manual';
        };
        return Trigger;
    }());

    var DEFAULT_ALIASES = {
        hover: ['mouseover', 'mouseout'],
        focus: ['focusin', 'focusout']
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function parseTriggers(triggers, aliases) {
        if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
        var trimmedTriggers = (triggers || '').trim();
        if (trimmedTriggers.length === 0) {
            return [];
        }
        var parsedTriggers = trimmedTriggers
            .split(/\s+/)
            .map(function (trigger) { return trigger.split(':'); })
            .map(function (triggerPair) {
            var alias = aliases[triggerPair[0]] || triggerPair;
            return new Trigger(alias[0], alias[1]);
        });
        var manualTriggers = parsedTriggers.filter(function (triggerPair) { return triggerPair.isManual(); });
        if (manualTriggers.length > 1) {
            throw new Error('Triggers parse error: only one manual trigger is allowed');
        }
        if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
            throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
        }
        return parsedTriggers;
    }
    function listenToTriggers(renderer, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    target, triggers, showFn, hideFn, toggleFn) {
        var parsedTriggers = parseTriggers(triggers);
        var listeners = [];
        if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
            return Function.prototype;
        }
        parsedTriggers.forEach(function (trigger) {
            if (trigger.open === trigger.close) {
                listeners.push(renderer.listen(target, trigger.open, toggleFn));
                return;
            }
            listeners.push(renderer.listen(target, trigger.open, showFn));
            if (trigger.close) {
                listeners.push(renderer.listen(target, trigger.close, hideFn));
            }
        });
        return function () {
            listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
        };
    }
    function listenToTriggersV2(renderer, options) {
        var parsedTriggers = parseTriggers(options.triggers);
        var target = options.target;
        // do nothing
        if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
            return Function.prototype;
        }
        // all listeners
        var listeners = [];
        // lazy listeners registration
        var _registerHide = [];
        var registerHide = function () {
            // add hide listeners to unregister array
            _registerHide.forEach(function (fn) { return listeners.push(fn()); });
            // register hide events only once
            _registerHide.length = 0;
        };
        // register open\close\toggle listeners
        parsedTriggers.forEach(function (trigger) {
            var useToggle = trigger.open === trigger.close;
            var showFn = useToggle ? options.toggle : options.show;
            if (!useToggle && trigger.close && options.hide) {
                var _hide_1 = renderer.listen(target, trigger.close, options.hide);
                _registerHide.push(function () { return _hide_1; });
            }
            if (showFn) {
                listeners.push(renderer.listen(target, trigger.open, function () { return showFn(registerHide); }));
            }
        });
        return function () {
            listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
        };
    }
    function registerOutsideClick(renderer, options) {
        if (!options.outsideClick) {
            return Function.prototype;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return renderer.listen('document', 'click', function (event) {
            if (options.target && options.target.contains(event.target)) {
                return;
            }
            if (options.targets &&
                options.targets.some(function (target) { return target.contains(event.target); })) {
                return;
            }
            if (options.hide) {
                options.hide();
            }
        });
    }
    function registerEscClick(renderer, options) {
        if (!options.outsideEsc) {
            return Function.prototype;
        }
        return renderer.listen('document', 'keyup.esc', function (event) {
            if (options.target && options.target.contains(event.target)) {
                return;
            }
            if (options.targets &&
                options.targets.some(function (target) { return target.contains(event.target); })) {
                return;
            }
            if (options.hide) {
                options.hide();
            }
        });
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * JS version of browser APIs. This library can only run in the browser.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var win = (typeof window !== 'undefined' && window) || {};
    var document = win.document;
    var location = win.location;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var gc = win.gc ? function () { return win.gc(); } : function () { return null; };
    var performance = win.performance ? win.performance : null;
    var Event = win.Event;
    var MouseEvent = win.MouseEvent;
    var KeyboardEvent = win.KeyboardEvent;
    var EventTarget = win.EventTarget;
    var History = win.History;
    var Location = win.Location;
    var EventListener = win.EventListener;

    (function (BsVerions) {
        BsVerions["isBs3"] = "bs3";
        BsVerions["isBs4"] = "bs4";
        BsVerions["isBs5"] = "bs5";
    })(exports.BsVerions || (exports.BsVerions = {}));
    var guessedVersion;
    function _guessBsVersion() {
        if (typeof win.document === 'undefined') {
            return 'bs4';
        }
        var spanEl = win.document.createElement('span');
        spanEl.innerText = 'testing bs version';
        spanEl.classList.add('d-none');
        spanEl.classList.add('visually-hidden');
        win.document.head.appendChild(spanEl);
        var rect = spanEl.getBoundingClientRect();
        var overflowStyle = win.getComputedStyle(spanEl).overflow;
        win.document.head.removeChild(spanEl);
        if (!rect || (rect && rect.top !== 0)) {
            return 'bs3';
        }
        if (overflowStyle && overflowStyle === 'hidden') {
            return 'bs5';
        }
        return 'bs4';
    }
    function setTheme(theme) {
        guessedVersion = theme;
    }
    // todo: in ngx-bootstrap, bs4 will became a default one
    function isBs3() {
        if (typeof win === 'undefined') {
            return true;
        }
        if (typeof win.__theme === 'undefined') {
            if (guessedVersion) {
                return guessedVersion === 'bs3';
            }
            guessedVersion = _guessBsVersion();
            return guessedVersion === 'bs3';
        }
        return win.__theme === 'bs3';
    }
    function isBs4() {
        if (isBs3())
            return false;
        if (guessedVersion)
            return guessedVersion === 'bs4';
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs4';
    }
    function isBs5() {
        if (isBs3() || isBs4())
            return false;
        if (guessedVersion)
            return guessedVersion === 'bs5';
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs5';
    }
    function getBsVer() {
        return {
            isBs3: isBs3(),
            isBs4: isBs4(),
            isBs5: isBs5()
        };
    }
    function currentBsVersion() {
        var bsVer = getBsVer();
        var resVersion = Object.keys(bsVer).find(function (key) { return bsVer[key]; });
        return exports.BsVerions[resVersion];
    }

    var LinkedList = /** @class */ (function () {
        function LinkedList() {
            this.length = 0;
            this.asArray = [];
            // Array methods overriding END
        }
        LinkedList.prototype.get = function (position) {
            if (this.length === 0 || position < 0 || position >= this.length) {
                return void 0;
            }
            var current = this.head;
            for (var index = 0; index < position; index++) {
                current = current === null || current === void 0 ? void 0 : current.next;
            }
            return current === null || current === void 0 ? void 0 : current.value;
        };
        LinkedList.prototype.add = function (value, position) {
            if (position === void 0) { position = this.length; }
            if (position < 0 || position > this.length) {
                throw new Error('Position is out of the list');
            }
            var node = {
                value: value,
                next: undefined,
                previous: undefined
            };
            if (this.length === 0) {
                this.head = node;
                this.tail = node;
                this.current = node;
            }
            else {
                if (position === 0 && this.head) {
                    // first node
                    node.next = this.head;
                    this.head.previous = node;
                    this.head = node;
                }
                else if (position === this.length && this.tail) {
                    // last node
                    this.tail.next = node;
                    node.previous = this.tail;
                    this.tail = node;
                }
                else {
                    // node in middle
                    var currentPreviousNode = this.getNode(position - 1);
                    var currentNextNode = currentPreviousNode === null || currentPreviousNode === void 0 ? void 0 : currentPreviousNode.next;
                    if (currentPreviousNode && currentNextNode) {
                        currentPreviousNode.next = node;
                        currentNextNode.previous = node;
                        node.previous = currentPreviousNode;
                        node.next = currentNextNode;
                    }
                }
            }
            this.length++;
            this.createInternalArrayRepresentation();
        };
        LinkedList.prototype.remove = function (position) {
            if (position === void 0) { position = 0; }
            var _a;
            if (this.length === 0 || position < 0 || position >= this.length) {
                throw new Error('Position is out of the list');
            }
            if (position === 0 && this.head) {
                // first node
                this.head = this.head.next;
                if (this.head) {
                    // there is no second node
                    this.head.previous = undefined;
                }
                else {
                    // there is no second node
                    this.tail = undefined;
                }
            }
            else if (position === this.length - 1 && ((_a = this.tail) === null || _a === void 0 ? void 0 : _a.previous)) {
                // last node
                this.tail = this.tail.previous;
                this.tail.next = undefined;
            }
            else {
                // middle node
                var removedNode = this.getNode(position);
                if ((removedNode === null || removedNode === void 0 ? void 0 : removedNode.next) && removedNode.previous) {
                    removedNode.next.previous = removedNode.previous;
                    removedNode.previous.next = removedNode.next;
                }
            }
            this.length--;
            this.createInternalArrayRepresentation();
        };
        LinkedList.prototype.set = function (position, value) {
            if (this.length === 0 || position < 0 || position >= this.length) {
                throw new Error('Position is out of the list');
            }
            var node = this.getNode(position);
            if (node) {
                node.value = value;
                this.createInternalArrayRepresentation();
            }
        };
        LinkedList.prototype.toArray = function () {
            return this.asArray;
        };
        LinkedList.prototype.findAll = function (fn) {
            var current = this.head;
            var result = [];
            if (!current) {
                return result;
            }
            for (var index = 0; index < this.length; index++) {
                if (!current) {
                    return result;
                }
                if (fn(current.value, index)) {
                    result.push({ index: index, value: current.value });
                }
                current = current.next;
            }
            return result;
        };
        // Array methods overriding start
        LinkedList.prototype.push = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args.forEach(function (arg) {
                _this.add(arg);
            });
            return this.length;
        };
        LinkedList.prototype.pop = function () {
            if (this.length === 0) {
                return;
            }
            var last = this.tail;
            this.remove(this.length - 1);
            return last === null || last === void 0 ? void 0 : last.value;
        };
        LinkedList.prototype.unshift = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args.reverse();
            args.forEach(function (arg) {
                _this.add(arg, 0);
            });
            return this.length;
        };
        LinkedList.prototype.shift = function () {
            var _a;
            if (this.length === 0) {
                return undefined;
            }
            var lastItem = (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
            this.remove();
            return lastItem;
        };
        LinkedList.prototype.forEach = function (fn) {
            var current = this.head;
            for (var index = 0; index < this.length; index++) {
                if (!current) {
                    return;
                }
                fn(current.value, index);
                current = current.next;
            }
        };
        LinkedList.prototype.indexOf = function (value) {
            var current = this.head;
            var position = -1;
            for (var index = 0; index < this.length; index++) {
                if (!current) {
                    return position;
                }
                if (current.value === value) {
                    position = index;
                    break;
                }
                current = current.next;
            }
            return position;
        };
        LinkedList.prototype.some = function (fn) {
            var current = this.head;
            var result = false;
            while (current && !result) {
                if (fn(current.value)) {
                    result = true;
                    break;
                }
                current = current.next;
            }
            return result;
        };
        LinkedList.prototype.every = function (fn) {
            var current = this.head;
            var result = true;
            while (current && result) {
                if (!fn(current.value)) {
                    result = false;
                }
                current = current.next;
            }
            return result;
        };
        LinkedList.prototype.toString = function () {
            return '[Linked List]';
        };
        LinkedList.prototype.find = function (fn) {
            var current = this.head;
            for (var index = 0; index < this.length; index++) {
                if (!current) {
                    return;
                }
                if (fn(current.value, index)) {
                    return current.value;
                }
                current = current.next;
            }
        };
        LinkedList.prototype.findIndex = function (fn) {
            var current = this.head;
            for (var index = 0; index < this.length; index++) {
                if (!current) {
                    return -1;
                }
                if (fn(current.value, index)) {
                    return index;
                }
                current = current.next;
            }
            return -1;
        };
        LinkedList.prototype.getNode = function (position) {
            if (this.length === 0 || position < 0 || position >= this.length) {
                throw new Error('Position is out of the list');
            }
            var current = this.head;
            for (var index = 0; index < position; index++) {
                current = current === null || current === void 0 ? void 0 : current.next;
            }
            return current;
        };
        LinkedList.prototype.createInternalArrayRepresentation = function () {
            var outArray = [];
            var current = this.head;
            while (current) {
                outArray.push(current.value);
                current = current.next;
            }
            this.asArray = outArray;
        };
        return LinkedList;
    }());

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function OnChange() {
        var sufix = 'Change';
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function OnChangeHandler(target, propertyKey) {
            var _key = " __" + propertyKey + "Value";
            Object.defineProperty(target, propertyKey, {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                get: function () {
                    return this[_key];
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                set: function (value) {
                    var prevValue = this[_key];
                    this[_key] = value;
                    if (prevValue !== value && this[propertyKey + sufix]) {
                        this[propertyKey + sufix].emit(value);
                    }
                }
            });
        };
    }

    var Utils = /** @class */ (function () {
        function Utils() {
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Utils.reflow = function (element) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (function (bs) { return bs; })(element.offsetHeight);
        };
        // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Utils.getStyles = function (elem) {
            // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
            // IE throws on elements created in popups
            // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
            var view = elem.ownerDocument.defaultView;
            if (!view || !view.opener) {
                view = win;
            }
            return view.getComputedStyle(elem);
        };
        Utils.stackOverflowConfig = function () {
            var bsVer = currentBsVersion();
            return {
                crossorigin: bsVer !== 'bs3' ? "anonymous" : undefined,
                integrity: bsVer === 'bs5' ? 'sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We' : bsVer === 'bs4' ? 'sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2' : undefined,
                cdnLink: bsVer === 'bs5' ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css' : bsVer === 'bs4' ? 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css' : 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
            };
        };
        return Utils;
    }());

    var _messagesHash = {};
    var _hideMsg = typeof console === 'undefined' || !('warn' in console);
    function warnOnce(msg) {
        if (!core.isDevMode() || _hideMsg || msg in _messagesHash) {
            return;
        }
        _messagesHash[msg] = true;
        console.warn(msg);
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LinkedList = LinkedList;
    exports.OnChange = OnChange;
    exports.Trigger = Trigger;
    exports.Utils = Utils;
    exports.currentBsVersion = currentBsVersion;
    exports.document = document;
    exports.getBsVer = getBsVer;
    exports.isBs3 = isBs3;
    exports.listenToTriggers = listenToTriggers;
    exports.listenToTriggersV2 = listenToTriggersV2;
    exports.parseTriggers = parseTriggers;
    exports.registerEscClick = registerEscClick;
    exports.registerOutsideClick = registerOutsideClick;
    exports.setTheme = setTheme;
    exports.warnOnce = warnOnce;
    exports.window = win;
    exports.ɵa = isBs4;
    exports.ɵb = isBs5;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-utils.umd.js.map
