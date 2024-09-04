import {StoreKeys} from "../enums/storeKeys";

export function getToken() {
  return localStorage.getItem(StoreKeys.AUTH_TOKEN);
}

export function getExpireTime() {
  return localStorage.getItem(StoreKeys.TOKEN_EXPIRE_TIME);
}
