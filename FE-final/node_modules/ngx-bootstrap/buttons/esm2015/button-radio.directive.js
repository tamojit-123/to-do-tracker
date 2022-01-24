import { ChangeDetectorRef, Directive, ElementRef, forwardRef, HostBinding, HostListener, Inject, Input, Optional, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonRadioGroupDirective } from './button-radio-group.directive';
export const RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonRadioDirective),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export class ButtonRadioDirective {
    constructor(el, cdr, renderer, group) {
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
    /** Current value of radio component or group */
    get value() {
        return this.group ? this.group.value : this._value;
    }
    set value(value) {
        if (this.group) {
            this.group.value = value;
            return;
        }
        this._value = value;
        this._onChange(value);
    }
    /** If `true` — radio button is disabled */
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this.setDisabledState(disabled);
    }
    get controlOrGroupDisabled() {
        return this.disabled || (this.group && this.group.disabled) ? true : undefined;
    }
    get hasDisabledClass() {
        // Although the radio is disabled the active radio should still stand out.
        // The disabled class will prevent this so don't add it on the active radio
        return this.controlOrGroupDisabled && !this.isActive;
    }
    get isActive() {
        return this.btnRadio === this.value;
    }
    get tabindex() {
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
    }
    get hasFocus() {
        return this._hasFocus;
    }
    toggleIfAllowed() {
        if (!this.canToggle()) {
            return;
        }
        if (this.uncheckable && this.btnRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.btnRadio;
        }
    }
    onSpacePressed(event) {
        this.toggleIfAllowed();
        event.preventDefault();
    }
    focus() {
        this.el.nativeElement.focus();
    }
    onFocus() {
        this._hasFocus = true;
    }
    onBlur() {
        this._hasFocus = false;
        this.onTouched();
    }
    canToggle() {
        return !this.controlOrGroupDisabled && (this.uncheckable || this.btnRadio !== this.value);
    }
    ngOnChanges(changes) {
        if ('uncheckable' in changes) {
            this.uncheckable = this.uncheckable !== false && typeof this.uncheckable !== 'undefined';
        }
    }
    _onChange(value) {
        if (this.group) {
            this.group.value = value;
            return;
        }
        this.onTouched();
        this.onChange(value);
    }
    // ControlValueAccessor
    // model -> view
    writeValue(value) {
        this.value = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this._disabled = disabled;
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
}
ButtonRadioDirective.decorators = [
    { type: Directive, args: [{
                selector: '[btnRadio]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR]
            },] }
];
ButtonRadioDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ButtonRadioGroupDirective, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(() => ButtonRadioGroupDirective),] }] }
];
ButtonRadioDirective.propDecorators = {
    btnRadio: [{ type: Input }],
    uncheckable: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    controlOrGroupDisabled: [{ type: HostBinding, args: ['attr.aria-disabled',] }],
    hasDisabledClass: [{ type: HostBinding, args: ['class.disabled',] }],
    isActive: [{ type: HostBinding, args: ['class.active',] }, { type: HostBinding, args: ['attr.aria-checked',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    toggleIfAllowed: [{ type: HostListener, args: ['click',] }],
    onSpacePressed: [{ type: HostListener, args: ['keydown.space', ['$event'],] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }]
};
//# sourceMappingURL=button-radio.directive.js.map