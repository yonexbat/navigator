import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ActionsComponent } from './actions.component';
import { NavigationService } from '../navigation.service';
import { NavigatorDataService} from '../navigator-data.service';
import { Kategorie } from '../model/Kategorie';
import { Themenfeld } from '../model/Themenfeld';

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;

  beforeEach(async(() => {
    const navigationServiceSpy = {
      selectedKategoryObs: of(new Kategorie()),
      selectedThemenfeldBs: of(new Themenfeld()),
    };

    const navigatorDataserviceSpy = jasmine.createSpyObj('NavigatorDataService', ['ba']);

    TestBed.configureTestingModule({
      declarations: [ ActionsComponent ],
      providers: [
        {provide: NavigationService, useValue: navigationServiceSpy},
        {provide: NavigatorDataService, useValue: navigatorDataserviceSpy},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
