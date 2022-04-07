import { TestBed } from '@angular/core/testing';

import { EshopAboutUsService } from './eshop-about-us.service';

describe('EshopAboutUsService', () => {
  let service: EshopAboutUsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EshopAboutUsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
