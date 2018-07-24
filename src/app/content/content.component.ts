import { Component, OnInit, OnDestroy,  ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from 'rxjs';

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

  private subscriptionKategorie: Subscription;

  private subscriptionThemenfeld: Subscription;

  private counter = 1;

  @ViewChild(ContentHostDirective) containerHost: ContentHostDirective;

  ngOnDestroy(): void {
    if (this.subscriptionKategorie != null) {
      this.subscriptionKategorie.unsubscribe();
    }
    if (this.subscriptionThemenfeld != null) {
      this.subscriptionThemenfeld.unsubscribe();
    }
  }

  constructor(private navigationService: NavigationServiceService,
              private conentService: NavigatorDataService,
              private activeRoute: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver) {

      this.subscriptionKategorie = navigationService.selectedKategoryObs
      .subscribe((kategorie: Kategorie) => this.kategorieChanged(kategorie));

      this.subscriptionKategorie = navigationService.selectedThemenfeldBs
        .subscribe((themenfeld: Themenfeld) => {this.themenfeldChanged(themenfeld)});

      this.activeRoute.paramMap.subscribe((params: ParamMap)  => {
        const id = params.get('id');
        this.handleRouteChanged(+id);
      }
    );
  }

  ngOnInit() {
  }

  private handleRouteChanged(id: number) {
    if (id > 0) {

      this.conentService.getPage(id)
      .then((page: Page) => {this.setPage(page); });
     }
  }


  private kategorieChanged(kategorie: Kategorie) {
  }

  private themenfeldChanged(themenfeld: Themenfeld) {

  }



  private setPage(page: Page): void {

    const containerFactory = this.componentFactoryResolver.resolveComponentFactory(ContainerComponent);

    const viewContainerRef = this.containerHost.viewContainerRef;
    viewContainerRef.clear();

    const pageContex = new PageContext();
    pageContex.componentFactoryResolver = this.componentFactoryResolver;
    pageContex.pageId = page.pageId;
    pageContex.data.push(page);

    page.containers.forEach(element => {

      const componentRef = viewContainerRef.createComponent(containerFactory);
      pageContex.data.push(element);
      (<IInitializePage>componentRef.instance).initializePage(pageContex);
      pageContex.data.pop();
    });
  }



}
