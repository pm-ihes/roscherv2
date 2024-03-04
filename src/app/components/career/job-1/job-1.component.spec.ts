import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1Component } from './job-1.component';

describe('Job1Component', () => {
  let component: Job1Component;
  let fixture: ComponentFixture<Job1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Job1Component]
    });
    fixture = TestBed.createComponent(Job1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
