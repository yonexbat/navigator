import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { NavigationServiceService } from '../navigation-service.service';
import { NavigatorDataService  } from '../navigator-data.service';
import {Kategorie} from '../model/Kategorie';
import {Themenfeld} from '../model/Themenfeld';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    this.subscriptionKategorie.unsubscribe();
    this.subscriptionThemenfeld.unsubscribe();
  }

  private subscriptionKategorie: Subscription;

  private subscriptionThemenfeld: Subscription;

  public contentHtml: string = "my cont";

  private counter: number = 1;

  constructor(private navigationService: NavigationServiceService, 
    private conentService: NavigatorDataService) { 
    this.subscriptionKategorie = navigationService.selectedKategoryObs
      .subscribe((kategorie : Kategorie) => this.kategorieChanged(kategorie));

      this.subscriptionKategorie = navigationService.selectedThemenfeldBs
        .subscribe((themenfeld) => {this.themenfeldChanged(themenfeld)});
  }

  ngOnInit() {
  }



  private kategorieChanged(kategorie: Kategorie)
  {
        
  }

  private themenfeldChanged(themenfeld: Themenfeld)
  {
       this.conentService.getConent(themenfeld.id)
    .then((htmlString : string) => {this.setContent(htmlString);})
  }

  private  setContent(htmlString: string) : void
  {
      this.contentHtml = htmlString;
  }

}
