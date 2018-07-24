import { Component, OnInit } from '@angular/core';
import {NavigatorDataService} from '../navigator-data.service';
import {Kategorie} from '../model/Kategorie';
import {Navigator} from '../model/Navigator';

@Component({
  selector: 'app-kategorien',
  templateUrl: './kategorien.component.html',
  styleUrls: ['./kategorien.component.css']
})
export class KategorienComponent implements OnInit {

  public kategorien: Kategorie[];

  constructor(private navigatorDataService: NavigatorDataService) {
  }

  ngOnInit() {
    this.navigatorDataService.getIndex().then((navigator: Navigator) =>
    this.kategorien = navigator.kategorien);
  }

}
