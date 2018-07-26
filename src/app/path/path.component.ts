import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';
import {Kategorie} from '../model/Kategorie';
import {Themenfeld} from '../model/Themenfeld';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit, OnDestroy {



  private subscriptions: Subscription[] = [];

  public kategorieName = 'Keine Kathegorie gewählt';
  public themenfeldName: string;
  public online = 'online';
  public message: string;

  constructor(navigationService: NavigationService) {
      let subscription;
      subscription = navigationService.selectedKategoryObs
      .subscribe((kategorie: Kategorie) => this.kategorieChanged(kategorie));
      this.subscriptions.push(subscription);

      subscription = navigationService.selectedThemenfeldObs
        .subscribe((themenfeld) => {
          this.themenfeldChanged(themenfeld);
        });
      this.subscriptions.push(subscription);

      subscription = navigationService.onlineObs.subscribe((status: boolean) => {
        this.onlineOffline(status);
      });
      this.subscriptions.push(subscription);

      subscription = navigationService.generalMessgeObs.subscribe((message: string) => {
        this.messageIncoming(message);
      });
      this.subscriptions.push(subscription);

      this.onlineOffline(navigationService.isOnline());
  }

  private kategorieChanged(kategorie: Kategorie) {
    this.kategorieName = kategorie.name;
  }

  private themenfeldChanged(themenfeld: Themenfeld) {
    this.themenfeldName = themenfeld.name;
  }

  private onlineOffline(status: boolean) {
    this.online = status ? 'online' : 'offline';
  }

  private messageIncoming(message: string) {
    this.message = message;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
