import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirConditionerSectionComponent } from './air-conditioner-section.component';

describe('AirConditionerSectionComponent', () => {
  let component: AirConditionerSectionComponent;
  let fixture: ComponentFixture<AirConditionerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirConditionerSectionComponent]
    });
    fixture = TestBed.createComponent(AirConditionerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
