import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from 'src/app/api.config';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  // get blogs
  getBlogs() {
    const url = `${API_BASE_URL}/blog`;
    return this.http.get(url);
  }

  // get blogs by tagname
  getBlogsByTag(tag) {
    const url = `${API_BASE_URL}/blog/${tag}`;
    return this.http.get(url);
  }

  // get blog detail
  getBlogDetail(blog_id) {
    const url = `${API_BASE_URL}/blog/detail/${blog_id}`;
    return this.http.get(url);
  }

  // create blog 
  createBlog(data) {
    const url = `${API_BASE_URL}/blog/create`;
    return this.http.post(url, data);
  }

  // update blog 
  updateBlog(blogId, data) {
    const url = `${API_BASE_URL}/blog/update/${blogId}`;
    return this.http.patch(url, data);
  }

  // delete blog 
  deleteBlog(blogId) {
    const url = `${API_BASE_URL}/blog/delete/${blogId}`;
    return this.http.delete(url);
  }

  // search blogs
  searchBlogs(searchedText) {
    const url = `${API_BASE_URL}/blog/search/${searchedText}`;
    return this.http.get(url);
  }
}
