import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-search-blogs',
  templateUrl: './search-blogs.component.html',
  styleUrls: ['./search-blogs.component.scss']
})
export class SearchBlogsComponent {
  public blogDetail: any;
  private text: any;
  public isLoading: boolean = false;

  constructor(private _blogService: BlogService, public actRoute: ActivatedRoute, public _sharedService: SharedService) { }

  ngOnInit() {
    this.text = this.actRoute.snapshot.params['searchedText'];
    this.getBlogsBySearchText();
  }

  private getBlogsBySearchText() {
    this.isLoading = true;
    this._blogService.searchBlogs(this.text).subscribe(res => {
      this.blogDetail = res;
      this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
    });
  }
}
