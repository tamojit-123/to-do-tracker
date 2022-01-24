import { isSameYear, shiftDate } from 'ngx-bootstrap/chronos';
import { isYearDisabled } from '../utils/bs-calendar-utils';
export function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach((years, rowIndex) => {
        years.forEach((year, yearIndex) => {
            let isSelected;
            const isHovered = isSameYear(year.date, options.hoveredYear);
            const isDisabled = options.isDisabled ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            if (!options.selectedDate && options.selectedRange) {
                isSelected = isSameYear(year.date, options.selectedRange[0]);
                if (!isSelected) {
                    isSelected = isSameYear(year.date, options.selectedRange[1]);
                }
            }
            else {
                isSelected = isSameYear(year.date, options.selectedDate);
            }
            const newMonth = Object.assign(/*{},*/ year, { isHovered, isDisabled, isSelected });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled ||
                year.isSelected !== newMonth.isSelected) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        !!options.yearIndex && options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        !!options.yearIndex && !!options.displayMonths &&
            options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = isYearDisabled(shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    const i = yearsCalendar.years.length - 1;
    const j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}
//# sourceMappingURL=flag-years-calendar.js.map