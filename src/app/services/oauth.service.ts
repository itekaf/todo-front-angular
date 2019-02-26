import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class OAuthService {

  serverUri: 'http://localhost:4000';
  local: '/api/v1/signin/local';
  constructor(private http: HttpClient) { }

  signin(data) {
    return this.http.post(`http://localhost:4000/api/v1/signin/local`, data, httpOptions).subscribe((res: any) => {
      const { token } = res;
      localStorage.setItem('jwtToken', token);
      // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const decode = jwtDecode(token);
      return res;
    });

  }
  signup(data) {
    return this.http.post(`${this.serverUri}/api/v1/signup/local`, data);
  }
}
