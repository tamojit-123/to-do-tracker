import { animate, style } from '@angular/animations';
export const COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
export const expandAnimation = [
    style({ height: 0, visibility: 'hidden' }),
    animate(COLLAPSE_ANIMATION_TIMING, style({ height: '*', visibility: 'visible' }))
];
export const collapseAnimation = [
    style({ height: '*', visibility: 'visible' }),
    animate(COLLAPSE_ANIMATION_TIMING, style({ height: 0, visibility: 'hidden' }))
];
//# sourceMappingURL=collapse-animations.js.map