import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingSectionComponent } from './heating-section.component';

describe('HeatingSectionComponent', () => {
  let component: HeatingSectionComponent;
  let fixture: ComponentFixture<HeatingSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeatingSectionComponent]
    });
    fixture = TestBed.createComponent(HeatingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
