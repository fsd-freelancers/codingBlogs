import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from 'src/app/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data) {
    const url = `${API_BASE_URL}/auth/login`;
    return this.http.post(url, data);
  }

  register(data) {
    const url = `${API_BASE_URL}/auth/signUp`;
    return this.http.post(url, data);
  }

}
