import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopRegisterComponent } from './eshop-register.component';

describe('EshopRegisterComponent', () => {
  let component: EshopRegisterComponent;
  let fixture: ComponentFixture<EshopRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EshopRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EshopRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
