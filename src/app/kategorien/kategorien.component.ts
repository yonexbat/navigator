import { Component, OnInit, OnDestroy } from '@angular/core';
import {NavigatorDataService} from '../navigator-data.service';
import {NavigationService} from '../navigation.service';
import {Kategorie} from '../model/Kategorie';
import {Navigator} from '../model/Navigator';
import {Subscription} from 'rxjs';
import {DownloaderService} from '../downloader.service';

@Component({
  selector: 'app-kategorien',
  templateUrl: './kategorien.component.html',
  styleUrls: ['./kategorien.component.css']
})
export class KategorienComponent implements OnInit, OnDestroy {

  public kategorien: Kategorie[];
  private subscription: Subscription;

  constructor(private navigatorDataService: NavigatorDataService,
    private navigationService: NavigationService,
    private downloaderService: DownloaderService) {
    this.subscription = navigationService.reloadObs.subscribe(() => this.reload());
  }

  ngOnInit() {
    this.navigationService.reload();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private async reload() {
    const navigator: Navigator = await this.navigatorDataService.getIndex();
    this.kategorien = navigator.kategorien;
    this.downloaderService.downloadAllPages();
  }

}
