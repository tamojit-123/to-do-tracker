import { createLocalOrUTC } from './from-anything';
import { isDate } from '../utils/type-checks';
export function parseDate(input, format, localeKey, strict, isUTC) {
    if (isDate(input)) {
        return input;
    }
    const config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
    return config._d;
}
export function utcAsLocal(date) {
    if (!(date instanceof Date)) {
        return null;
    }
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
}
//# sourceMappingURL=local.js.map