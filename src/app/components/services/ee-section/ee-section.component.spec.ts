import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EeSectionComponent } from './ee-section.component';

describe('EeSectionComponent', () => {
  let component: EeSectionComponent;
  let fixture: ComponentFixture<EeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EeSectionComponent]
    });
    fixture = TestBed.createComponent(EeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
