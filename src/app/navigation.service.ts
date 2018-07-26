import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Kategorie } from './model/Kategorie';
import { Themenfeld } from './model/Themenfeld';

@Injectable()
export class NavigationService {

  constructor() {
    this.registerOnlineOfflineListeners();
  }


  public selectedKategoryObs = new Subject<Kategorie>();
  public selectedThemenfeldObs = new Subject<Themenfeld>();
  public generalMessgeObs = new Subject<string>();
  public onlineObs = new Subject<boolean>();
  public reloadObs = new Subject<void>();

  private registerOnlineOfflineListeners() {
    window.addEventListener('online', () => {
      this.onlineObs.next(true);
    });
    window.addEventListener('offline', () => {
      this.onlineObs.next(false);
    });
  }

  public selectCategory(kategorie: Kategorie) {
    this.selectedKategoryObs.next(kategorie);
  }

  public selectThemenfeld(themenfeld: Themenfeld) {
    this.selectedThemenfeldObs.next(themenfeld);
  }

  public sendMessage(message: string) {
    this.generalMessgeObs.next(message);
  }

  public reload() {
    this.reloadObs.next();
  }

  public isOnline(): boolean {
    return window.navigator.onLine;
  }

}
