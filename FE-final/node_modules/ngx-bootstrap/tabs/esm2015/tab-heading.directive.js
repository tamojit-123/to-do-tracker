import { Directive, TemplateRef } from '@angular/core';
import { TabDirective } from './tab.directive';
/** Should be used to mark <ng-template> element as a template for tab heading */
export class TabHeadingDirective {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(templateRef, tab) {
        tab.headingRef = templateRef;
    }
}
TabHeadingDirective.decorators = [
    { type: Directive, args: [{ selector: '[tabHeading]' },] }
];
TabHeadingDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: TabDirective }
];
//# sourceMappingURL=tab-heading.directive.js.map