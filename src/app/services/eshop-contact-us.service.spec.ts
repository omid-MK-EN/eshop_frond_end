import { TestBed } from '@angular/core/testing';

import { EshopContactUsService } from './eshop-contact-us.service';

describe('EshopContactUsService', () => {
  let service: EshopContactUsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EshopContactUsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
