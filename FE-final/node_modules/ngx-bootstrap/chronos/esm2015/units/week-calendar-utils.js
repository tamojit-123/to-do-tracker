/**
 *
 * @param {number} year
 * @param {number} dow - start-of-first-week
 * @param {number} doy - start-of-year
 * @returns {number}
 */
import { createUTCDate } from '../create/date-from-array';
import { daysInYear } from './year';
import { getDayOfYear } from './day-of-year';
import { getFullYear } from '../utils/date-getters';
function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    const fwd = dow - doy + 7;
    // first-week day local weekday -- which local weekday is fwd
    const fwdlw = (createUTCDate(year, 0, fwd).getUTCDay() - dow + 7) % 7;
    return -fwdlw + fwd - 1;
}
// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
export function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    const localWeekday = (7 + weekday - dow) % 7;
    const weekOffset = firstWeekOffset(year, dow, doy);
    const dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
    let resYear;
    let resDayOfYear;
    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    }
    else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    }
    else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }
    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}
export function weekOfYear(date, dow, doy, isUTC) {
    const weekOffset = firstWeekOffset(getFullYear(date, isUTC), dow, doy);
    const week = Math.floor((getDayOfYear(date, isUTC) - weekOffset - 1) / 7) + 1;
    let resWeek;
    let resYear;
    if (week < 1) {
        resYear = getFullYear(date, isUTC) - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    }
    else if (week > weeksInYear(getFullYear(date, isUTC), dow, doy)) {
        resWeek = week - weeksInYear(getFullYear(date, isUTC), dow, doy);
        resYear = getFullYear(date, isUTC) + 1;
    }
    else {
        resYear = getFullYear(date, isUTC);
        resWeek = week;
    }
    return {
        week: resWeek,
        year: resYear
    };
}
export function weeksInYear(year, dow, doy) {
    const weekOffset = firstWeekOffset(year, dow, doy);
    const weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}
//# sourceMappingURL=week-calendar-utils.js.map