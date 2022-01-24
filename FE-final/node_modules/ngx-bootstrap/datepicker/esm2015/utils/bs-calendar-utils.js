import { getDay, isFirstDayOfWeek, isAfter, isBefore, shiftDate, endOf, startOf, isArray, isSame } from 'ngx-bootstrap/chronos';
export function getStartingDayOfCalendar(date, options) {
    if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
        return date;
    }
    const weekDay = getDay(date);
    const offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return shiftDate(date, { day: -offset });
}
export function calculateDateOffset(weekday, startingDayOffset) {
    const _startingDayOffset = Number(startingDayOffset);
    if (isNaN(_startingDayOffset)) {
        return 0;
    }
    if (_startingDayOffset === 0) {
        return weekday;
    }
    const offset = weekday - _startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
export function isMonthDisabled(date, min, max) {
    const minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    const maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound || false;
}
export function isYearDisabled(date, min, max) {
    const minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    const maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
    return minBound || maxBound || false;
}
export function isDisabledDate(date, datesDisabled) {
    if (!datesDisabled || !isArray(datesDisabled) || !datesDisabled.length) {
        return false;
    }
    return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, 'date'));
}
export function isEnabledDate(date, datesEnabled) {
    if (!datesEnabled || !isArray(datesEnabled) || !datesEnabled.length) {
        return false;
    }
    return !datesEnabled.some((enabledDate) => isSame(date, enabledDate, 'date'));
}
export function getYearsCalendarInitialDate(state, calendarIndex = 0) {
    const model = state && state.yearsCalendarModel && state.yearsCalendarModel[calendarIndex];
    return (model === null || model === void 0 ? void 0 : model.years[0]) && model.years[0][0] && model.years[0][0].date;
}
export function checkRangesWithMaxDate(ranges, maxDate) {
    if (!ranges)
        return ranges;
    if (!maxDate)
        return ranges;
    if (!ranges.length && !ranges[0].value)
        return ranges;
    ranges.forEach((item) => {
        if (!item || !item.value)
            return ranges;
        if (item.value instanceof Date)
            return ranges;
        if (!(item.value instanceof Array && item.value.length))
            return ranges;
        item.value = compareDateWithMaxDateHelper(item.value, maxDate);
        return ranges;
    });
    return ranges;
}
export function checkBsValue(date, maxDate) {
    if (!date)
        return date;
    if (!maxDate)
        return date;
    if (date instanceof Array && !date.length)
        return date;
    if (date instanceof Date)
        return date;
    return compareDateWithMaxDateHelper(date, maxDate);
}
function compareDateWithMaxDateHelper(date, maxDate) {
    if (date instanceof Array) {
        const editedValues = date.map(item => {
            if (!item)
                return item;
            if (isAfter(item, maxDate, 'date'))
                item = maxDate;
            return item;
        });
        return editedValues;
    }
    return date;
}
//# sourceMappingURL=bs-calendar-utils.js.map