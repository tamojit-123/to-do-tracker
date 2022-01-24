import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
export class BsCustomDatesViewComponent {
    constructor() {
        this.onSelect = new EventEmitter();
    }
    selectFromRanges(range) {
        this.onSelect.emit(range);
    }
}
BsCustomDatesViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-custom-date-view',
                template: `
    <div class="bs-datepicker-predefined-btns">
      <button *ngFor="let range of ranges"
        type="button"
        class="btn"
        (click)="selectFromRanges(range)"
        [class.selected]="range.value === selectedRange">
        {{ range.label }}
      </button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
BsCustomDatesViewComponent.propDecorators = {
    ranges: [{ type: Input }],
    selectedRange: [{ type: Input }],
    customRangeLabel: [{ type: Input }],
    onSelect: [{ type: Output }]
};
//# sourceMappingURL=bs-custom-dates-view.component.js.map