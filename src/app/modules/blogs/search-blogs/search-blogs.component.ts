import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-blogs',
  templateUrl: './search-blogs.component.html',
  styleUrls: ['./search-blogs.component.scss']
})
export class SearchBlogsComponent {
  public blogDetail: any;
  private text: any;
  public isLoading: boolean = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private _blogService: BlogService, public actRoute: ActivatedRoute, public _sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    this.text = this.actRoute.snapshot.params['searchedText'];
    this.getBlogsBySearchText();

    this.router.events.pipe(filter(event => event instanceof NavigationEnd), takeUntil(this.unsubscribe$)).subscribe(() => {
      this.text = this.actRoute.snapshot.params['searchedText'];
      this.getBlogsBySearchText();
    })
  }

  private getBlogsBySearchText() {
    if (this.text) {
      this.isLoading = true;
      this._blogService.searchBlogs(this.text).subscribe(res => {
        this.blogDetail = res;
        this.isLoading = false;
      }, (err) => {
        this.isLoading = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
