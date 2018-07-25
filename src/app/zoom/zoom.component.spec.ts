import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ZoomComponent } from './zoom.component';
import { Kategorie } from '../model/Kategorie';
import { Themenfeld } from '../model/Themenfeld';
import { NavigationService } from '../navigation.service';
import { NavigatorDataService} from '../navigator-data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ZoomComponent', () => {
  let component: ZoomComponent;
  let fixture: ComponentFixture<ZoomComponent>;

  beforeEach(async(() => {

    const navigationServiceSpy = {
      selectedKategoryObs: of(new Kategorie()),
      selectedThemenfeldBs: of(new Themenfeld()),
    };

    const navigatorDataserviceSpy = jasmine.createSpyObj('NavigatorDataService', ['ba']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ZoomComponent ],
      providers: [
        {provide: NavigationService, useValue: navigationServiceSpy},
        {provide: NavigatorDataService, useValue: navigatorDataserviceSpy},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
