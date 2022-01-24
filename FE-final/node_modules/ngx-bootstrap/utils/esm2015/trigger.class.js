/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
export class Trigger {
    constructor(open, close) {
        this.open = open;
        this.close = close || open;
    }
    isManual() {
        return this.open === 'manual' || this.close === 'manual';
    }
}
//# sourceMappingURL=trigger.class.js.map