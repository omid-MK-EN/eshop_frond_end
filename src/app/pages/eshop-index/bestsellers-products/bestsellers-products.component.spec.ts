import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellersProductsComponent } from './bestsellers-products.component';

describe('BestsellersProductsComponent', () => {
  let component: BestsellersProductsComponent;
  let fixture: ComponentFixture<BestsellersProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellersProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellersProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
