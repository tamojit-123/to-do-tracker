import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagerComponent } from './pager.component';
import { PaginationComponent } from './pagination.component';
export class PaginationModule {
    static forRoot() {
        return { ngModule: PaginationModule, providers: [] };
    }
}
PaginationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PagerComponent, PaginationComponent],
                exports: [PagerComponent, PaginationComponent]
            },] }
];
//# sourceMappingURL=pagination.module.js.map