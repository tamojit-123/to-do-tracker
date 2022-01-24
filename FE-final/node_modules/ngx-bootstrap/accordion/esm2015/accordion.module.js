import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-group.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
export class AccordionModule {
    static forRoot() {
        return { ngModule: AccordionModule, providers: [] };
    }
}
AccordionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CollapseModule],
                declarations: [AccordionComponent, AccordionPanelComponent],
                exports: [AccordionComponent, AccordionPanelComponent]
            },] }
];
//# sourceMappingURL=accordion.module.js.map