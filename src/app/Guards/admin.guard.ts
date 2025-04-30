import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem("admin")){
    return true;
  }
  else{
    return false;
  }
};
