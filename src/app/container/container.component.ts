import { Component, OnInit } from '@angular/core';

import {IInitializePage} from '../model/IInitializePage';
import {PageContext} from '../model/PageContext';
import {Container} from '../model/Container';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, IInitializePage {

  title: string;
  

  initializePage(pageContext: PageContext) {
    let container : Container = <Container>pageContext.lastDataItem();     
    this.title = container.title;
  }

  constructor() { }

  ngOnInit() {
  }

}
