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
    const userInfo = this._sharedService.userInfo;
    this.isLoading = true;
    this._userService.getMyBlogs(userInfo.userId).subscribe(res => {
      this.blogDetail = res;
      this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
    })
  }

}
