import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { BsDropdownContainerComponent } from './bs-dropdown-container.component';
import { BsDropdownMenuDirective } from './bs-dropdown-menu.directive';
import { BsDropdownToggleDirective } from './bs-dropdown-toggle.directive';
import { BsDropdownDirective } from './bs-dropdown.directive';
import { BsDropdownState } from './bs-dropdown.state';
export class BsDropdownModule {
    static forRoot() {
        return {
            ngModule: BsDropdownModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState
            ]
        };
    }
}
BsDropdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective
                ],
                exports: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownDirective
                ],
                entryComponents: [BsDropdownContainerComponent]
            },] }
];
//# sourceMappingURL=bs-dropdown.module.js.map