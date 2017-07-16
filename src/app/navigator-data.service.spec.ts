import { TestBed, inject } from '@angular/core/testing';

import { NavigatorDataService } from './navigator-data.service';

describe('NavigatorDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigatorDataService]
    });
  });

  it('should be created', inject([NavigatorDataService], (service: NavigatorDataService) => {
    expect(service).toBeTruthy();
  }));
});
