// user and model input should handle parsing and validating input values
import { getFirstDayOfMonth } from 'ngx-bootstrap/chronos';
import { getStartingDayOfCalendar } from '../utils/bs-calendar-utils';
import { createMatrix } from '../utils/matrix-utils';
export function calcDaysCalendar(startingDate, options) {
    const firstDay = getFirstDayOfMonth(startingDate);
    const initialDate = getStartingDayOfCalendar(firstDay, options);
    // todo test
    const matrixOptions = {
        width: options.width || 0,
        height: options.height || 0,
        initialDate,
        shift: { day: 1 }
    };
    const daysMatrix = createMatrix(matrixOptions, date => date);
    return {
        daysMatrix,
        month: firstDay
    };
}
//# sourceMappingURL=calc-days-calendar.js.map