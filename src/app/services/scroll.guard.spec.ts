import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { scrollGuard } from './scroll.guard';

describe('scrollGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => scrollGuard(...guardParameters));
      
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
