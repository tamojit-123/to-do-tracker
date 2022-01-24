import { EventEmitter, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DraggableItem } from './draggable-item';
import { DraggableItemService } from './draggable-item.service';
export declare class SortableComponent implements ControlValueAccessor {
    private static globalZoneIndex;
    /** field name if input array consists of objects */
    fieldName?: string;
    /** class name for items wrapper */
    wrapperClass: string;
    /** style object for items wrapper */
    wrapperStyle: Record<string, string>;
    /** class name for item */
    itemClass: string;
    /** style object for item */
    itemStyle: Record<string, string>;
    /** class name for active item */
    itemActiveClass: string;
    /** style object for active item */
    itemActiveStyle: Record<string, string>;
    /** class name for placeholder */
    placeholderClass: string;
    /** style object for placeholder */
    placeholderStyle: Record<string, string>;
    /** placeholder item which will be shown if collection is empty */
    placeholderItem: string;
    /** used to specify a custom item template. Template variables: item and index; */
    itemTemplate?: TemplateRef<unknown>;
    /** fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
     *  Returns new items collection as a payload.
     */
    onChange: EventEmitter<unknown[]>;
    showPlaceholder: boolean;
    activeItem: number;
    get items(): SortableItem[];
    set items(value: SortableItem[]);
    onTouched: any;
    onChanged: any;
    private transfer;
    private currentZoneIndex;
    private _items;
    constructor(transfer: DraggableItemService);
    onItemDragstart(event: DragEvent, item: SortableItem, i: number): void;
    onItemDragover(event: DragEvent, i: number): void;
    cancelEvent(event?: DragEvent | MouseEvent): void;
    onDrop(item: DraggableItem): void;
    resetActiveItem(event?: DragEvent | MouseEvent): void;
    registerOnChange(callback: () => void): void;
    registerOnTouched(callback: () => void): void;
    writeValue(value: any[]): void;
    updatePlaceholderState(): void;
    getItemStyle(isActive: boolean): Record<string, string>;
    private initDragstartEvent;
}
export declare interface SortableItem {
    id: number;
    value: string;
    initData: any;
}
