/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a data-bound value (typically a string) to a boolean. */
export function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}
//# sourceMappingURL=boolean-property.js.map