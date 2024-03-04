import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job3Component } from './job-3.component';

describe('Job3Component', () => {
  let component: Job3Component;
  let fixture: ComponentFixture<Job3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Job3Component]
    });
    fixture = TestBed.createComponent(Job3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
