import { Injectable, ElementRef, RendererFactory2, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { positionElements } from './ng-positioning';
import { fromEvent, merge, of, animationFrameScheduler, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class PositioningService {
    constructor(ngZone, rendererFactory, platformId) {
        this.update$$ = new Subject();
        this.positionElements = new Map();
        this.isDisabled = false;
        if (isPlatformBrowser(platformId)) {
            ngZone.runOutsideAngular(() => {
                this.triggerEvent$ = merge(fromEvent(window, 'scroll', { passive: true }), fromEvent(window, 'resize', { passive: true }), of(0, animationFrameScheduler), this.update$$);
                this.triggerEvent$.subscribe(() => {
                    if (this.isDisabled) {
                        return;
                    }
                    this.positionElements
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .forEach((positionElement) => {
                        positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, this.options, rendererFactory.createRenderer(null, null));
                    });
                });
            });
        }
    }
    position(options) {
        this.addPositionElement(options);
    }
    get event$() {
        return this.triggerEvent$;
    }
    disable() {
        this.isDisabled = true;
    }
    enable() {
        this.isDisabled = false;
    }
    addPositionElement(options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    }
    calcPosition() {
        this.update$$.next();
    }
    deletePositionElement(elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    }
    setOptions(options) {
        this.options = options;
    }
}
PositioningService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PositioningService_Factory() { return new PositioningService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: PositioningService, providedIn: "root" });
PositioningService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
PositioningService.ctorParameters = () => [
    { type: NgZone },
    { type: RendererFactory2 },
    { type: Number, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof ElementRef) {
        return element.nativeElement;
    }
    return element !== null && element !== void 0 ? element : null;
}
//# sourceMappingURL=positioning.service.js.map