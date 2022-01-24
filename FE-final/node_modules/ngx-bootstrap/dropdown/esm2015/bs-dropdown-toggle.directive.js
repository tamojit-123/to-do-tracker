import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import { BsDropdownDirective } from './bs-dropdown.directive';
export class BsDropdownToggleDirective {
    constructor(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dropdown = _dropdown;
        this._element = _element;
        this._renderer = _renderer;
        this._state = _state;
        this.isOpen = false;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe((value) => {
            this.isOpen = value;
            if (value) {
                this._documentClickListener = this._renderer.listen('document', 'click', (event) => {
                    if (this._state.autoClose && event.button !== 2 &&
                        !this._element.nativeElement.contains(event.target) &&
                        !(this._state.insideClick && this._dropdown._contains(event))) {
                        this._state.toggleClick.emit(false);
                        this._changeDetectorRef.detectChanges();
                    }
                });
                this._escKeyUpListener = this._renderer.listen(this._element.nativeElement, 'keyup.esc', () => {
                    if (this._state.autoClose) {
                        this._state.toggleClick.emit(false);
                        this._changeDetectorRef.detectChanges();
                    }
                });
            }
            else {
                this._documentClickListener && this._documentClickListener();
                this._escKeyUpListener && this._escKeyUpListener();
            }
        }));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange
            .subscribe((value) => this.isDisabled = value || void 0));
    }
    onClick(event) {
        event.stopPropagation();
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    }
    ngOnDestroy() {
        if (this._documentClickListener) {
            this._documentClickListener();
        }
        if (this._escKeyUpListener) {
            this._escKeyUpListener();
        }
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
}
BsDropdownToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bsDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle',
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[attr.aria-haspopup]': 'true'
                }
            },] }
];
BsDropdownToggleDirective.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: BsDropdownDirective },
    { type: ElementRef },
    { type: Renderer2 },
    { type: BsDropdownState }
];
BsDropdownToggleDirective.propDecorators = {
    isDisabled: [{ type: HostBinding, args: ['attr.disabled',] }],
    isOpen: [{ type: HostBinding, args: ['attr.aria-expanded',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=bs-dropdown-toggle.directive.js.map