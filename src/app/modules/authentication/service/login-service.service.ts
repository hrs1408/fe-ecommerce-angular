import {Injectable} from '@angular/core';
import {Api} from "../../shared/networks/api";

const LOGIN_URL = '/auth/login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private api: Api) {
  }

  login(email: string, password: string) {
    return this.api.post(LOGIN_URL, {username: email, password: password});
  }
}
