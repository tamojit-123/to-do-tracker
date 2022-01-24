import { EventEmitter } from '@angular/core';
import { BsDatepickerViewMode, BsNavigationDirection, NavigationViewModel } from '../../models';
export declare class BsDatepickerNavigationViewComponent {
    calendar: NavigationViewModel;
    onNavigate: EventEmitter<BsNavigationDirection>;
    onViewMode: EventEmitter<BsDatepickerViewMode>;
    navTo(down: boolean): void;
    view(viewMode: BsDatepickerViewMode): void;
}
