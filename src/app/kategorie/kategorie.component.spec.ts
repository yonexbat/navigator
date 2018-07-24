import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { KategorieComponent } from './kategorie.component';
import { NavigationServiceService } from '../navigation-service.service';
import { NavigatorDataService} from '../navigator-data.service';
import { Kategorie } from '../model/Kategorie';
import { Themenfeld } from '../model/Themenfeld';

describe('KategorieComponent', () => {
  let component: KategorieComponent;
  let fixture: ComponentFixture<KategorieComponent>;
  let subSpy1;
  let subSpy2;

  beforeEach(async(() => {

    const navigationServiceSpy = {
      selectedKategoryObs: of(new Kategorie()),
      selectedThemenfeldBs: of(new Themenfeld()),
    };
    subSpy1 = spyOn(navigationServiceSpy.selectedKategoryObs, 'subscribe');
    subSpy2 = spyOn(navigationServiceSpy.selectedThemenfeldBs, 'subscribe');

    const navigatorDataserviceSpy = jasmine.createSpyObj('NavigatorDataService', ['ba']);

    TestBed.configureTestingModule({
      declarations: [ KategorieComponent ],
      providers: [
        {provide: NavigationServiceService, useValue: navigationServiceSpy},
        {provide: NavigatorDataService, useValue: navigatorDataserviceSpy},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorieComponent);
    component = fixture.componentInstance;
     fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
