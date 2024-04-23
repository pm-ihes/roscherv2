import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaverieModalComponent } from './haverie-modal.component';

describe('HaverieModalComponent', () => {
  let component: HaverieModalComponent;
  let fixture: ComponentFixture<HaverieModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaverieModalComponent]
    });
    fixture = TestBed.createComponent(HaverieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
