import { ComponentFactoryResolver, Type } from '@angular/core';
import {NavigatorContainer} from './NavigatorContainer';
import {ContentHostDirective} from '../content-host.directive';
import {IInitializePage} from './IInitializePage';
import {BoxesComponent} from '../boxes/boxes.component';
import {TableComponent} from '../table/table.component';
import { TextViewComponent } from '../text-view/text-view.component';



export class PageContext {

    public data: any[] = [];
    public componentFactoryResolver: ComponentFactoryResolver;
    public elementId: number;
    public pageId: number;

    public lastDataItem(): any {
        return this.data[this.data.length - 1];
    }

    public createControl(navigationContainer: NavigatorContainer, hostDirecive: ContentHostDirective) {
        this.elementId = navigationContainer.id;
        const controltype = navigationContainer.controltype;
          switch (controltype) {
            case 'boxes':
                this.initializeControl(navigationContainer.controldata, hostDirecive, BoxesComponent);
                break;
            case 'table':
                this.initializeControl(navigationContainer.controldata, hostDirecive, TableComponent);
                break;
            case 'text':
                this.initializeControl(navigationContainer.controldata, hostDirecive, TextViewComponent);
                break;
        }
    }

    private initializeControl(controldata: any, hostDirecive: ContentHostDirective, type:  any) {
         const elementFactory = this.componentFactoryResolver.resolveComponentFactory(type);

        this.data.push(controldata);
        const viewContainerRef = hostDirecive.viewContainerRef;

         // Remove all controls
         viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(elementFactory);

        // initialize the created control
        (<IInitializePage>componentRef.instance).initializePage(this);

         this.data.pop();

    }
}
