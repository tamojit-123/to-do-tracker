import { NgModule } from '@angular/core';
import { CollapseDirective } from './collapse.directive';
export class CollapseModule {
    static forRoot() {
        return { ngModule: CollapseModule, providers: [] };
    }
}
CollapseModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            },] }
];
//# sourceMappingURL=collapse.module.js.map