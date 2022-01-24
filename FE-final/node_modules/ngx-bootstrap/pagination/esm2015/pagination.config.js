// todo: split
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** Provides default values for Pagination and pager components */
export class PaginationConfig {
    constructor() {
        this.main = {
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
}
PaginationConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaginationConfig_Factory() { return new PaginationConfig(); }, token: PaginationConfig, providedIn: "root" });
PaginationConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=pagination.config.js.map