import { startOf, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
const height = 4;
const width = 3;
const shift = { month: 1 };
export function formatMonthsCalendar(viewDate, formatOptions) {
    const initialDate = startOf(viewDate, 'year');
    const matrixOptions = { width, height, initialDate, shift };
    const monthMatrix = createMatrix(matrixOptions, date => ({
        date,
        label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
    }));
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale),
        hideRightArrow: false,
        hideLeftArrow: false,
        disableRightArrow: false,
        disableLeftArrow: false
    };
}
//# sourceMappingURL=format-months-calendar.js.map