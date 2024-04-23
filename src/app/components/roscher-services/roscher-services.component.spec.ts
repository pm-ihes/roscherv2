import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoscherServicesComponent } from './roscher-services.component';

describe('RoscherServicesComponent', () => {
  let component: RoscherServicesComponent;
  let fixture: ComponentFixture<RoscherServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoscherServicesComponent]
    });
    fixture = TestBed.createComponent(RoscherServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
