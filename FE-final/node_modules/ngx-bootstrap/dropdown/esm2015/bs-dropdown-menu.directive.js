import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
export class BsDropdownMenuDirective {
    constructor(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
}
BsDropdownMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bsDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            },] }
];
BsDropdownMenuDirective.ctorParameters = () => [
    { type: BsDropdownState },
    { type: ViewContainerRef },
    { type: TemplateRef }
];
//# sourceMappingURL=bs-dropdown-menu.directive.js.map