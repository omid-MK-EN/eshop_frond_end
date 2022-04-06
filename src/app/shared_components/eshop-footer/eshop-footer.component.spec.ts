import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopFooterComponent } from './eshop-footer.component';

describe('EshopFooterComponent', () => {
  let component: EshopFooterComponent;
  let fixture: ComponentFixture<EshopFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EshopFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EshopFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
