import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.scss']
})
export class ViewBlogsComponent {
  public blogDetail: any;
  private tag: any;
  public isLoading: boolean = false;

  constructor(private _blogService: BlogService, public actRoute: ActivatedRoute, private router: Router, public _sharedService: SharedService) { }

  ngOnInit() {
    this.tag = this.actRoute.snapshot.params['tag'];

    this.getBlogsByTag();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.tag = this.actRoute.snapshot.params['tag'];

        this.getBlogsByTag();
      }
    })
  }

  private getBlogsByTag() {
    this.isLoading = true;
    this._blogService.getBlogsByTag(this.tag).subscribe(res => {
      this.blogDetail = res;
      this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
    })
  }

}
