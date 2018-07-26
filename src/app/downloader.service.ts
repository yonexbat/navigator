import { Injectable } from '@angular/core';
import { NavigatorDataService } from './navigator-data.service';
import { NavigationService } from './navigation.service';
import { Navigator } from './model/Navigator';
import { Kategorie } from './model/Kategorie';
import { Themenfeld} from './model/Themenfeld';
import { Page } from './model/Page';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloaderService {

  constructor(private navigatorDataService: NavigatorDataService, private navigationService: NavigationService) {
  }

  public async downloadAllPages() {
    this.navigationService.sendMessage('Lade index herunter');
    const navigatorIndex: Navigator = await this.navigatorDataService.getIndex();
    const pages: number[] = this.flatMap(navigatorIndex);
    pages.forEach(async pageId => {
      try {
        this.navigationService.sendMessage(`Error beim Download ${pageId}`);
        await this.navigatorDataService.getPage(pageId);
      } catch (error) {
        this.navigationService.sendMessage('Error beim Download');
      }
    });
    this.navigationService.sendMessage('done');
  }

  public flatMap(navigatorIndex: Navigator) {
    const pages: number[] = [];
    if (navigatorIndex) {
      navigatorIndex.kategorien.forEach((kategore: Kategorie) => {
        kategore.themenfelder.forEach((themenfeld: Themenfeld) => {
          pages.push(themenfeld.id);
        });
      });
    }
    return pages;
  }
}

