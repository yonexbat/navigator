import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Kategorie } from './model/Kategorie';
import { Themenfeld } from './model/Themenfeld';

@Injectable()
export class NavigationService {

  constructor() { }


  public selectedKategoryObs = new Subject<Kategorie>();
  public selectedThemenfeldObs = new Subject<Themenfeld>();
  public generalMessgeObs = new Subject<string>();


  public selectCategory(kategorie: Kategorie) {
    this.selectedKategoryObs.next(kategorie);
  }

  public selectThemenfeld(themenfeld: Themenfeld) {
    this.selectedThemenfeldObs.next(themenfeld);
  }

  public sendMessage(message: string) {
    this.generalMessgeObs.next(message);
  }

}
