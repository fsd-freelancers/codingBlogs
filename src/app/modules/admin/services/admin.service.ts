import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from 'src/app/api.config';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getDashboardInfo() {
    const url = `${API_BASE_URL}/dashboard`;
    return this.http.get(url);
  }
}
