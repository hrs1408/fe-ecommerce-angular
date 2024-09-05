import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
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
    };
    return this.http.post(environment.apiUrl + url, data, this.optionsRequest(header, false));
  }

  put(url: string, data: any) {
    const header: any = {
      'Content-Type': 'application/json',
    };
    return this.http.put(environment.apiUrl + url, data, header);
  }

  delete(url: string) {
    const header: any = {
      'Content-Type': 'application/json',
    };
    return this.http.delete(environment.apiUrl + url, header);
  }

  optionsRequest(
    headers: any = {},
    reportProgress?: boolean,
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text' | '',
    body: any = null
  ) {
    const token = getToken();
    const header = {
      Authorization: token ? `Bearer ` + token : ``,
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      'Accept-Language': 'vi',
      'Accept-origin': 'http://localhost:4200',
      ...headers
    };
    const options: any = {headers: new HttpHeaders(header)};

    if (reportProgress == true) {
      options['reportProgress'] = true;
    }

    if (responseType != '' && responseType != null && responseType != undefined) {
      options['responseType'] = responseType;
    }

    if (body != null) {
      options['body'] = JSON.stringify(body);
    }

    return options;
  }
}
