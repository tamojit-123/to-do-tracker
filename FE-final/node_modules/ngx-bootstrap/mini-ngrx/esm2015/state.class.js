import { BehaviorSubject, queueScheduler } from 'rxjs';
import { observeOn, scan } from 'rxjs/operators';
export class MiniState extends BehaviorSubject {
    constructor(_initialState, actionsDispatcher$, reducer) {
        super(_initialState);
        const actionInQueue$ = actionsDispatcher$.pipe(observeOn(queueScheduler));
        const state$ = actionInQueue$.pipe(scan((state, action) => {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }, _initialState));
        state$.subscribe((value) => this.next(value));
    }
}
//# sourceMappingURL=state.class.js.map