import { CanDeactivateFn } from '@angular/router';

export const confirmExitGuardGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return confirm("Saqlanmagan o'zgarishlar, hali ham chiqishni hohlaysizmi")
  return true;
};
