import { TestBed } from '@angular/core/testing';

import { ReversePhoneService } from './reverse-phone.service';

describe('ReversePhoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReversePhoneService = TestBed.get(ReversePhoneService);
    expect(service).toBeTruthy();
  });
});
