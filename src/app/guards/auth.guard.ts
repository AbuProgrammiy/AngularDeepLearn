import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (typeof localStorage !== "undefined") {
    let role = localStorage.getItem("role");

    if(role=="admin"){
      return true;
    }
  }
  return false;
};
