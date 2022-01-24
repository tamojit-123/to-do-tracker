import { EventEmitter } from '@angular/core';
export interface BsCustomDates {
    label: string;
    value: Date | Date[];
}
export declare class BsCustomDatesViewComponent {
    ranges?: BsCustomDates[];
    selectedRange?: Date[];
    customRangeLabel?: string;
    onSelect: EventEmitter<BsCustomDates>;
    selectFromRanges(range?: BsCustomDates): void;
}
