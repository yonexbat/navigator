import { Component, OnInit, OnDestroy,  ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { NavigationServiceService } from '../navigation-service.service';
import { NavigatorDataService  } from '../navigator-data.service';
import {Kategorie} from '../model/Kategorie';
import {Themenfeld} from '../model/Themenfeld';
import {Page} from '../model/Page';
import {ContentHostDirective} from '../content-host.directive';
import {ContainerComponent} from '../container/container.component';
import {PageContext} from '../model/PageContext';
import {IInitializePage} from '../model/IInitializePage';

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

  private counter: number = 1;

  @ViewChild(ContentHostDirective) containerHost: ContentHostDirective;

  constructor(private navigationService: NavigationServiceService, 
              private conentService: NavigatorDataService,  
              private activeRoute: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver) { 

      this.subscriptionKategorie = navigationService.selectedKategoryObs
      .subscribe((kategorie : Kategorie) => this.kategorieChanged(kategorie));

      this.subscriptionKategorie = navigationService.selectedThemenfeldBs
        .subscribe((themenfeld) => {this.themenfeldChanged(themenfeld)});

      this.activeRoute.paramMap.subscribe((params: ParamMap)  => {
        let id = params.get("id"); 
        this.handleRouteChanged(+id);
      }
    )
  }

  ngOnInit() {
  }

  private handleRouteChanged(id: number)
  {
    if(id > 0)
    {

      this.conentService.getPage(id)
      .then((page: Page) => {this.setPage(page);});
     }
  }


  private kategorieChanged(kategorie: Kategorie)
  {
        
  }

  private themenfeldChanged(themenfeld: Themenfeld)
  {
   
  }



  private setPage(page: Page) : void {

    let containerFactory = this.componentFactoryResolver.resolveComponentFactory(ContainerComponent);

    let viewContainerRef = this.containerHost.viewContainerRef;
    viewContainerRef.clear();

    let pageContex = new PageContext(); 
    pageContex.data.push(page);   

    page.containers.forEach(element => {
      
      let componentRef = viewContainerRef.createComponent(containerFactory);  
      pageContex.data.push(element);
      (<IInitializePage>componentRef.instance).initializePage(pageContex);
      pageContex.data.pop();
    });      
    
  }



}
