import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import {trigger, state, style, animate, transition} from '@angular/animations';

import { NavigationService } from '../navigation.service';
import {Kategorie} from '../model/Kategorie';
import {Themenfeld} from '../model/Themenfeld';


@Component({
  selector: 'app-themenfelder',
  templateUrl: './themenfelder.component.html',
  styleUrls: ['./themenfelder.component.css'],
  animations: [
    trigger('themenfeldTrigger', [
      state('inactive', style({
        backgroundColor: '#eee',
        width: '0px',
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
         width: '300px',
      })),
    transition('inactive => active', animate('1000ms ease-in')),
    transition('active => inactive', animate('1000ms ease-out'))
  ])
  ]
})
export class ThemenfelderComponent implements OnInit, OnDestroy {
  private subscriptionKategorie: Subscription;

  private subscriptionThemenfeld: Subscription;

  state = 'inactive';

  themenfelder: Subject<Themenfeld[]> = new Subject<Themenfeld[]>();

  ngOnDestroy(): void {
    if (this.subscriptionKategorie) {
      this.subscriptionKategorie.unsubscribe();
    }
    if (this.subscriptionThemenfeld) {
      this.subscriptionThemenfeld.unsubscribe();
    }
  }

  constructor(navigationService: NavigationService) {

    this.subscriptionKategorie = navigationService.selectedKategoryObs
      .subscribe((kategorie: Kategorie) => this.kategorieChanged(kategorie));

    this.subscriptionThemenfeld = navigationService.selectedThemenfeldObs
      .subscribe((themenfeld: Themenfeld) => this.themenfeldChanged(themenfeld));
  }

  private kategorieChanged(kategorie: Kategorie) {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    this.themenfelder.next(kategorie.themenfelder);
  }

  private themenfeldChanged(themenfeld: Themenfeld) {
    this.state = 'inactive';
  }

  ngOnInit() {
  }

}
