import { Component, ElementRef, HostListener } from '@angular/core';
import { UserService } from '../services/user.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { BlogService } from '../../blogs/services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.scss']
})
export class MyBlogsComponent {
  public blogDetail: any;
  public isLoading: boolean = false;
  public isOptions: boolean = false;
  public activeDropdownIndex: any;

  constructor(private _userService: UserService, public _sharedService: SharedService, private _blogService: BlogService, private eRef: ElementRef) { }
  public dropdown: any;

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

  toggleOptions(event: Event, index): void {
    event.stopPropagation();
    this.activeDropdownIndex = index;
    this.isOptions = true;
  }

  public onDeleteBlog(blogId) {
    this.isLoading = true;
    this._blogService.deleteBlog(blogId).subscribe(() => {
      this.isLoading = false;
      this.getMyBlogs();
      Swal.fire({
        icon: 'success',
        title: 'Blog deleted successfully!'
      });
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!'
      });
      this.isLoading = false;
    });
  }

  // Listens for clicks on the document
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedInsideDropdown = this.eRef.nativeElement.querySelector(`#dropdown`)?.contains(event.target as Node);
    if (!clickedInsideDropdown) {
      this.isOptions = false;
    }
  }

}
