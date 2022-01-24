import { OnInit } from '@angular/core';
import { DatePickerInnerComponent } from './datepicker-inner.component';
export declare class YearPickerComponent implements OnInit {
    datePicker: DatePickerInnerComponent;
    title?: string;
    rows: never[];
    constructor(datePicker: DatePickerInnerComponent);
    get isBs4(): boolean;
    ngOnInit(): void;
    protected getStartingYear(year: number): number | undefined;
}
