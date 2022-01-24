import { Component, Input } from '@angular/core';
export class BsCurrentDateViewComponent {
}
BsCurrentDateViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-current-date',
                template: `<div class="current-timedate"><span>{{ title }}</span></div>`
            },] }
];
BsCurrentDateViewComponent.propDecorators = {
    title: [{ type: Input }]
};
//# sourceMappingURL=bs-current-date-view.component.js.map