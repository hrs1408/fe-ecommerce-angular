import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {getToken} from "../functions/storage";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class Api {
  constructor(private http: HttpClient, private route: Router
  ) {
  }

  get(url: string, queryParams: any) {
    const header: any = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getToken()
    };
    if (queryParams) {
      const qrParams = new HttpParams();
      Object.keys(queryParams).forEach((key) => {
        qrParams.append(key, queryParams[key]);
      });
      header.params = qrParams;
    }
    return this.http.get(environment.apiUrl + url, header);
  }

  post(url: string, data: any) {
    const header: any = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getToken()
    };
    return this.http.post(environment.apiUrl + url, data, header);
  }

  put(url: string, data: any) {
    const header: any = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getToken()
    };
    return this.http.put(environment.apiUrl + url, data, header);
  }

  delete(url: string) {
    const header: any = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getToken()
    };
    return this.http.delete(environment.apiUrl + url, header);
  }
}
