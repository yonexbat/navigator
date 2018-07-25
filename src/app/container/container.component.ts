import { Component, OnInit, OnDestroy,  ComponentFactoryResolver, ViewChild } from '@angular/core';

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
  pageId  = 1;
  elementId = 101;
  pageContext: PageContext;


  @ViewChild(ContentHostDirective) containerHost: ContentHostDirective;

  initializePage(pageContext: PageContext) {

    this.pageContext = pageContext;

    const containerData: NavigatorContainer = <NavigatorContainer>pageContext.lastDataItem();
    this.pageContext.elementId = containerData.id;
    this.title = containerData.title;
    this.pageId = pageContext.pageId;
    this.elementId = pageContext.elementId;
    pageContext.createControl(containerData, this.containerHost);

  }


  constructor() { }

  ngOnInit() {
  }


}
