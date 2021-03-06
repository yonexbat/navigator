import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { KategorienComponent } from './kategorien.component';
import { KategorieComponent } from '../kategorie/kategorie.component';
import { NavigationService } from '../navigation.service';
import { NavigatorDataService} from '../navigator-data.service';
import { DownloaderService } from '../downloader.service';
import { Kategorie } from '../model/Kategorie';
import { Themenfeld } from '../model/Themenfeld';
import { Navigator } from '../model/Navigator';

describe('KategorienComponent', () => {
  let component: KategorienComponent;
  let fixture: ComponentFixture<KategorienComponent>;

  beforeEach(async(() => {
    const navigationServiceSpy = {
      selectedKategoryObs: of(new Kategorie()),
      selectedThemenfeldObs: of(new Themenfeld()),
      reloadObs: of(new Themenfeld()),
      reload() {}
    };

    const navigator = new Navigator();
    const downloaderServiceSpy = {
      downloadAllPages() {}
    };
    const navigatorDataserviceSpy = {
      getIndex() {
        return Promise.resolve(navigator);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ KategorienComponent, KategorieComponent ],
      providers: [
        {provide: NavigatorDataService, useValue: navigatorDataserviceSpy },
        {provide: NavigationService, useValue: navigationServiceSpy},
        {provide: DownloaderService, useValue: downloaderServiceSpy},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
