import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingComponent } from './rating.component';
export class RatingModule {
    static forRoot() {
        return {
            ngModule: RatingModule,
            providers: []
        };
    }
}
RatingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [RatingComponent],
                exports: [RatingComponent]
            },] }
];
//# sourceMappingURL=rating.module.js.map