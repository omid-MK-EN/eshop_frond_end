import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopIndexComponent } from './eshop-index.component';

describe('EshopIndexComponent', () => {
  let component: EshopIndexComponent;
  let fixture: ComponentFixture<EshopIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EshopIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EshopIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
