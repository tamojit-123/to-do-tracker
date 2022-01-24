import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
export class AlertModule {
    static forRoot() {
        return { ngModule: AlertModule, providers: [] };
    }
}
AlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [AlertComponent],
                exports: [AlertComponent],
                entryComponents: [AlertComponent]
            },] }
];
//# sourceMappingURL=alert.module.js.map