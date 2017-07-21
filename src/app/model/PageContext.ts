import { ComponentFactoryResolver } from '@angular/core';
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
                this.initBoxes(navigationContainer.controldata, hostDirecive);
                break;
            case 'table':
                this.initTable(navigationContainer.controldata, hostDirecive);
                break;
        }            
    }

    private initBoxes(controldata: any, hostDirecive: ContentHostDirective) {
      const boxes: Boxes = <Boxes> controldata;
      this.data.push(boxes);
      const elementFactory = this.componentFactoryResolver.resolveComponentFactory(BoxesComponent);


      const viewContainerRef = hostDirecive.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(elementFactory); 
      (<IInitializePage>componentRef.instance).initializePage(this);
      this.data.pop();

  }

  private initTable(controldata: any, hostDirecive: ContentHostDirective)  {

      this.data.push(controldata);
      const elementFactory = this.componentFactoryResolver.resolveComponentFactory(TableComponent);

      const viewContainerRef = hostDirecive.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(elementFactory); 
      (<IInitializePage>componentRef.instance).initializePage(this);
      this.data.pop();
  }
}