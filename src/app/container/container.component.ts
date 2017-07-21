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
  pageId: number = 1;
  elementId: number = 101;
  pageContext: PageContext;
  

  @ViewChild(ContentHostDirective) containerHost: ContentHostDirective;

  initializePage(pageContext: PageContext) {

    this.pageContext = pageContext;
    
    const container: NavigatorContainer = <NavigatorContainer>pageContext.lastDataItem(); 
    this.pageContext.elementId = container.id;    
    this.title = container.title;
    this.pageId = pageContext.pageId;
    this.elementId = pageContext.elementId;
    pageContext.createControl(container, this.containerHost);

  }


  constructor() { }

  ngOnInit() {
  }


}
