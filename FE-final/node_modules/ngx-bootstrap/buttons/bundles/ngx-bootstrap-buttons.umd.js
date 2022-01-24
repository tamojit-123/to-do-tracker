(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/buttons', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].buttons = {}), global.ng.core, global.ng.forms));
}(this, (function (exports, core, forms) { 'use strict';

    // TODO: config: activeClass - Class to apply to the checked buttons
    var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return ButtonCheckboxDirective; }),
        multi: true
    };
    /**
     * Add checkbox functionality to any element
     */
    var ButtonCheckboxDirective = /** @class */ (function () {
        function ButtonCheckboxDirective() {
            /** Truthy value, will be set to ngModel */
            this.btnCheckboxTrue = true;
            /** Falsy value, will be set to ngModel */
            this.btnCheckboxFalse = false;
            this.state = false;
            this.isDisabled = false;
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
        }
        // view -> model
        ButtonCheckboxDirective.prototype.onClick = function () {
            if (this.isDisabled) {
                return;
            }
            this.toggle(!this.state);
            this.onChange(this.value);
        };
        ButtonCheckboxDirective.prototype.ngOnInit = function () {
            this.toggle(this.trueValue === this.value);
        };
        Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
            get: function () {
                return typeof this.btnCheckboxTrue !== 'undefined'
                    ? this.btnCheckboxTrue
                    : true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
            get: function () {
                return typeof this.btnCheckboxFalse !== 'undefined'
                    ? this.btnCheckboxFalse
                    : false;
            },
            enumerable: false,
            configurable: true
        });
        ButtonCheckboxDirective.prototype.toggle = function (state) {
            this.state = state;
            this.value = this.state ? this.trueValue : this.falseValue;
        };
        // ControlValueAccessor
        // model -> view
        ButtonCheckboxDirective.prototype.writeValue = function (value) {
            this.state = this.trueValue === value;
            this.value = value ? this.trueValue : this.falseValue;
        };
        ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
            this.isDisabled = isDisabled;
        };
        ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        return ButtonCheckboxDirective;
    }());
    ButtonCheckboxDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[btnCheckbox]',
                    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    ButtonCheckboxDirective.propDecorators = {
        btnCheckboxTrue: [{ type: core.Input }],
        btnCheckboxFalse: [{ type: core.Input }],
        state: [{ type: core.HostBinding, args: ['class.active',] }, { type: core.HostBinding, args: ['attr.aria-pressed',] }],
        onClick: [{ type: core.HostListener, args: ['click',] }]
    };

    var RADIO_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return ButtonRadioDirective; }),
        multi: true
    };
    /**
     * Create radio buttons or groups of buttons.
     * A value of a selected button is bound to a variable specified via ngModel.
     */
    var ButtonRadioDirective = /** @class */ (function () {
        function ButtonRadioDirective(el, cdr, renderer, group) {
            this.el = el;
            this.cdr = cdr;
            this.renderer = renderer;
            this.group = group;
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
            /** If `true` — radio button can be unchecked */
            this.uncheckable = false;
            this.role = 'radio';
            this._disabled = false;
            this._hasFocus = false;
        }
        Object.defineProperty(ButtonRadioDirective.prototype, "value", {
            /** Current value of radio component or group */
            get: function () {
                return this.group ? this.group.value : this._value;
            },
            set: function (value) {
                if (this.group) {
                    this.group.value = value;
                    return;
                }
                this._value = value;
                this._onChange(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
            /** If `true` — radio button is disabled */
            get: function () {
                return this._disabled;
            },
            set: function (disabled) {
                this.setDisabledState(disabled);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonRadioDirective.prototype, "controlOrGroupDisabled", {
            get: function () {
                return this.disabled || (this.group && this.group.disabled) ? true : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonRadioDirective.prototype, "hasDisabledClass", {
            get: function () {
                // Although the radio is disabled the active radio should still stand out.
                // The disabled class will prevent this so don't add it on the active radio
                return this.controlOrGroupDisabled && !this.isActive;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
            get: function () {
                return this.btnRadio === this.value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonRadioDirective.prototype, "tabindex", {
            get: function () {
                if (this.controlOrGroupDisabled) {
                    // Disabled radio buttons should not receive focus
                    return undefined;
                }
                else if (this.isActive || this.group == null) {
                    return 0;
                }
                else {
                    return -1;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonRadioDirective.prototype, "hasFocus", {
            get: function () {
                return this._hasFocus;
            },
            enumerable: false,
            configurable: true
        });
        ButtonRadioDirective.prototype.toggleIfAllowed = function () {
            if (!this.canToggle()) {
                return;
            }
            if (this.uncheckable && this.btnRadio === this.value) {
                this.value = undefined;
            }
            else {
                this.value = this.btnRadio;
            }
        };
        ButtonRadioDirective.prototype.onSpacePressed = function (event) {
            this.toggleIfAllowed();
            event.preventDefault();
        };
        ButtonRadioDirective.prototype.focus = function () {
            this.el.nativeElement.focus();
        };
        ButtonRadioDirective.prototype.onFocus = function () {
            this._hasFocus = true;
        };
        ButtonRadioDirective.prototype.onBlur = function () {
            this._hasFocus = false;
            this.onTouched();
        };
        ButtonRadioDirective.prototype.canToggle = function () {
            return !this.controlOrGroupDisabled && (this.uncheckable || this.btnRadio !== this.value);
        };
        ButtonRadioDirective.prototype.ngOnChanges = function (changes) {
            if ('uncheckable' in changes) {
                this.uncheckable = this.uncheckable !== false && typeof this.uncheckable !== 'undefined';
            }
        };
        ButtonRadioDirective.prototype._onChange = function (value) {
            if (this.group) {
                this.group.value = value;
                return;
            }
            this.onTouched();
            this.onChange(value);
        };
        // ControlValueAccessor
        // model -> view
        ButtonRadioDirective.prototype.writeValue = function (value) {
            this.value = value;
            this.cdr.markForCheck();
        };
        ButtonRadioDirective.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        ButtonRadioDirective.prototype.setDisabledState = function (disabled) {
            this._disabled = disabled;
            if (disabled) {
                this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
                return;
            }
            this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
        };
        return ButtonRadioDirective;
    }());
    ButtonRadioDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[btnRadio]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef },
        { type: core.Renderer2 },
        { type: ButtonRadioGroupDirective, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core.forwardRef(function () { return ButtonRadioGroupDirective; }),] }] }
    ]; };
    ButtonRadioDirective.propDecorators = {
        btnRadio: [{ type: core.Input }],
        uncheckable: [{ type: core.Input }],
        value: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        controlOrGroupDisabled: [{ type: core.HostBinding, args: ['attr.aria-disabled',] }],
        hasDisabledClass: [{ type: core.HostBinding, args: ['class.disabled',] }],
        isActive: [{ type: core.HostBinding, args: ['class.active',] }, { type: core.HostBinding, args: ['attr.aria-checked',] }],
        role: [{ type: core.HostBinding, args: ['attr.role',] }],
        tabindex: [{ type: core.HostBinding, args: ['attr.tabindex',] }],
        toggleIfAllowed: [{ type: core.HostListener, args: ['click',] }],
        onSpacePressed: [{ type: core.HostListener, args: ['keydown.space', ['$event'],] }],
        onFocus: [{ type: core.HostListener, args: ['focus',] }],
        onBlur: [{ type: core.HostListener, args: ['blur',] }]
    };

    var RADIO_CONTROL_VALUE_ACCESSOR$1 = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return ButtonRadioGroupDirective; }),
        multi: true
    };
    /**
     * A group of radio buttons.
     * A value of a selected button is bound to a variable specified via ngModel.
     */
    var ButtonRadioGroupDirective = /** @class */ (function () {
        function ButtonRadioGroupDirective(cdr) {
            this.cdr = cdr;
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
            this.role = 'radiogroup';
            this._disabled = false;
        }
        Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
                this.onChange(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonRadioGroupDirective.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonRadioGroupDirective.prototype, "tabindex", {
            get: function () {
                if (this._disabled) {
                    return null;
                }
                else {
                    return 0;
                }
            },
            enumerable: false,
            configurable: true
        });
        ButtonRadioGroupDirective.prototype.writeValue = function (value) {
            this._value = value;
            this.cdr.markForCheck();
        };
        ButtonRadioGroupDirective.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        ButtonRadioGroupDirective.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        ButtonRadioGroupDirective.prototype.setDisabledState = function (disabled) {
            if (this.radioButtons) {
                this._disabled = disabled;
                this.radioButtons.forEach(function (buttons) {
                    buttons.setDisabledState(disabled);
                });
                this.cdr.markForCheck();
            }
        };
        ButtonRadioGroupDirective.prototype.onFocus = function () {
            if (this._disabled) {
                return;
            }
            var activeRadio = this.getActiveOrFocusedRadio();
            if (activeRadio) {
                activeRadio.focus();
                return;
            }
            if (this.radioButtons) {
                var firstEnabled = this.radioButtons.find(function (r) { return !r.disabled; });
                if (firstEnabled) {
                    firstEnabled.focus();
                }
            }
        };
        ButtonRadioGroupDirective.prototype.onBlur = function () {
            if (this.onTouched) {
                this.onTouched();
            }
        };
        ButtonRadioGroupDirective.prototype.selectNext = function (event) {
            this.selectInDirection('next');
            event.preventDefault();
        };
        ButtonRadioGroupDirective.prototype.selectPrevious = function (event) {
            this.selectInDirection('previous');
            event.preventDefault();
        };
        ButtonRadioGroupDirective.prototype.selectInDirection = function (direction) {
            if (this._disabled) {
                return;
            }
            function nextIndex(currentIndex, buttonRadioDirectives) {
                var step = direction === 'next' ? 1 : -1;
                var calcIndex = (currentIndex + step) % buttonRadioDirectives.length;
                if (calcIndex < 0) {
                    calcIndex = buttonRadioDirectives.length - 1;
                }
                return calcIndex;
            }
            var activeRadio = this.getActiveOrFocusedRadio();
            if (activeRadio && this.radioButtons) {
                var buttonRadioDirectives = this.radioButtons.toArray();
                var currentActiveIndex = buttonRadioDirectives.indexOf(activeRadio);
                for (var i = nextIndex(currentActiveIndex, buttonRadioDirectives); i !== currentActiveIndex; i = nextIndex(i, buttonRadioDirectives)) {
                    if (buttonRadioDirectives[i].canToggle()) {
                        buttonRadioDirectives[i].toggleIfAllowed();
                        buttonRadioDirectives[i].focus();
                        break;
                    }
                }
            }
        };
        ButtonRadioGroupDirective.prototype.getActiveOrFocusedRadio = function () {
            if (!this.radioButtons) {
                return void 0;
            }
            return this.radioButtons.find(function (button) { return button.isActive; })
                || this.radioButtons.find(function (button) { return button.hasFocus; });
        };
        return ButtonRadioGroupDirective;
    }());
    ButtonRadioGroupDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[btnRadioGroup]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
                },] }
    ];
    ButtonRadioGroupDirective.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    ButtonRadioGroupDirective.propDecorators = {
        role: [{ type: core.HostBinding, args: ['attr.role',] }],
        radioButtons: [{ type: core.ContentChildren, args: [core.forwardRef(function () { return ButtonRadioDirective; }),] }],
        tabindex: [{ type: core.HostBinding, args: ['attr.tabindex',] }],
        onFocus: [{ type: core.HostListener, args: ['focus',] }],
        onBlur: [{ type: core.HostListener, args: ['blur',] }],
        selectNext: [{ type: core.HostListener, args: ['keydown.ArrowRight', ['$event'],] }, { type: core.HostListener, args: ['keydown.ArrowDown', ['$event'],] }],
        selectPrevious: [{ type: core.HostListener, args: ['keydown.ArrowLeft', ['$event'],] }, { type: core.HostListener, args: ['keydown.ArrowUp', ['$event'],] }]
    };

    var ButtonsModule = /** @class */ (function () {
        function ButtonsModule() {
        }
        ButtonsModule.forRoot = function () {
            return { ngModule: ButtonsModule, providers: [] };
        };
        return ButtonsModule;
    }());
    ButtonsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                    exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ButtonCheckboxDirective = ButtonCheckboxDirective;
    exports.ButtonRadioDirective = ButtonRadioDirective;
    exports.ButtonRadioGroupDirective = ButtonRadioGroupDirective;
    exports.ButtonsModule = ButtonsModule;
    exports.ɵa = CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.ɵb = RADIO_CONTROL_VALUE_ACCESSOR$1;
    exports.ɵc = RADIO_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-buttons.umd.js.map
