import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarComponent } from './bar.component';
import { ProgressbarComponent } from './progressbar.component';
export class ProgressbarModule {
    static forRoot() {
        return { ngModule: ProgressbarModule, providers: [] };
    }
}
ProgressbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [BarComponent, ProgressbarComponent],
                exports: [BarComponent, ProgressbarComponent]
            },] }
];
//# sourceMappingURL=progressbar.module.js.map