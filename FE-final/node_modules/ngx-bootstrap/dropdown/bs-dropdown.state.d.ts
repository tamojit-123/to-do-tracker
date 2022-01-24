import { EventEmitter } from '@angular/core';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import { BsDropdownMenuDirective } from './bs-dropdown-menu.directive';
export declare class BsDropdownState {
    direction: 'down' | 'up';
    autoClose: boolean;
    insideClick: boolean;
    isAnimated: boolean;
    isOpenChange: EventEmitter<boolean>;
    isDisabledChange: EventEmitter<boolean>;
    toggleClick: EventEmitter<boolean>;
    /**
     * Content to be displayed as popover.
     */
    dropdownMenu: Promise<BsComponentRef<BsDropdownMenuDirective>>;
    resolveDropdownMenu: (componentRef: BsComponentRef<BsDropdownMenuDirective>) => void;
    constructor();
}
