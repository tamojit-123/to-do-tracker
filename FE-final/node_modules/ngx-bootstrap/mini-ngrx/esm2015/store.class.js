/**
 * @copyright ngrx
 */
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
export class MiniStore extends Observable {
    constructor(_dispatcher, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _reducer, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    state$) {
        super();
        this._dispatcher = _dispatcher;
        this._reducer = _reducer;
        this.source = state$;
    }
    select(pathOrMapFn) {
        const mapped$ = this.source.pipe(map(pathOrMapFn));
        return mapped$.pipe(distinctUntilChanged());
    }
    lift(operator) {
        const store = new MiniStore(this._dispatcher, this._reducer, this);
        store.operator = operator;
        return store;
    }
    dispatch(action) {
        this._dispatcher.next(action);
    }
    next(action) {
        this._dispatcher.next(action);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error(err) {
        this._dispatcher.error(err);
    }
    complete() {
        /*noop*/
    }
}
//# sourceMappingURL=store.class.js.map