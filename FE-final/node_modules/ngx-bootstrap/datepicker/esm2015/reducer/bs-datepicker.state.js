import { defaultMonthOptions } from './_defaults';
import { BsDatepickerConfig } from '../bs-datepicker.config';
export class BsDatepickerState {
    constructor() {
        // DatepickerRenderOptions
        this.showWeekNumbers = true;
        this.displayMonths = 1;
    }
}
const _initialView = { date: new Date(), mode: 'day' };
export const initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
    locale: 'en',
    view: _initialView,
    selectedRange: [],
    monthViewOptions: defaultMonthOptions
});
//# sourceMappingURL=bs-datepicker.state.js.map