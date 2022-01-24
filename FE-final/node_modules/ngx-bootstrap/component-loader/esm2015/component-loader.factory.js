import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, NgZone } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from 'ngx-bootstrap/positioning';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/positioning";
export class ComponentLoaderFactory {
    constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     */
    createLoader(_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    }
}
ComponentLoaderFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentLoaderFactory_Factory() { return new ComponentLoaderFactory(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.PositioningService), i0.ɵɵinject(i0.ApplicationRef)); }, token: ComponentLoaderFactory, providedIn: "root" });
ComponentLoaderFactory.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ComponentLoaderFactory.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: NgZone },
    { type: Injector },
    { type: PositioningService },
    { type: ApplicationRef }
];
//# sourceMappingURL=component-loader.factory.js.map