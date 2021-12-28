import { TestBed } from '@angular/core/testing';

import { ThanksPopupService } from './thanks-popup.service';

describe('ThanksPopupService', () => {
  let service: ThanksPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThanksPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
