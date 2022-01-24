(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/pagination', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].pagination = {}), global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, i0, forms, common) { 'use strict';

    // todo: split
    /** Provides default values for Pagination and pager components */
    var PaginationConfig = /** @class */ (function () {
        function PaginationConfig() {
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
        return PaginationConfig;
    }());
    PaginationConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function PaginationConfig_Factory() { return new PaginationConfig(); }, token: PaginationConfig, providedIn: "root" });
    PaginationConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var PAGER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return PagerComponent; }),
        multi: true
    };
    var PagerComponent = /** @class */ (function () {
        function PagerComponent(elementRef, paginationConfig, changeDetection) {
            this.elementRef = elementRef;
            this.changeDetection = changeDetection;
            /** if `true` aligns each link to the sides of pager */
            this.align = false;
            /** if false first and last buttons will be hidden */
            this.boundaryLinks = false;
            /** if false previous and next buttons will be hidden */
            this.directionLinks = true;
            // labels
            /** first button text */
            this.firstText = 'First';
            /** previous button text */
            this.previousText = '« Previous';
            /** next button text */
            this.nextText = 'Next »';
            /** last button text */
            this.lastText = 'Last';
            /** if true current page will in the middle of pages list */
            this.rotate = true;
            // css
            /** add class to <code><li\></code> */
            this.pageBtnClass = '';
            /** if true pagination component will be disabled */
            this.disabled = false;
            /** fired when total pages count changes, $event:number equals to total pages count */
            this.numPages = new i0.EventEmitter();
            /** fired when page was changed, $event:{page, itemsPerPage} equals to
             * object with current page index and number of items per page
             */
            this.pageChanged = new i0.EventEmitter();
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
            this.classMap = '';
            this.inited = false;
            this._itemsPerPage = 15;
            this._totalItems = 0;
            this._totalPages = 0;
            this._page = 1;
            this.elementRef = elementRef;
            if (!this.config) {
                this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
            }
        }
        Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
            /** maximum number of items per page. If value less than 1 will display all items on one page */
            get: function () {
                return this._itemsPerPage;
            },
            set: function (v) {
                this._itemsPerPage = v;
                this.totalPages = this.calculateTotalPages();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PagerComponent.prototype, "totalItems", {
            /** total number of items in all pages */
            get: function () {
                return this._totalItems;
            },
            set: function (v) {
                this._totalItems = v;
                this.totalPages = this.calculateTotalPages();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PagerComponent.prototype, "totalPages", {
            get: function () {
                return this._totalPages;
            },
            set: function (v) {
                this._totalPages = v;
                this.numPages.emit(v);
                if (this.inited) {
                    this.selectPage(this.page);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PagerComponent.prototype, "page", {
            get: function () {
                return this._page;
            },
            set: function (value) {
                var _previous = this._page;
                this._page = value > this.totalPages ? this.totalPages : value || 1;
                this.changeDetection.markForCheck();
                if (_previous === this._page || typeof _previous === 'undefined') {
                    return;
                }
                this.pageChanged.emit({
                    page: this._page,
                    itemsPerPage: this.itemsPerPage
                });
            },
            enumerable: false,
            configurable: true
        });
        PagerComponent.prototype.configureOptions = function (config) {
            this.config = Object.assign({}, config);
        };
        PagerComponent.prototype.ngOnInit = function () {
            var _a, _b, _c, _d, _e, _f;
            if (typeof window !== 'undefined') {
                this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
            }
            // watch for maxSize
            if (typeof this.maxSize === 'undefined') {
                this.maxSize = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.maxSize) || 0;
            }
            if (typeof this.rotate === 'undefined') {
                this.rotate = !!((_b = this.config) === null || _b === void 0 ? void 0 : _b.rotate);
            }
            if (typeof this.boundaryLinks === 'undefined') {
                this.boundaryLinks = !!((_c = this.config) === null || _c === void 0 ? void 0 : _c.boundaryLinks);
            }
            if (typeof this.directionLinks === 'undefined') {
                this.directionLinks = !!((_d = this.config) === null || _d === void 0 ? void 0 : _d.directionLinks);
            }
            if (typeof this.pageBtnClass === 'undefined') {
                this.pageBtnClass = ((_e = this.config) === null || _e === void 0 ? void 0 : _e.pageBtnClass) || '';
            }
            // base class
            if (typeof this.itemsPerPage === 'undefined') {
                this.itemsPerPage = ((_f = this.config) === null || _f === void 0 ? void 0 : _f.itemsPerPage) || 0;
            }
            this.totalPages = this.calculateTotalPages();
            // this class
            this.pages = this.getPages(this.page, this.totalPages);
            this.inited = true;
        };
        PagerComponent.prototype.writeValue = function (value) {
            this.page = value;
            this.pages = this.getPages(this.page, this.totalPages);
        };
        PagerComponent.prototype.getText = function (key) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return this[key + "Text"] || this.config[key + "Text"];
        };
        PagerComponent.prototype.noPrevious = function () {
            return this.page === 1;
        };
        PagerComponent.prototype.noNext = function () {
            return this.page === this.totalPages;
        };
        PagerComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        PagerComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        PagerComponent.prototype.selectPage = function (page, event) {
            if (event) {
                event.preventDefault();
            }
            if (!this.disabled) {
                if (event && event.target) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    var target = event.target;
                    target.blur();
                }
                this.writeValue(page);
                this.onChange(this.page);
            }
        };
        // Create page object used in template
        PagerComponent.prototype.makePage = function (num, text, active) {
            return { text: text, number: num, active: active };
        };
        PagerComponent.prototype.getPages = function (currentPage, totalPages) {
            var pages = [];
            // Default page limits
            var startPage = 1;
            var endPage = totalPages;
            var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
            // recompute if maxSize
            if (isMaxSized && this.maxSize) {
                if (this.rotate) {
                    // Current page is displayed in the middle of the visible ones
                    startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                    endPage = startPage + this.maxSize - 1;
                    // Adjust if limit is exceeded
                    if (endPage > totalPages) {
                        endPage = totalPages;
                        startPage = endPage - this.maxSize + 1;
                    }
                }
                else {
                    // Visible pages are paginated with maxSize
                    startPage =
                        (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                    // Adjust last page if limit is exceeded
                    endPage = Math.min(startPage + this.maxSize - 1, totalPages);
                }
            }
            // Add page number links
            for (var num = startPage; num <= endPage; num++) {
                var page = this.makePage(num, num.toString(), num === currentPage);
                pages.push(page);
            }
            // Add links to move between page sets
            if (isMaxSized && !this.rotate) {
                if (startPage > 1) {
                    var previousPageSet = this.makePage(startPage - 1, '...', false);
                    pages.unshift(previousPageSet);
                }
                if (endPage < totalPages) {
                    var nextPageSet = this.makePage(endPage + 1, '...', false);
                    pages.push(nextPageSet);
                }
            }
            return pages;
        };
        // base class
        PagerComponent.prototype.calculateTotalPages = function () {
            var totalPages = this.itemsPerPage < 1
                ? 1
                : Math.ceil(this.totalItems / this.itemsPerPage);
            return Math.max(totalPages || 0, 1);
        };
        return PagerComponent;
    }());
    PagerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'pager',
                    template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
                    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    PagerComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: PaginationConfig },
        { type: i0.ChangeDetectorRef }
    ]; };
    PagerComponent.propDecorators = {
        align: [{ type: i0.Input }],
        maxSize: [{ type: i0.Input }],
        boundaryLinks: [{ type: i0.Input }],
        directionLinks: [{ type: i0.Input }],
        firstText: [{ type: i0.Input }],
        previousText: [{ type: i0.Input }],
        nextText: [{ type: i0.Input }],
        lastText: [{ type: i0.Input }],
        rotate: [{ type: i0.Input }],
        pageBtnClass: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        numPages: [{ type: i0.Output }],
        pageChanged: [{ type: i0.Output }],
        itemsPerPage: [{ type: i0.Input }],
        totalItems: [{ type: i0.Input }]
    };

    var PAGINATION_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return PaginationComponent; }),
        multi: true
    };
    var PaginationComponent = /** @class */ (function () {
        function PaginationComponent(elementRef, paginationConfig, changeDetection) {
            this.elementRef = elementRef;
            this.changeDetection = changeDetection;
            /** if `true` aligns each link to the sides of pager */
            this.align = true;
            /** if false first and last buttons will be hidden */
            this.boundaryLinks = false;
            /** if false previous and next buttons will be hidden */
            this.directionLinks = true;
            // labels
            /** first button text */
            this.firstText = 'First';
            /** previous button text */
            this.previousText = 'Previous';
            /** next button text */
            this.nextText = 'Next';
            /** last button text */
            this.lastText = 'Last';
            /** if true current page will in the middle of pages list */
            this.rotate = true;
            // css
            /** add class to <code><li\></code> */
            this.pageBtnClass = '';
            /** if true pagination component will be disabled */
            this.disabled = false;
            /** fired when total pages count changes, $event:number equals to total pages count */
            this.numPages = new i0.EventEmitter();
            /** fired when page was changed, $event:{page, itemsPerPage} equals to object
             * with current page index and number of items per page
             */
            this.pageChanged = new i0.EventEmitter();
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
            this.classMap = '';
            this.inited = false;
            this._itemsPerPage = 10;
            this._totalItems = 0;
            this._totalPages = 0;
            this._page = 1;
            this.elementRef = elementRef;
            if (!this.config) {
                this.configureOptions(paginationConfig.main);
            }
        }
        Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
            /** maximum number of items per page. If value less than 1 will display all items on one page */
            get: function () {
                return this._itemsPerPage;
            },
            set: function (v) {
                this._itemsPerPage = v;
                this.totalPages = this.calculateTotalPages();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaginationComponent.prototype, "totalItems", {
            /** total number of items in all pages */
            get: function () {
                return this._totalItems;
            },
            set: function (v) {
                this._totalItems = v;
                this.totalPages = this.calculateTotalPages();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaginationComponent.prototype, "totalPages", {
            get: function () {
                return this._totalPages;
            },
            set: function (v) {
                this._totalPages = v;
                this.numPages.emit(v);
                if (this.inited) {
                    this.selectPage(this.page);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaginationComponent.prototype, "page", {
            get: function () {
                return this._page;
            },
            set: function (value) {
                var _previous = this._page;
                this._page = value > this.totalPages ? this.totalPages : value || 1;
                this.changeDetection.markForCheck();
                if (_previous === this._page || typeof _previous === 'undefined') {
                    return;
                }
                this.pageChanged.emit({
                    page: this._page,
                    itemsPerPage: this.itemsPerPage
                });
            },
            enumerable: false,
            configurable: true
        });
        PaginationComponent.prototype.configureOptions = function (config) {
            this.config = Object.assign({}, config);
        };
        PaginationComponent.prototype.ngOnInit = function () {
            var _a, _b, _c, _d, _e, _f;
            if (typeof window !== 'undefined') {
                this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
            }
            // watch for maxSize
            if (typeof this.maxSize === 'undefined') {
                this.maxSize = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.maxSize) || 0;
            }
            if (typeof this.rotate === 'undefined') {
                this.rotate = !!((_b = this.config) === null || _b === void 0 ? void 0 : _b.rotate);
            }
            if (typeof this.boundaryLinks === 'undefined') {
                this.boundaryLinks = !!((_c = this.config) === null || _c === void 0 ? void 0 : _c.boundaryLinks);
            }
            if (typeof this.directionLinks === 'undefined') {
                this.directionLinks = !!((_d = this.config) === null || _d === void 0 ? void 0 : _d.directionLinks);
            }
            if (typeof this.pageBtnClass === 'undefined') {
                this.pageBtnClass = ((_e = this.config) === null || _e === void 0 ? void 0 : _e.pageBtnClass) || '';
            }
            // base class
            if (typeof this.itemsPerPage === 'undefined') {
                this.itemsPerPage = ((_f = this.config) === null || _f === void 0 ? void 0 : _f.itemsPerPage) || 0;
            }
            this.totalPages = this.calculateTotalPages();
            // this class
            this.pages = this.getPages(this.page, this.totalPages);
            this.inited = true;
        };
        PaginationComponent.prototype.writeValue = function (value) {
            this.page = value;
            this.pages = this.getPages(this.page, this.totalPages);
        };
        PaginationComponent.prototype.getText = function (key) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return this[key + "Text"] || this.config[key + "Text"];
        };
        PaginationComponent.prototype.noPrevious = function () {
            return this.page === 1;
        };
        PaginationComponent.prototype.noNext = function () {
            return this.page === this.totalPages;
        };
        PaginationComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        PaginationComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        PaginationComponent.prototype.selectPage = function (page, event) {
            if (event) {
                event.preventDefault();
            }
            if (!this.disabled) {
                if (event && event.target) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    var target = event.target;
                    target.blur();
                }
                this.writeValue(page);
                this.onChange(this.page);
            }
        };
        // Create page object used in template
        PaginationComponent.prototype.makePage = function (num, text, active) {
            return { text: text, number: num, active: active };
        };
        PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
            var pages = [];
            // Default page limits
            var startPage = 1;
            var endPage = totalPages;
            var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
            // recompute if maxSize
            if (isMaxSized && this.maxSize) {
                if (this.rotate) {
                    // Current page is displayed in the middle of the visible ones
                    startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                    endPage = startPage + this.maxSize - 1;
                    // Adjust if limit is exceeded
                    if (endPage > totalPages) {
                        endPage = totalPages;
                        startPage = endPage - this.maxSize + 1;
                    }
                }
                else {
                    // Visible pages are paginated with maxSize
                    startPage =
                        (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                    // Adjust last page if limit is exceeded
                    endPage = Math.min(startPage + this.maxSize - 1, totalPages);
                }
            }
            // Add page number links
            for (var num = startPage; num <= endPage; num++) {
                var page = this.makePage(num, num.toString(), num === currentPage);
                pages.push(page);
            }
            // Add links to move between page sets
            if (isMaxSized && !this.rotate) {
                if (startPage > 1) {
                    var previousPageSet = this.makePage(startPage - 1, '...', false);
                    pages.unshift(previousPageSet);
                }
                if (endPage < totalPages) {
                    var nextPageSet = this.makePage(endPage + 1, '...', false);
                    pages.push(nextPageSet);
                }
            }
            return pages;
        };
        // base class
        PaginationComponent.prototype.calculateTotalPages = function () {
            var totalPages = this.itemsPerPage < 1
                ? 1
                : Math.ceil(this.totalItems / this.itemsPerPage);
            return Math.max(totalPages || 0, 1);
        };
        return PaginationComponent;
    }());
    PaginationComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'pagination',
                    template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled && !pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\n\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\n\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\n\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\n",
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    PaginationComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: PaginationConfig },
        { type: i0.ChangeDetectorRef }
    ]; };
    PaginationComponent.propDecorators = {
        align: [{ type: i0.Input }],
        maxSize: [{ type: i0.Input }],
        boundaryLinks: [{ type: i0.Input }],
        directionLinks: [{ type: i0.Input }],
        firstText: [{ type: i0.Input }],
        previousText: [{ type: i0.Input }],
        nextText: [{ type: i0.Input }],
        lastText: [{ type: i0.Input }],
        rotate: [{ type: i0.Input }],
        pageBtnClass: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        customPageTemplate: [{ type: i0.Input }],
        customNextTemplate: [{ type: i0.Input }],
        customPreviousTemplate: [{ type: i0.Input }],
        customFirstTemplate: [{ type: i0.Input }],
        customLastTemplate: [{ type: i0.Input }],
        numPages: [{ type: i0.Output }],
        pageChanged: [{ type: i0.Output }],
        itemsPerPage: [{ type: i0.Input }],
        totalItems: [{ type: i0.Input }]
    };

    var PaginationModule = /** @class */ (function () {
        function PaginationModule() {
        }
        PaginationModule.forRoot = function () {
            return { ngModule: PaginationModule, providers: [] };
        };
        return PaginationModule;
    }());
    PaginationModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [PagerComponent, PaginationComponent],
                    exports: [PagerComponent, PaginationComponent]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PagerComponent = PagerComponent;
    exports.PaginationComponent = PaginationComponent;
    exports.PaginationConfig = PaginationConfig;
    exports.PaginationModule = PaginationModule;
    exports.ɵa = PAGER_CONTROL_VALUE_ACCESSOR;
    exports.ɵb = PAGINATION_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-pagination.umd.js.map
