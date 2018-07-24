import { Component, OnInit, OnDestroy, Input  } from '@angular/core';
import { Subscription } from 'rxjs';

import {NavigationServiceService} from '../navigation-service.service';
import {Kategorie} from '../model/Kategorie';

@Component({
  selector: 'app-kategorie',
  templateUrl: './kategorie.component.html',
  styleUrls: ['./kategorie.component.css'],
})
export class KategorieComponent implements OnInit, OnDestroy {

  private kategorieSubscription: Subscription;

  @Input() public kategorie: Kategorie;

  ngOnDestroy(): void {
    this.kategorieSubscription.unsubscribe();
  }

  constructor(private navigationService: NavigationServiceService) {
    this.kategorieSubscription = navigationService.selectedKategoryObs.subscribe(
      kategorie => this.kategorieSelected(kategorie)
    );
  }

  ngOnInit() {
  }

  clicked(): void {
    this.navigationService.selectCategory(this.kategorie);
  }

  kategorieSelected(kategorie: Kategorie) {
  }

}
