import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { PopoverDirective } from './popover.directive';
import { PopoverContainerComponent } from './popover-container.component';
export class PopoverModule {
    static forRoot() {
        return {
            ngModule: PopoverModule,
            providers: [ComponentLoaderFactory, PositioningService]
        };
    }
}
PopoverModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            },] }
];
//# sourceMappingURL=popover.module.js.map