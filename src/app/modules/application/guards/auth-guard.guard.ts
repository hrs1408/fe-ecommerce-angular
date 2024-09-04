import {CanActivateFn} from '@angular/router';
import {getExpireTime, getToken} from "../../shared/functions/storage";

export const authGuardGuard: CanActivateFn = (route, state) => {
  const token = getToken();
  if (!token) {
    return false;
  } else {
    const tokenExpireTime = getExpireTime();
    if (tokenExpireTime && new Date(tokenExpireTime) < new Date()) {
      return false;
    }
  }
  return true;
};
