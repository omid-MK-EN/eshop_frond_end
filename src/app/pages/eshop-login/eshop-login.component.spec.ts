import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopLoginComponent } from './eshop-login.component';

describe('EshopLoginComponent', () => {
  let component: EshopLoginComponent;
  let fixture: ComponentFixture<EshopLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EshopLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EshopLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
