(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning'), require('ngx-bootstrap/focus-trap')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/modal', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning', 'ngx-bootstrap/focus-trap'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].modal = {}), global.ng.core, global.utils, global.componentLoader, global.positioning, global.focusTrap));
}(this, (function (exports, core, utils, componentLoader, positioning, focusTrap) { 'use strict';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var BsModalRef = /** @class */ (function () {
        function BsModalRef() {
            /**
             * Hides the modal
             */
            this.hide = function () { return void 0; };
            /**
             * Sets new class to modal window
             */
            this.setClass = function () { return void 0; };
        }
        return BsModalRef;
    }());
    BsModalRef.decorators = [
        { type: core.Injectable }
    ];

    var ModalBackdropOptions = /** @class */ (function () {
        function ModalBackdropOptions(options) {
            this.animate = true;
            Object.assign(this, options);
        }
        return ModalBackdropOptions;
    }());

    var ModalOptions = /** @class */ (function () {
        function ModalOptions() {
        }
        return ModalOptions;
    }());
    ModalOptions.decorators = [
        { type: core.Injectable }
    ];
    var modalConfigDefaults = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: '',
        animated: true,
        initialState: {},
        closeInterceptor: void 0
    };
    var MODAL_CONFIG_DEFAULT_OVERRIDE = new core.InjectionToken('override-default-config');
    var CLASS_NAME = {
        SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
        BACKDROP: 'modal-backdrop',
        OPEN: 'modal-open',
        FADE: 'fade',
        IN: 'in',
        SHOW: 'show' // bs4
    };
    var SELECTOR = {
        DIALOG: '.modal-dialog',
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
    };
    var TRANSITION_DURATIONS = {
        MODAL: 300,
        BACKDROP: 150
    };
    var DISMISS_REASONS = {
        BACKRDOP: 'backdrop-click',
        ESC: 'esc',
        BACK: 'browser-back-navigation-clicked'
    };

    var ModalContainerComponent = /** @class */ (function () {
        function ModalContainerComponent(options, _element, _renderer) {
            this._element = _element;
            this._renderer = _renderer;
            this.isShown = false;
            this.isAnimated = false;
            this.isModalHiding = false;
            this.clickStartedInContent = false;
            this.config = Object.assign({}, options);
        }
        ModalContainerComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.isAnimated) {
                this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
            }
            this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
            setTimeout(function () {
                _this.isShown = true;
                _this._renderer.addClass(_this._element.nativeElement, utils.isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
            }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
            if (document && document.body) {
                if (this.bsModalService && this.bsModalService.getModalsCount() === 1) {
                    this.bsModalService.checkScrollbar();
                    this.bsModalService.setScrollbar();
                }
                this._renderer.addClass(document.body, CLASS_NAME.OPEN);
                this._renderer.setStyle(document.body, 'overflow-y', 'hidden');
            }
            if (this._element.nativeElement) {
                this._element.nativeElement.focus();
            }
        };
        ModalContainerComponent.prototype.onClickStarted = function (event) {
            this.clickStartedInContent = event.target !== this._element.nativeElement;
        };
        ModalContainerComponent.prototype.onClickStop = function (event) {
            var _a;
            var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
            if (this.config.ignoreBackdropClick ||
                this.config.backdrop === 'static' ||
                !clickedInBackdrop) {
                this.clickStartedInContent = false;
                return;
            }
            (_a = this.bsModalService) === null || _a === void 0 ? void 0 : _a.setDismissReason(DISMISS_REASONS.BACKRDOP);
            this.hide();
        };
        ModalContainerComponent.prototype.onPopState = function () {
            var _a;
            (_a = this.bsModalService) === null || _a === void 0 ? void 0 : _a.setDismissReason(DISMISS_REASONS.BACK);
            this.hide();
        };
        ModalContainerComponent.prototype.onEsc = function (event) {
            var _a, _b;
            if (!this.isShown) {
                return;
            }
            if (event.keyCode === 27 || event.key === 'Escape') {
                event.preventDefault();
            }
            if (this.config.keyboard &&
                this.level === ((_a = this.bsModalService) === null || _a === void 0 ? void 0 : _a.getModalsCount())) {
                (_b = this.bsModalService) === null || _b === void 0 ? void 0 : _b.setDismissReason(DISMISS_REASONS.ESC);
                this.hide();
            }
        };
        ModalContainerComponent.prototype.ngOnDestroy = function () {
            if (this.isShown) {
                this._hide();
            }
        };
        ModalContainerComponent.prototype.hide = function () {
            var _this = this;
            if (this.isModalHiding || !this.isShown) {
                return;
            }
            if (this.config.closeInterceptor) {
                this.config.closeInterceptor().then(function () { return _this._hide(); }, function () { return undefined; });
                return;
            }
            this._hide();
        };
        ModalContainerComponent.prototype._hide = function () {
            var _this = this;
            this.isModalHiding = true;
            this._renderer.removeClass(this._element.nativeElement, utils.isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
            setTimeout(function () {
                var _a, _b;
                _this.isShown = false;
                if (document &&
                    document.body &&
                    ((_a = _this.bsModalService) === null || _a === void 0 ? void 0 : _a.getModalsCount()) === 1) {
                    _this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
                    _this._renderer.setStyle(document.body, 'overflow-y', '');
                }
                (_b = _this.bsModalService) === null || _b === void 0 ? void 0 : _b.hide(_this.config.id);
                _this.isModalHiding = false;
            }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
        };
        return ModalContainerComponent;
    }());
    ModalContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'modal-container',
                    template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\"\n         role=\"document\"\n         focusTrap>\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        class: 'modal',
                        role: 'dialog',
                        tabindex: '-1',
                        '[attr.aria-modal]': 'true',
                        '[attr.aria-labelledby]': 'config.ariaLabelledBy',
                        '[attr.aria-describedby]': 'config.ariaDescribedby'
                    }
                },] }
    ];
    ModalContainerComponent.ctorParameters = function () { return [
        { type: ModalOptions },
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    ModalContainerComponent.propDecorators = {
        onClickStarted: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }],
        onClickStop: [{ type: core.HostListener, args: ['click', ['$event'],] }],
        onPopState: [{ type: core.HostListener, args: ['window:popstate',] }],
        onEsc: [{ type: core.HostListener, args: ['window:keydown.esc', ['$event'],] }]
    };

    /** This component will be added as background layout for modals if enabled */
    var ModalBackdropComponent = /** @class */ (function () {
        function ModalBackdropComponent(element, renderer) {
            this._isAnimated = false;
            this._isShown = false;
            this.element = element;
            this.renderer = renderer;
        }
        Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
            get: function () {
                return this._isAnimated;
            },
            set: function (value) {
                this._isAnimated = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
            get: function () {
                return this._isShown;
            },
            set: function (value) {
                this._isShown = value;
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.IN);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.IN);
                }
                if (!utils.isBs3()) {
                    if (value) {
                        this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                    }
                    else {
                        this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        ModalBackdropComponent.prototype.ngOnInit = function () {
            if (this.isAnimated) {
                this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.FADE);
                utils.Utils.reflow(this.element.nativeElement);
            }
            this.isShown = true;
        };
        return ModalBackdropComponent;
    }());
    ModalBackdropComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'bs-modal-backdrop',
                    template: ' ',
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: { class: CLASS_NAME.BACKDROP }
                },] }
    ];
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };

    // todo: should we support enforce focus in?
    var TRANSITION_DURATION = 300;
    var BACKDROP_TRANSITION_DURATION = 150;
    /** Mark any code with directive to show it's content in modal */
    var ModalDirective = /** @class */ (function () {
        function ModalDirective(_element, _viewContainerRef, _renderer, clf, modalDefaultOption) {
            this._element = _element;
            this._renderer = _renderer;
            /** This event fires immediately when the `show` instance method is called. */
            this.onShow = new core.EventEmitter();
            /** This event is fired when the modal has been made visible to the user
             * (will wait for CSS transitions to complete)
             */
            this.onShown = new core.EventEmitter();
            /** This event is fired immediately when
             * the hide instance method has been called.
             */
            this.onHide = new core.EventEmitter();
            /** This event is fired when the modal has finished being
             * hidden from the user (will wait for CSS transitions to complete).
             */
            this.onHidden = new core.EventEmitter();
            this._isShown = false;
            this.isBodyOverflowing = false;
            this.originalBodyPadding = 0;
            this.scrollbarWidth = 0;
            this.timerHideModal = 0;
            this.timerRmBackDrop = 0;
            this.isNested = false;
            this.clickStartedInContent = false;
            this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
            this._config = modalDefaultOption || modalConfigDefaults;
        }
        Object.defineProperty(ModalDirective.prototype, "config", {
            get: function () {
                return this._config;
            },
            /** allows to set modal configuration via element property */
            set: function (conf) {
                this._config = this.getConfig(conf);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalDirective.prototype, "isShown", {
            get: function () {
                return this._isShown;
            },
            enumerable: false,
            configurable: true
        });
        ModalDirective.prototype.onClickStarted = function (event) {
            this.clickStartedInContent = event.target !== this._element.nativeElement;
        };
        ModalDirective.prototype.onClickStop = function (event) {
            var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
            if (this.config.ignoreBackdropClick ||
                this.config.backdrop === 'static' ||
                !clickedInBackdrop) {
                this.clickStartedInContent = false;
                return;
            }
            this.dismissReason = DISMISS_REASONS.BACKRDOP;
            this.hide(event);
        };
        // todo: consider preventing default and stopping propagation
        ModalDirective.prototype.onEsc = function (event) {
            if (!this._isShown) {
                return;
            }
            if (event.keyCode === 27 || event.key === 'Escape') {
                event.preventDefault();
            }
            if (this.config.keyboard) {
                this.dismissReason = DISMISS_REASONS.ESC;
                this.hide();
            }
        };
        ModalDirective.prototype.ngOnDestroy = function () {
            if (this._isShown) {
                this._isShown = false;
                this.hideModal();
                this._backdrop.dispose();
            }
        };
        ModalDirective.prototype.ngOnInit = function () {
            var _this = this;
            this._config = this._config || this.getConfig();
            setTimeout(function () {
                if (_this._config.show) {
                    _this.show();
                }
            }, 0);
        };
        /* Public methods */
        /** Allows to manually toggle modal visibility */
        ModalDirective.prototype.toggle = function () {
            return this._isShown ? this.hide() : this.show();
        };
        /** Allows to manually open modal */
        ModalDirective.prototype.show = function () {
            var _this = this;
            this.dismissReason = void 0;
            this.onShow.emit(this);
            if (this._isShown) {
                return;
            }
            clearTimeout(this.timerHideModal);
            clearTimeout(this.timerRmBackDrop);
            this._isShown = true;
            this.checkScrollbar();
            this.setScrollbar();
            if (utils.document && utils.document.body) {
                if (utils.document.body.classList.contains(CLASS_NAME.OPEN)) {
                    this.isNested = true;
                }
                else {
                    this._renderer.addClass(utils.document.body, CLASS_NAME.OPEN);
                    this._renderer.setStyle(utils.document.body, 'overflow-y', 'hidden');
                }
            }
            this.showBackdrop(function () {
                _this.showElement();
            });
        };
        /** Check if we can close the modal */
        ModalDirective.prototype.hide = function (event) {
            var _this = this;
            if (!this._isShown) {
                return;
            }
            if (event) {
                event.preventDefault();
            }
            if (this.config.closeInterceptor) {
                this.config.closeInterceptor().then(function () { return _this._hide(); }, function () { return undefined; });
                return;
            }
            this._hide();
        };
        /** Private methods @internal */
        /**
         *  Manually close modal
         *  @internal
         */
        ModalDirective.prototype._hide = function () {
            var _this = this;
            this.onHide.emit(this);
            utils.window.clearTimeout(this.timerHideModal);
            utils.window.clearTimeout(this.timerRmBackDrop);
            this._isShown = false;
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
            if (!utils.isBs3()) {
                this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
            }
            // this._addClassIn = false;
            if (this._config.animated) {
                this.timerHideModal = utils.window.setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
            }
            else {
                this.hideModal();
            }
        };
        ModalDirective.prototype.getConfig = function (config) {
            return Object.assign({}, this._config, config);
        };
        /**
         *  Show dialog
         *  @internal
         */
        ModalDirective.prototype.showElement = function () {
            var _this = this;
            // todo: replace this with component loader usage
            if (!this._element.nativeElement.parentNode ||
                this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
                // don't move modals dom position
                if (utils.document && utils.document.body) {
                    utils.document.body.appendChild(this._element.nativeElement);
                }
            }
            this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
            this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
            this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
            this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
            if (this._config.animated) {
                utils.Utils.reflow(this._element.nativeElement);
            }
            // this._addClassIn = true;
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
            if (!utils.isBs3()) {
                this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
            }
            var transitionComplete = function () {
                if (_this._config.focus) {
                    _this._element.nativeElement.focus();
                }
                _this.onShown.emit(_this);
            };
            if (this._config.animated) {
                setTimeout(transitionComplete, TRANSITION_DURATION);
            }
            else {
                transitionComplete();
            }
        };
        /** @internal */
        ModalDirective.prototype.hideModal = function () {
            var _this = this;
            this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this.showBackdrop(function () {
                if (!_this.isNested) {
                    if (utils.document && utils.document.body) {
                        _this._renderer.removeClass(utils.document.body, CLASS_NAME.OPEN);
                        _this._renderer.setStyle(utils.document.body, 'overflow-y', '');
                    }
                    _this.resetScrollbar();
                }
                _this.resetAdjustments();
                _this.focusOtherModal();
                _this.onHidden.emit(_this);
            });
        };
        // todo: original show was calling a callback when done, but we can use
        // promise
        /** @internal */
        ModalDirective.prototype.showBackdrop = function (callback) {
            var _this = this;
            if (this._isShown &&
                this.config.backdrop &&
                (!this.backdrop || !this.backdrop.instance.isShown)) {
                this.removeBackdrop();
                this._backdrop
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this._config.animated });
                this.backdrop = this._backdrop._componentRef;
                if (!callback) {
                    return;
                }
                if (!this._config.animated) {
                    callback();
                    return;
                }
                setTimeout(callback, BACKDROP_TRANSITION_DURATION);
            }
            else if (!this._isShown && this.backdrop) {
                this.backdrop.instance.isShown = false;
                var callbackRemove = function () {
                    _this.removeBackdrop();
                    if (callback) {
                        callback();
                    }
                };
                if (this.backdrop.instance.isAnimated) {
                    this.timerRmBackDrop = utils.window.setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
                }
                else {
                    callbackRemove();
                }
            }
            else if (callback) {
                callback();
            }
        };
        /** @internal */
        ModalDirective.prototype.removeBackdrop = function () {
            this._backdrop.hide();
        };
        /** Events tricks */
        // no need for it
        // protected setEscapeEvent():void {
        //   if (this._isShown && this._config.keyboard) {
        //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
        //       if (event.which === 27) {
        //         this.hide()
        //       }
        //     })
        //
        //   } else if (!this._isShown) {
        //     $(this._element).off(Event.KEYDOWN_DISMISS)
        //   }
        // }
        // protected setResizeEvent():void {
        // console.log(this.renderer.listenGlobal('', Event.RESIZE));
        // if (this._isShown) {
        //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
        // } else {
        //   $(window).off(Event.RESIZE)
        // }
        // }
        ModalDirective.prototype.focusOtherModal = function () {
            if (this._element.nativeElement.parentElement == null) {
                return;
            }
            var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
            if (!otherOpenedModals.length) {
                return;
            }
            otherOpenedModals[otherOpenedModals.length - 1].focus();
        };
        /** @internal */
        ModalDirective.prototype.resetAdjustments = function () {
            this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
            this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
        };
        /** Scroll bar tricks */
        /** @internal */
        ModalDirective.prototype.checkScrollbar = function () {
            this.isBodyOverflowing = utils.document.body.clientWidth < utils.window.innerWidth;
            this.scrollbarWidth = this.getScrollbarWidth();
        };
        ModalDirective.prototype.setScrollbar = function () {
            if (!utils.document) {
                return;
            }
            this.originalBodyPadding = parseInt(utils.window
                .getComputedStyle(utils.document.body)
                .getPropertyValue('padding-right') || 0, 10);
            if (this.isBodyOverflowing) {
                utils.document.body.style.paddingRight = this.originalBodyPadding +
                    this.scrollbarWidth + "px";
            }
        };
        ModalDirective.prototype.resetScrollbar = function () {
            utils.document.body.style.paddingRight = this.originalBodyPadding + "px";
        };
        // thx d.walsh
        ModalDirective.prototype.getScrollbarWidth = function () {
            var scrollDiv = this._renderer.createElement('div');
            this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
            this._renderer.appendChild(utils.document.body, scrollDiv);
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            this._renderer.removeChild(utils.document.body, scrollDiv);
            return scrollbarWidth;
        };
        return ModalDirective;
    }());
    ModalDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] }
    ];
    ModalDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ViewContainerRef },
        { type: core.Renderer2 },
        { type: componentLoader.ComponentLoaderFactory },
        { type: ModalOptions, decorators: [{ type: core.Optional }, { type: core.Inject, args: [MODAL_CONFIG_DEFAULT_OVERRIDE,] }] }
    ]; };
    ModalDirective.propDecorators = {
        config: [{ type: core.Input }],
        closeInterceptor: [{ type: core.Input }],
        onShow: [{ type: core.Output }],
        onShown: [{ type: core.Output }],
        onHide: [{ type: core.Output }],
        onHidden: [{ type: core.Output }],
        onClickStarted: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }],
        onClickStop: [{ type: core.HostListener, args: ['mouseup', ['$event'],] }],
        onEsc: [{ type: core.HostListener, args: ['keydown.esc', ['$event'],] }]
    };

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

    var BsModalService = /** @class */ (function () {
        function BsModalService(rendererFactory, clf, modalDefaultOption) {
            this.clf = clf;
            this.modalDefaultOption = modalDefaultOption;
            this.onShow = new core.EventEmitter();
            this.onShown = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
            this.onHidden = new core.EventEmitter();
            this.isBodyOverflowing = false;
            this.originalBodyPadding = 0;
            this.scrollbarWidth = 0;
            this.modalsCount = 0;
            this.loaders = [];
            this._backdropLoader = this.clf.createLoader();
            this._renderer = rendererFactory.createRenderer(null, null);
            this.config = modalDefaultOption ?
                (Object.assign({}, modalConfigDefaults, modalDefaultOption)) :
                modalConfigDefaults;
        }
        /** Shows a modal */
        BsModalService.prototype.show = function (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        content, config) {
            this.modalsCount++;
            this._createLoaders();
            // must be different per every show() call
            var id = (config === null || config === void 0 ? void 0 : config.id) || (new Date()).getUTCMilliseconds();
            this.config = this.modalDefaultOption ?
                Object.assign({}, modalConfigDefaults, this.modalDefaultOption, config) :
                Object.assign({}, modalConfigDefaults, config);
            this.config.id = id;
            this._showBackdrop();
            this.lastDismissReason = void 0;
            return this._showModal(content);
        };
        BsModalService.prototype.hide = function (id) {
            var _this = this;
            if (this.modalsCount === 1 || id == null) {
                this._hideBackdrop();
                this.resetScrollbar();
            }
            this.modalsCount = this.modalsCount >= 1 && id != null ? this.modalsCount - 1 : 0;
            setTimeout(function () {
                _this._hideModal(id);
                _this.removeLoaders(id);
            }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
        };
        BsModalService.prototype._showBackdrop = function () {
            var isBackdropEnabled = this.config.backdrop === true || this.config.backdrop === 'static';
            var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
            if (this.modalsCount === 1) {
                this.removeBackdrop();
                if (isBackdropEnabled && isBackdropInDOM) {
                    this._backdropLoader
                        .attach(ModalBackdropComponent)
                        .to('body')
                        .show({ isAnimated: this.config.animated });
                    this.backdropRef = this._backdropLoader._componentRef;
                }
            }
        };
        BsModalService.prototype._hideBackdrop = function () {
            var _this = this;
            if (!this.backdropRef) {
                return;
            }
            this.backdropRef.instance.isShown = false;
            var duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
            setTimeout(function () { return _this.removeBackdrop(); }, duration);
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        BsModalService.prototype._showModal = function (content) {
            var e_1, _b;
            var _a;
            var modalLoader = this.loaders[this.loaders.length - 1];
            if (this.config && this.config.providers) {
                try {
                    for (var _c = __values(this.config.providers), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var provider = _d.value;
                        modalLoader.provide(provider);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var bsModalRef = new BsModalRef();
            var modalContainerRef = modalLoader
                .provide({ provide: ModalOptions, useValue: this.config })
                .provide({ provide: BsModalRef, useValue: bsModalRef })
                .attach(ModalContainerComponent)
                .to('body');
            bsModalRef.hide = function () { var _a; return (_a = modalContainerRef.instance) === null || _a === void 0 ? void 0 : _a.hide(); };
            bsModalRef.setClass = function (newClass) {
                if (modalContainerRef.instance) {
                    modalContainerRef.instance.config.class = newClass;
                }
            };
            bsModalRef.onHidden = new core.EventEmitter();
            bsModalRef.onHide = new core.EventEmitter();
            this.copyEvent(modalLoader.onBeforeHide, bsModalRef.onHide);
            this.copyEvent(modalLoader.onHidden, bsModalRef.onHidden);
            // call 'show' method after assign setClass in bsModalRef.
            // it makes modal component's bsModalRef available to call setClass method
            modalContainerRef.show({
                content: content,
                isAnimated: this.config.animated,
                initialState: this.config.initialState,
                bsModalService: this,
                id: this.config.id
            });
            if (modalContainerRef.instance) {
                modalContainerRef.instance.level = this.getModalsCount();
                bsModalRef.content = modalLoader.getInnerComponent();
                bsModalRef.id = (_a = modalContainerRef.instance.config) === null || _a === void 0 ? void 0 : _a.id;
            }
            return bsModalRef;
        };
        BsModalService.prototype._hideModal = function (id) {
            if (id != null) {
                var indexToRemove = this.loaders.findIndex(function (loader) { var _a; return ((_a = loader.instance) === null || _a === void 0 ? void 0 : _a.config.id) === id; });
                var modalLoader = this.loaders[indexToRemove];
                if (modalLoader) {
                    modalLoader.hide(id);
                }
            }
            else {
                this.loaders.forEach(function (loader) {
                    if (loader.instance) {
                        loader.hide(loader.instance.config.id);
                    }
                });
            }
        };
        BsModalService.prototype.getModalsCount = function () {
            return this.modalsCount;
        };
        BsModalService.prototype.setDismissReason = function (reason) {
            this.lastDismissReason = reason;
        };
        BsModalService.prototype.removeBackdrop = function () {
            this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            this._renderer.setStyle(document.body, 'overflow-y', '');
            this._backdropLoader.hide();
            this.backdropRef = void 0;
        };
        /** Checks if the body is overflowing and sets scrollbar width */
        /** @internal */
        BsModalService.prototype.checkScrollbar = function () {
            this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
            this.scrollbarWidth = this.getScrollbarWidth();
        };
        BsModalService.prototype.setScrollbar = function () {
            if (!document) {
                return;
            }
            this.originalBodyPadding = parseInt(window
                .getComputedStyle(document.body)
                .getPropertyValue('padding-right') || '0', 10);
            if (this.isBodyOverflowing) {
                document.body.style.paddingRight = this.originalBodyPadding +
                    this.scrollbarWidth + "px";
            }
        };
        BsModalService.prototype.resetScrollbar = function () {
            document.body.style.paddingRight = this.originalBodyPadding + "px";
        };
        // thx d.walsh
        BsModalService.prototype.getScrollbarWidth = function () {
            var scrollDiv = this._renderer.createElement('div');
            this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
            this._renderer.appendChild(document.body, scrollDiv);
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            this._renderer.removeChild(document.body, scrollDiv);
            return scrollbarWidth;
        };
        BsModalService.prototype._createLoaders = function () {
            var loader = this.clf.createLoader();
            this.copyEvent(loader.onBeforeShow, this.onShow);
            this.copyEvent(loader.onShown, this.onShown);
            this.copyEvent(loader.onBeforeHide, this.onHide);
            this.copyEvent(loader.onHidden, this.onHidden);
            this.loaders.push(loader);
        };
        BsModalService.prototype.removeLoaders = function (id) {
            if (id != null) {
                var indexToRemove = this.loaders.findIndex(function (loader) { var _a; return ((_a = loader.instance) === null || _a === void 0 ? void 0 : _a.config.id) === id; });
                if (indexToRemove >= 0) {
                    this.loaders.splice(indexToRemove, 1);
                    this.loaders.forEach(function (loader, i) {
                        if (loader.instance) {
                            loader.instance.level = i + 1;
                        }
                    });
                }
            }
            else {
                this.loaders.splice(0, this.loaders.length);
            }
        };
        BsModalService.prototype.copyEvent = function (from, to) {
            var _this = this;
            from.subscribe(function (data) {
                to.emit(_this.lastDismissReason || data);
            });
        };
        return BsModalService;
    }());
    BsModalService.decorators = [
        { type: core.Injectable }
    ];
    BsModalService.ctorParameters = function () { return [
        { type: core.RendererFactory2 },
        { type: componentLoader.ComponentLoaderFactory },
        { type: ModalOptions, decorators: [{ type: core.Optional }, { type: core.Inject, args: [MODAL_CONFIG_DEFAULT_OVERRIDE,] }] }
    ]; };

    var focusTrapModule = focusTrap.FocusTrapModule.forRoot();
    var ModalModule = /** @class */ (function () {
        function ModalModule() {
        }
        ModalModule.forRoot = function () {
            return {
                ngModule: ModalModule,
                providers: [BsModalService, componentLoader.ComponentLoaderFactory, positioning.PositioningService]
            };
        };
        ModalModule.forChild = function () {
            return {
                ngModule: ModalModule,
                providers: [BsModalService, componentLoader.ComponentLoaderFactory, positioning.PositioningService]
            };
        };
        return ModalModule;
    }());
    ModalModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [focusTrap.FocusTrapModule],
                    declarations: [
                        ModalBackdropComponent,
                        ModalDirective,
                        ModalContainerComponent
                    ],
                    exports: [ModalBackdropComponent, ModalDirective],
                    entryComponents: [ModalBackdropComponent, ModalContainerComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BsModalRef = BsModalRef;
    exports.BsModalService = BsModalService;
    exports.MODAL_CONFIG_DEFAULT_OVERRIDE = MODAL_CONFIG_DEFAULT_OVERRIDE;
    exports.ModalBackdropComponent = ModalBackdropComponent;
    exports.ModalBackdropOptions = ModalBackdropOptions;
    exports.ModalContainerComponent = ModalContainerComponent;
    exports.ModalDirective = ModalDirective;
    exports.ModalModule = ModalModule;
    exports.ModalOptions = ModalOptions;
    exports.ɵa = CLASS_NAME;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-modal.umd.js.map
