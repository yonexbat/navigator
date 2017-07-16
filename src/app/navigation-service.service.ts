import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Kategorie } from './model/Kategorie';
import {Themenfeld} from './model/Themenfeld'

@Injectable()
export class NavigationServiceService {

  constructor() { }

  private selectedKategorieSub = new Subject<Kategorie>();

  public selectedKategoryObs = this.selectedKategorieSub.asObservable();

  private selectThemenfeldSub = new Subject<Themenfeld>();

  public selectedThemenfeldBs = this.selectThemenfeldSub.asObservable();

  public selectCategory(kategorie: Kategorie) {
    this.selectedKategorieSub.next(kategorie);
  }

  public selectThemenfeld(themenfeld: Themenfeld)
  {
    this.selectThemenfeldSub.next(themenfeld);
  }
  
}
