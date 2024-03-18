import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitarySectionComponent } from './sanitary-section.component';

describe('SanitarySectionComponent', () => {
  let component: SanitarySectionComponent;
  let fixture: ComponentFixture<SanitarySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanitarySectionComponent]
    });
    fixture = TestBed.createComponent(SanitarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
