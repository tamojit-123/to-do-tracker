import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
export class BsMonthCalendarViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    navigateTo(event) {
        const step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step } });
    }
    viewMonth(month) {
        this.onSelect.emit(month);
    }
    hoverMonth(cell, isHovered) {
        this.onHover.emit({ cell, isHovered });
    }
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
}
BsMonthCalendarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-month-calendar-view',
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <table role="grid" class="months">
        <tbody>
        <tr *ngFor="let row of calendar?.months">
          <td *ngFor="let month of row" role="gridcell"
              (click)="viewMonth(month)"
              (mouseenter)="hoverMonth(month, true)"
              (mouseleave)="hoverMonth(month, false)"
              [class.disabled]="month.isDisabled"
              [class.is-highlighted]="month.isHovered">
            <span [class.selected]="month.isSelected">{{ month.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </bs-calendar-layout>
  `
            },] }
];
BsMonthCalendarViewComponent.propDecorators = {
    calendar: [{ type: Input }],
    onNavigate: [{ type: Output }],
    onViewMode: [{ type: Output }],
    onSelect: [{ type: Output }],
    onHover: [{ type: Output }]
};
//# sourceMappingURL=bs-months-calendar-view.component.js.map