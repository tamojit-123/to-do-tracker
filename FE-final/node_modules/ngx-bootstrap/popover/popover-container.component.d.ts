import { PopoverConfig } from './popover.config';
import { IBsVersion } from 'ngx-bootstrap/utils';
import { AvailbleBSPositions } from 'ngx-bootstrap/positioning';
export declare class PopoverContainerComponent {
    set placement(value: AvailbleBSPositions);
    title?: string;
    containerClass?: string;
    popoverId?: string;
    _placement: string;
    get _bsVersions(): IBsVersion;
    constructor(config: PopoverConfig);
    checkMarginNecessity(): string;
}
