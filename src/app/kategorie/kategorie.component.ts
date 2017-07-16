import { Component, OnInit, OnDestroy, Input  } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import {NavigationServiceService} from '../navigation-service.service';
import {Kategorie} from '../model/Kategorie';

@Component({
  selector: 'app-kategorie',
  templateUrl: './kategorie.component.html',
  styleUrls: ['./kategorie.component.css'],
})
export class KategorieComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    this.kategorieSubscription.unsubscribe();
  }

  private kategorieSubscription : Subscription;

  @Input() public kategorie: Kategorie;

 

  constructor(private navigationService: NavigationServiceService) {
    this.kategorieSubscription = navigationService.selectedKategoryObs.subscribe(
      kategorie => this.kategorieSelected(kategorie)
    );
  }

  ngOnInit() {
  }

  clicked() : void
  {    
    this.navigationService.selectCategory("meine kategorie 2");
  }

  kategorieSelected(kategorie: string){
  }

}
