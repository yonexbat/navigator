import { Component, OnInit,OnDestroy,  ComponentFactoryResolver, ViewChild } from '@angular/core';

import {IInitializePage} from '../model/IInitializePage';
import {PageContext} from '../model/PageContext';
import {NavigatorContainer} from '../model/NavigatorContainer';
import {Boxes} from '../model/Boxes';
import {ContentHostDirective} from '../content-host.directive';
import {BoxesComponent} from '../boxes/boxes.component';
import {TableComponent} from '../table/table.component';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, IInitializePage {

  title: string;
  pageContext: PageContext;
  

  @ViewChild(ContentHostDirective) containerHost: ContentHostDirective;

  initializePage(pageContext: PageContext) {

    this.pageContext = pageContext;
    const container: NavigatorContainer = <NavigatorContainer>pageContext.lastDataItem();     
    this.title = container.title;

    const controltype = container.controltype;

    switch (controltype) {
      case 'boxes':
        this.initBoxes(container.controldata);
        break;
      case 'table':
        this.initTable(container.controldata);
        break;
    }

  }



  constructor() { }

  ngOnInit() {
  }

  private initBoxes(controldata: any) {
      const boxes: Boxes = <Boxes> controldata;
      this.pageContext.data.push(boxes);
      const elementFactory = this.pageContext.componentFactoryResolver.resolveComponentFactory(BoxesComponent);


      const viewContainerRef = this.containerHost.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(elementFactory); 
      (<IInitializePage>componentRef.instance).initializePage(this.pageContext);
      this.pageContext.data.pop();

  }

  private initTable(controldata: any)  {

      this.pageContext.data.push(controldata);
      const elementFactory = this.pageContext.componentFactoryResolver.resolveComponentFactory(TableComponent);

      const viewContainerRef = this.containerHost.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(elementFactory); 
      (<IInitializePage>componentRef.instance).initializePage(this.pageContext);
      this.pageContext.data.pop();
  }

}
