import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Kategorie } from './model/Kategorie';

@Injectable()
export class NavigationServiceService {

  constructor() { }

  private selectedKategorieSub = new Subject<Kategorie>();

  public selectedKategoryObs = this.selectedKategorieSub.asObservable();

  public selectCategory(kategorie: Kategorie) {
    this.selectedKategorieSub.next(kategorie);
  }
  
}
