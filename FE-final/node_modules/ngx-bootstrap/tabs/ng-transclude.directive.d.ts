import { TemplateRef, ViewContainerRef } from '@angular/core';
export declare class NgTranscludeDirective {
    viewRef: ViewContainerRef;
    protected _ngTransclude?: TemplateRef<any>;
    set ngTransclude(templateRef: TemplateRef<any> | undefined);
    get ngTransclude(): TemplateRef<any> | undefined;
    constructor(viewRef: ViewContainerRef);
}
