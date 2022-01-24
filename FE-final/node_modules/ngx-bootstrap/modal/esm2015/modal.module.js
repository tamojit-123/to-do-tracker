import { NgModule } from '@angular/core';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { FocusTrapModule } from 'ngx-bootstrap/focus-trap';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalDirective } from './modal.directive';
import { ModalContainerComponent } from './modal-container.component';
import { BsModalService } from './bs-modal.service';
export const focusTrapModule = FocusTrapModule.forRoot();
export class ModalModule {
    static forRoot() {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    }
    static forChild() {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    }
}
ModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [FocusTrapModule],
                declarations: [
                    ModalBackdropComponent,
                    ModalDirective,
                    ModalContainerComponent
                ],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent]
            },] }
];
//# sourceMappingURL=modal.module.js.map