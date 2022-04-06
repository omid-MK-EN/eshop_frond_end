import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopAboutUsComponent } from './eshop-about-us.component';

describe('EshopAboutUsComponent', () => {
  let component: EshopAboutUsComponent;
  let fixture: ComponentFixture<EshopAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EshopAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EshopAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
