import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceWrapperComponent } from './insurance-wrapper.component';

describe('InsuranceWrapperComponent', () => {
  let component: InsuranceWrapperComponent;
  let fixture: ComponentFixture<InsuranceWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
