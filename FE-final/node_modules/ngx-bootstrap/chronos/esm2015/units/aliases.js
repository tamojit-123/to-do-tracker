import { hasOwnProp, isString } from '../utils/type-checks';
const aliases = {};
const _mapUnits = {
    date: 'day',
    hour: 'hours',
    minute: 'minutes',
    second: 'seconds',
    millisecond: 'milliseconds'
};
export function addUnitAlias(unit, shorthand) {
    const lowerCase = unit.toLowerCase();
    let _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[`${lowerCase}s`] = aliases[shorthand] = _unit;
}
export function normalizeUnits(units) {
    return isString(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}
export function normalizeObjectUnits(inputObject) {
    const normalizedInput = {};
    let normalizedProp;
    let prop;
    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }
    return normalizedInput;
}
//# sourceMappingURL=aliases.js.map