/**
 * Tells if a given input is a number
 */
export function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(Number(n));
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}
//# sourceMappingURL=isNumeric.js.map