import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class BsLocaleService {
    constructor() {
        this._defaultLocale = 'en';
        this._locale = new BehaviorSubject(this._defaultLocale);
        this._localeChange = this._locale.asObservable();
    }
    get locale() {
        return this._locale;
    }
    get localeChange() {
        return this._localeChange;
    }
    get currentLocale() {
        return this._locale.getValue();
    }
    use(locale) {
        if (locale === this.currentLocale) {
            return;
        }
        this._locale.next(locale);
    }
}
BsLocaleService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=bs-locale.service.js.map