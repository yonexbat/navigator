import { Component, OnInit } from '@angular/core';

import {Text} from '../model/Text';
import {IInitializePage} from '../model/IInitializePage';
import {PageContext} from '../model/PageContext';

@Component({
  selector: 'app-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.css']
})
export class TextViewComponent implements OnInit, IInitializePage {

  public text = '';

  constructor() { }

  ngOnInit() {
  }

  initializePage(pageContext: PageContext) {
    const text = <Text> pageContext.lastDataItem();
    this.text = text.text;
  }
}
