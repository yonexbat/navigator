import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { NavigationServiceService } from '../navigation-service.service';
import { NavigatorDataService  } from '../navigator-data.service';
import {Kategorie} from '../model/Kategorie';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscription: Subscription;

  public contentHtml: string = "my cont";

  private counter: number = 1;

  constructor(private navigationService: NavigationServiceService, 
    private conentService: NavigatorDataService) { 
    this.subscription = navigationService.selectedKategoryObs
      .subscribe((kategorie : Kategorie) => this.kategorieChanged(kategorie));
  }

  ngOnInit() {
  }



  private kategorieChanged(kategorie: Kategorie)
  {
    
    this.conentService.getConent(this.counter)
    .then((htmlString : string) => {this.setContent(htmlString);})
   
    this.counter++;
    if(this.counter >= 3)
    {
      this.counter = 1;    
    }
  }

  private  setContent(htmlString: string) : void
  {
      this.contentHtml = htmlString;
  }

}
