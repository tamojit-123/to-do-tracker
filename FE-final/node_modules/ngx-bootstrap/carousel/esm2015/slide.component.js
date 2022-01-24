import { Component, HostBinding, Input } from '@angular/core';
import { CarouselComponent } from './carousel.component';
export class SlideComponent {
    constructor(carousel) {
        /** Is current slide active */
        this.active = false;
        this.itemWidth = '100%';
        this.order = 0;
        this.isAnimated = false;
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    ngOnInit() {
        this.carousel.addSlide(this);
        this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
    }
    /** Fires changes in container collection after removing of this slide instance */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.decorators = [
    { type: Component, args: [{
                selector: 'slide',
                template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[attr.aria-hidden]': '!active'
                },
                styles: [`
    :host.carousel-animation {
       transition: opacity 0.6s ease, visibility 0.6s ease;
       float: left;
    }
    :host.carousel-animation.active {
      opacity: 1;
      visibility: visible;
    }
    :host.carousel-animation:not(.active) {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }
    :host.carousel-item {
      margin-right: auto;
    }
  `]
            },] }
];
SlideComponent.ctorParameters = () => [
    { type: CarouselComponent }
];
SlideComponent.propDecorators = {
    active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
    itemWidth: [{ type: HostBinding, args: ['style.width',] }],
    order: [{ type: HostBinding, args: ['style.order',] }],
    isAnimated: [{ type: HostBinding, args: ['class.carousel-animation',] }],
    addClass: [{ type: HostBinding, args: ['class.item',] }, { type: HostBinding, args: ['class.carousel-item',] }]
};
//# sourceMappingURL=slide.component.js.map