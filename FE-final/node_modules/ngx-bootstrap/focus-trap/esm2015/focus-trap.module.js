import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusTrapManager } from './focus-trap-manager';
import { InteractivityChecker } from './interactivity-checker';
import { FocusTrapDirective } from './focus-trap';
import { Platform } from './platform';
export class FocusTrapModule {
    static forRoot() {
        return {
            ngModule: FocusTrapModule,
            providers: [
                FocusTrapManager,
                Platform,
                InteractivityChecker
            ]
        };
    }
}
FocusTrapModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [FocusTrapDirective],
                exports: [FocusTrapDirective]
            },] }
];
//# sourceMappingURL=focus-trap.module.js.map