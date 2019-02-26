import {Injectable} from '@angular/core';
import { HttpClient as Http, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpClient {
  static token: string;

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: HttpHeaders) {
    if (HttpClient.token) {
      headers.append('Authorization', `Bearer ${HttpClient.token}`);
    }
  }

  get(url) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers,
    });
  }

  post(url, data) {
    const headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers
    });
  }

  put() {}
  delete() {}
}
