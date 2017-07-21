import { Component, OnInit } from '@angular/core';

import {IInitializePage} from '../model/IInitializePage';
import {PageContext} from '../model/PageContext';
import {Table} from '../model/Table';
import {TableColumn} from '../model/TableColumn';
import {TableRow} from '../model/TableRow';
import {TableCell} from '../model/TableCell';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, IInitializePage {

  public columns: TableColumn[];
  public rows: TableRow[];

  initializePage(pageContext: PageContext) {
    const table = <Table> pageContext.lastDataItem();
    this.columns = table.columns;
    this.rows = table.rows;
  }

  constructor() { }

  ngOnInit() {
  }

}
