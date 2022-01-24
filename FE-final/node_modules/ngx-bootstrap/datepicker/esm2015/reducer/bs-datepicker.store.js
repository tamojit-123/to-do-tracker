import { Injectable } from '@angular/core';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import { initialDatepickerState } from './bs-datepicker.state';
import { BehaviorSubject } from 'rxjs';
import { bsDatepickerReducer } from './bs-datepicker.reducer';
export class BsDatepickerStore extends MiniStore {
    constructor() {
        const _dispatcher = new BehaviorSubject({
            type: '[datepicker] dispatcher init'
        });
        const state = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
        super(_dispatcher, bsDatepickerReducer, state);
    }
}
BsDatepickerStore.decorators = [
    { type: Injectable }
];
BsDatepickerStore.ctorParameters = () => [];
//# sourceMappingURL=bs-datepicker.store.js.map