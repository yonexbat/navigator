import { TestBed, inject } from '@angular/core/testing';

import { DownloaderService } from './downloader.service';
import { NavigationService } from './navigation.service';
import { NavigatorDataService } from './navigator-data.service';

describe('DownloaderService', () => {


  beforeEach(() => {
    const navigationDataserviceSpy = {};
    const navigationServiceSpy = {};

    TestBed.configureTestingModule({
      providers: [
        DownloaderService,
        {provide: NavigationService, useValue: navigationServiceSpy},
        {provide: NavigatorDataService, useValue: navigationDataserviceSpy},
      ]
    });
  });

  it('should be created', inject([DownloaderService], (service: DownloaderService) => {
    expect(service).toBeTruthy();
  }));
});
