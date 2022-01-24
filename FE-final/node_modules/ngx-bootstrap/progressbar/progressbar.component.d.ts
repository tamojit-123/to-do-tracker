import { BarValue, ProgressbarType } from './progressbar-type.interface';
import { ProgressbarConfig } from './progressbar.config';
export declare class ProgressbarComponent {
    /** maximum total value of progress element */
    max: number;
    /** if `true` changing value of progress bar will be animated */
    animate: boolean;
    /** If `true`, striped classes are applied */
    striped: boolean;
    /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
    type?: ProgressbarType;
    /** current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     */
    set value(value: number | BarValue[]);
    isStacked: boolean;
    _value?: number | undefined;
    _values?: BarValue[];
    constructor(config: ProgressbarConfig);
}
