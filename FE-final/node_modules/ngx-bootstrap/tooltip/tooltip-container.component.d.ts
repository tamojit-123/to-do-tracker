import { AfterViewInit } from '@angular/core';
import { TooltipConfig } from './tooltip.config';
import { IBsVersion } from 'ngx-bootstrap/utils';
export declare class TooltipContainerComponent implements AfterViewInit {
    classMap?: {
        [key: string]: boolean;
    };
    placement?: string;
    containerClass?: string;
    animation?: boolean;
    id?: string;
    get _bsVersions(): IBsVersion;
    constructor(config: TooltipConfig);
    ngAfterViewInit(): void;
}
