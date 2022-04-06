import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopNotfoundComponent } from './eshop-notfound.component';

describe('EshopNotfoundComponent', () => {
  let component: EshopNotfoundComponent;
  let fixture: ComponentFixture<EshopNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EshopNotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EshopNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
