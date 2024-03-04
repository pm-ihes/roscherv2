import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job2Component } from './job-2.component';

describe('Job2Component', () => {
  let component: Job2Component;
  let fixture: ComponentFixture<Job2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Job2Component]
    });
    fixture = TestBed.createComponent(Job2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
