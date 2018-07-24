import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Navigator} from './model/Navigator';
import {Page} from './model/Page';


@Injectable()
export class NavigatorDataService {

  private url = './assets/navigation.json';  // URL to web api

  private conenturl = './assets/page';


  constructor(private http: HttpClient) { }

  public getIndex(): Promise<Navigator> {
    return this.http.get<Navigator>(this.url)
               .toPromise()
               .catch(this.handleError);
  }

  public getPage(page: number): Promise<Page> {
      const url = this.conenturl + page + '.json';
      return this.http.get<Page>(url)
               .toPromise()
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
