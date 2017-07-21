import { Component, OnInit } from '@angular/core';

import {IInitializePage} from '../model/IInitializePage';
import {Boxes} from '../model/Boxes';
import {Box} from '../model/Box';
import {PageContext} from '../model/PageContext';


@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit, IInitializePage {

  public boxes: Box[];
  
  initializePage(pageContext: PageContext) {
    debugger;
    let boxes = <Boxes>pageContext.lastDataItem();  
    this.boxes = boxes.boxes;
  }

  constructor() { }

  ngOnInit() {
  }

}
