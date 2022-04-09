import { TestBed } from '@angular/core/testing';

import { EshopAccountService } from './eshop-account.service';

describe('EshopAccountService', () => {
  let service: EshopAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EshopAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
