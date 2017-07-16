import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NavigationServiceService {

  constructor() { }

  private selectedKategorieSub = new Subject<string>();

  public selectedKategoryObs = this.selectedKategorieSub.asObservable();

  public selectCategory(category: string) {
    this.selectedKategorieSub.next(category);
  }
  
}
