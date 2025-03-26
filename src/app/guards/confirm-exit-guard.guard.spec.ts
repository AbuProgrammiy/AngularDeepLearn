import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { confirmExitGuardGuard } from './confirm-exit-guard.guard';

describe('confirmExitGuardGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => confirmExitGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
