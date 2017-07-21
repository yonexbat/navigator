import { ComponentFactoryResolver, Type } from '@angular/core';
import {NavigatorContainer} from '../model/NavigatorContainer';
import {Boxes} from '../model/Boxes';
import {Page} from '../model/Page';
import {ContentHostDirective} from '../content-host.directive';
import {IInitializePage} from '../model/IInitializePage';
import {BoxesComponent} from '../boxes/boxes.component';
import {TableComponent} from '../table/table.component';



export class PageContext {

    public data: any[] = []; 
    
    public componentFactoryResolver: ComponentFactoryResolver;
    
    public lastDataItem(): any {
        return this.data[this.data.length - 1];
    }    

    public elementId: number;

    public pageId: number;

    public createControl(navigationContainer: NavigatorContainer, hostDirecive: ContentHostDirective)
    {
        this.elementId = navigationContainer.id;
        const controltype = navigationContainer.controltype;
          switch (controltype) {
            case 'boxes':
                this.initializeControl(navigationContainer.controldata, hostDirecive, BoxesComponent);
                break;
            case 'table':
                this.initializeControl(navigationContainer.controldata, hostDirecive, TableComponent);
                break;
        }            
    }

    private initializeControl(controldata: any, hostDirecive: ContentHostDirective, type:  any)
    {
         const elementFactory = this.componentFactoryResolver.resolveComponentFactory(type); 
         this.data.push(controldata); 

         const viewContainerRef = hostDirecive.viewContainerRef;
         viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(elementFactory); 
        (<IInitializePage>componentRef.instance).initializePage(this);

         this.data.pop();

    }
}