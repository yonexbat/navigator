import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { KategorieComponent } from './kategorie.component';
import { NavigationService } from '../navigation.service';
import { NavigatorDataService} from '../navigator-data.service';
import { Kategorie } from '../model/Kategorie';
import { Themenfeld } from '../model/Themenfeld';

describe('KategorieComponent', () => {
  let component: KategorieComponent;
  let fixture: ComponentFixture<KategorieComponent>;

  beforeEach(async(() => {

    const navigationServiceSpy = {
      selectedKategoryObs: of(new Kategorie()),
      selectedThemenfeldBs: of(new Themenfeld()),
    };

    const navigatorDataserviceSpy = jasmine.createSpyObj('NavigatorDataService', ['ba']);

    TestBed.configureTestingModule({
      declarations: [ KategorieComponent ],
      providers: [
        {provide: NavigationService, useValue: navigationServiceSpy},
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
