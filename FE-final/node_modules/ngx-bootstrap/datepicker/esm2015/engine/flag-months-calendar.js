import { isSameMonth, shiftDate } from 'ngx-bootstrap/chronos';
import { isMonthDisabled, isYearDisabled } from '../utils/bs-calendar-utils';
export function flagMonthsCalendar(monthCalendar, options) {
    monthCalendar.months.forEach((months, rowIndex) => {
        months.forEach((month, monthIndex) => {
            let isSelected;
            const isHovered = isSameMonth(month.date, options.hoveredMonth);
            const isDisabled = options.isDisabled ||
                isMonthDisabled(month.date, options.minDate, options.maxDate);
            if (!options.selectedDate && options.selectedRange) {
                isSelected = isSameMonth(month.date, options.selectedRange[0]);
                if (!isSelected) {
                    isSelected = isSameMonth(month.date, options.selectedRange[1]);
                }
            }
            else {
                isSelected = isSameMonth(month.date, options.selectedDate);
            }
            const newMonth = Object.assign(/*{},*/ month, {
                isHovered,
                isDisabled,
                isSelected
            });
            if (month.isHovered !== newMonth.isHovered ||
                month.isDisabled !== newMonth.isDisabled ||
                month.isSelected !== newMonth.isSelected) {
                monthCalendar.months[rowIndex][monthIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    monthCalendar.hideLeftArrow =
        !!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
    monthCalendar.hideRightArrow =
        (!!options.monthIndex || options.monthIndex === 0)
            && (!!options.displayMonths || options.displayMonths === 0)
            && options.monthIndex < options.displayMonths
            && options.monthIndex + 1 !== options.displayMonths;
    monthCalendar.disableLeftArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    monthCalendar.disableRightArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
    return monthCalendar;
}
//# sourceMappingURL=flag-months-calendar.js.map