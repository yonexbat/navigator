import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Navigator} from './model/Navigator';
import {Page} from './model/Page';


@Injectable()
export class NavigatorDataService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = './assets/navigation.json';  // URL to web api

  private conenturl = './assets/page';


  constructor(private http: Http) { }

  public getIndex(): Promise<Navigator> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => {
                 let navigator = response.json() as Navigator;
                 return navigator;
                })
               .catch(this.handleError);
  }

  public getConent(page: number) : Promise<string> {
    let url = this.conenturl + page + ".html";
    return this.http.get(url)
        .toPromise()
        .then(response => response.text())
        .catch(this.handleError);
  }

  public getPage(page: number) : Promise<Page> {
     let url = this.conenturl + page + ".json";
      return this.http.get(url)
               .toPromise()
               .then(response => {
                 let page = response.json() as Page;
                 return page;
                })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    debugger;
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
