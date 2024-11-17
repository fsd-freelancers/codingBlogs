import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.scss']
})
export class MyBlogsComponent {
  public blogDetail: any;
  public isLoading: boolean = false;

  constructor(private _userService: UserService, public _sharedService: SharedService) { }

  ngOnInit() {
    this.getMyBlogs();
  }

  private getMyBlogs() {
    this.isLoading = true;
    this._userService.getMyBlogs('66fda8708edd5a1be29d03f9').subscribe(res => {
      this.blogDetail = res;
      this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
    })
  }

}
