import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { getBsVer } from 'ngx-bootstrap/utils';
import { PlacementForBs5, checkMargins } from 'ngx-bootstrap/positioning';
export class PopoverContainerComponent {
    constructor(config) {
        this._placement = 'top';
        Object.assign(this, config);
    }
    set placement(value) {
        if (!this._bsVersions.isBs5) {
            this._placement = value;
        }
        else {
            this._placement = PlacementForBs5[value];
        }
    }
    ;
    get _bsVersions() {
        return getBsVer();
    }
    checkMarginNecessity() {
        return checkMargins(this._placement);
    }
}
PopoverContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'popover-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[attr.id]': 'popoverId',
                    '[class]': '"popover in popover-" + _placement + " " + "bs-popover-" + _placement + " " + _placement + " " + containerClass + checkMarginNecessity()',
                    '[class.show]': '!_bsVersions.isBs3',
                    '[class.bs3]': '_bsVersions.isBs3',
                    role: 'tooltip',
                    style: 'display:block;'
                },
                template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [`
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `]
            },] }
];
PopoverContainerComponent.ctorParameters = () => [
    { type: PopoverConfig }
];
PopoverContainerComponent.propDecorators = {
    placement: [{ type: Input }],
    title: [{ type: Input }]
};
//# sourceMappingURL=popover-container.component.js.map