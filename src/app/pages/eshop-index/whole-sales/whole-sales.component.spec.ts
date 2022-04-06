import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeSalesComponent } from './whole-sales.component';

describe('WholeSalesComponent', () => {
  let component: WholeSalesComponent;
  let fixture: ComponentFixture<WholeSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholeSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
