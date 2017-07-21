import { ComponentFactoryResolver } from '@angular/core';

export class PageContext {

    public data: any[] = []; 
    
    public componentFactoryResolver: ComponentFactoryResolver;
    
    public lastDataItem(): any {
        return this.data[this.data.length - 1];
    }
}