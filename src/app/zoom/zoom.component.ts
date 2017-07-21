import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { NavigationServiceService } from '../navigation-service.service';
import { NavigatorDataService  } from '../navigator-data.service';
import {Page} from '../model/Page';
import {ContentHostDirective} from '../content-host.directive';
import {NavigatorContainer} from '../model/NavigatorContainer';
import {PageContext} from '../model/PageContext';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent implements OnInit {

  public  zoom = 50;

  @ViewChild(ContentHostDirective) containerHost: ContentHostDirective;

  constructor(private navigationService: NavigationServiceService, 
              private conentService: NavigatorDataService,  
              private activeRoute: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver) { 

       this.activeRoute.paramMap.subscribe((params: ParamMap)  => {
        let id = params.get("id"); 
        let elementId = params.get("elementid");
        this.handleRouteChanged(+id, +elementId);
      });              
  }

  private handleRouteChanged(id: number, elementId: number)
  {
    if(id > 0)
    {

      this.conentService.getPage(id)
      .then((page: Page) => {this.setPage(page, elementId);});
     }
  }

  ngOnInit() {
  }

  public changeZoom(zoom: number) {
    this.zoom = zoom;
  }


   private setPage(page: Page, elementId: number) : void {
      let container: NavigatorContainer = this.getElementId(page, elementId);
     

      let pageContex = new PageContext(); 
      pageContex.componentFactoryResolver = this.componentFactoryResolver;
      
      pageContex.createControl(container, this.containerHost);
      
   }

   private getElementId(page: Page, elementId: number)  : NavigatorContainer 
   {
    for(let i=0; i<page.containers.length; i++)
    {
      let container = page.containers[i];
      if(container.id == elementId)
      {
        return container;
      }
    }
    return null;
   }

  setStyles() {

    const scale = this.zoom * 1 * 2 / 100;

    const styles = {
      'transform' : 'scale(' + scale + ')',
      'transform-origin' : '0 0',
    };
    return styles;
  }
}
