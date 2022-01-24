import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimepickerComponent } from './timepicker.component';
import { TimepickerActions } from './reducer/timepicker.actions';
import { TimepickerStore } from './reducer/timepicker.store';
export class TimepickerModule {
    static forRoot() {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerActions, TimepickerStore]
        };
    }
}
TimepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TimepickerComponent],
                exports: [TimepickerComponent]
            },] }
];
//# sourceMappingURL=timepicker.module.js.map