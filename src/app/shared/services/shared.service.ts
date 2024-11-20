import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  // Getter for user_info
  public get userInfo(): any {
    return JSON.parse(localStorage.getItem('user_info'));
  }

  // Getter for isToken
  public get isToken(): boolean {
    return !!localStorage.getItem('token');
  }

  // share blog method
  public shareBlog(blog: any) {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: blog.title,
        text: `Check out this blog: ${blog.title}`,
        url: `https://coding-blogs-seven.vercel.app/blogs/details/${blog.id}`,
      })
        .then(() => console.log('Successfully shared!'))
        .catch((error) => console.log('Successfully shared!'))
    } else {
      alert('Sharing is not supported on this browser.');
    }
  }

}
