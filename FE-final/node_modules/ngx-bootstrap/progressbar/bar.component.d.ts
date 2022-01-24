import { ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { ProgressbarType } from './progressbar-type.interface';
export declare class BarComponent implements OnChanges {
    private el;
    private renderer;
    /** maximum total value of progress element */
    max: number;
    /** current value of progress bar */
    value?: number | undefined;
    /** if `true` changing value of progress bar will be animated */
    animate?: boolean | undefined;
    /** If `true`, striped classes are applied */
    striped?: boolean | undefined;
    /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
    type?: ProgressbarType;
    percent: number;
    get isBs3(): boolean;
    private _prevType?;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    private applyTypeClasses;
}
