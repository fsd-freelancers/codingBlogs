import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from 'src/app/api.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // get user profile
  getUserProfile(userId) {
    const url = `${API_BASE_URL}/user/${userId}`;
    return this.http.get(url);
  }

  // update user profile
  updateUserProfile(userId, data) {
    const url = `${API_BASE_URL}/user/update/${userId}`;
    return this.http.patch(url, data);
  }

  // get my blogs
  getMyBlogs(userId) {
    const url = `${API_BASE_URL}/user/blogs/${userId}`;
    return this.http.get(url);
  }

  // add subscriber
  addSubscriber(data) {
    const url = `${API_BASE_URL}/user/subscribe`;
    return this.http.post(url, data);
  }

}
