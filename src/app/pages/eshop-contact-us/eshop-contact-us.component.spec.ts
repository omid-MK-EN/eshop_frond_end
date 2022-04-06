import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopContactUsComponent } from './eshop-contact-us.component';

describe('EshopContactUsComponent', () => {
  let component: EshopContactUsComponent;
  let fixture: ComponentFixture<EshopContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EshopContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EshopContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
