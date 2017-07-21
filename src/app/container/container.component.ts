import { Component, OnInit,OnDestroy,  ComponentFactoryResolver, ViewChild } from '@angular/core';

import {IInitializePage} from '../model/IInitializePage';
import {PageContext} from '../model/PageContext';
import {NavigatorContainer} from '../model/NavigatorContainer';
import {Boxes} from '../model/Boxes';
import {ContentHostDirective} from '../content-host.directive';
import {BoxesComponent} from '../boxes/boxes.component';


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
    let container : NavigatorContainer = <NavigatorContainer>pageContext.lastDataItem();     
    this.title = container.title;

    let controltype = container.controltype;
    switch(controltype)
    {
      case "boxes":
        this.initBoxes(container.controldata);
        break;  
    }
 
  }



  constructor() { }

  ngOnInit() {
  }

  private initBoxes(controldata: any) 
  {
      let boxes: Boxes = <Boxes> controldata;
      this.pageContext.data.push(boxes);
      let elementFactory = this.pageContext.componentFactoryResolver.resolveComponentFactory(BoxesComponent);


      let viewContainerRef = this.containerHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(elementFactory); 
      (<IInitializePage>componentRef.instance).initializePage(this.pageContext);
      this.pageContext.data.pop();

  }

}
