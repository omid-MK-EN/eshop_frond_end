import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleReommandProductComponent } from './single-reommand-product.component';

describe('SingleReommandProductComponent', () => {
  let component: SingleReommandProductComponent;
  let fixture: ComponentFixture<SingleReommandProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleReommandProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleReommandProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
