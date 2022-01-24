import { ChangeDetectorRef, ContentChildren, Directive, forwardRef, HostBinding, HostListener, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonRadioDirective } from './button-radio.directive';
export const RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonRadioGroupDirective),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export class ButtonRadioGroupDirective {
    constructor(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.role = 'radiogroup';
        this._disabled = false;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.onChange(value);
    }
    get disabled() {
        return this._disabled;
    }
    get tabindex() {
        if (this._disabled) {
            return null;
        }
        else {
            return 0;
        }
    }
    writeValue(value) {
        this._value = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        if (this.radioButtons) {
            this._disabled = disabled;
            this.radioButtons.forEach(buttons => {
                buttons.setDisabledState(disabled);
            });
            this.cdr.markForCheck();
        }
    }
    onFocus() {
        if (this._disabled) {
            return;
        }
        const activeRadio = this.getActiveOrFocusedRadio();
        if (activeRadio) {
            activeRadio.focus();
            return;
        }
        if (this.radioButtons) {
            const firstEnabled = this.radioButtons.find(r => !r.disabled);
            if (firstEnabled) {
                firstEnabled.focus();
            }
        }
    }
    onBlur() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    selectNext(event) {
        this.selectInDirection('next');
        event.preventDefault();
    }
    selectPrevious(event) {
        this.selectInDirection('previous');
        event.preventDefault();
    }
    selectInDirection(direction) {
        if (this._disabled) {
            return;
        }
        function nextIndex(currentIndex, buttonRadioDirectives) {
            const step = direction === 'next' ? 1 : -1;
            let calcIndex = (currentIndex + step) % buttonRadioDirectives.length;
            if (calcIndex < 0) {
                calcIndex = buttonRadioDirectives.length - 1;
            }
            return calcIndex;
        }
        const activeRadio = this.getActiveOrFocusedRadio();
        if (activeRadio && this.radioButtons) {
            const buttonRadioDirectives = this.radioButtons.toArray();
            const currentActiveIndex = buttonRadioDirectives.indexOf(activeRadio);
            for (let i = nextIndex(currentActiveIndex, buttonRadioDirectives); i !== currentActiveIndex; i = nextIndex(i, buttonRadioDirectives)) {
                if (buttonRadioDirectives[i].canToggle()) {
                    buttonRadioDirectives[i].toggleIfAllowed();
                    buttonRadioDirectives[i].focus();
                    break;
                }
            }
        }
    }
    getActiveOrFocusedRadio() {
        if (!this.radioButtons) {
            return void 0;
        }
        return this.radioButtons.find(button => button.isActive)
            || this.radioButtons.find(button => button.hasFocus);
    }
}
ButtonRadioGroupDirective.decorators = [
    { type: Directive, args: [{
                selector: '[btnRadioGroup]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR]
            },] }
];
ButtonRadioGroupDirective.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ButtonRadioGroupDirective.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    radioButtons: [{ type: ContentChildren, args: [forwardRef(() => ButtonRadioDirective),] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    selectNext: [{ type: HostListener, args: ['keydown.ArrowRight', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowDown', ['$event'],] }],
    selectPrevious: [{ type: HostListener, args: ['keydown.ArrowLeft', ['$event'],] }, { type: HostListener, args: ['keydown.ArrowUp', ['$event'],] }]
};
//# sourceMappingURL=button-radio-group.directive.js.map