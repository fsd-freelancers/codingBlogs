import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  public blogDetail: any;
  public isLoading: boolean = false;

  constructor(private _blogService: BlogService, private actRoute: ActivatedRoute, public _sharedService: SharedService) { }

  ngOnInit() {
    this.getBlogDetail();
  }

  private getBlogDetail() {
    const blogId = this.actRoute.snapshot.params['blogId']

    this.isLoading = true;
    this._blogService.getBlogDetail(blogId).subscribe(res => {
      this.blogDetail = res;
      this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
    })
  }

}
