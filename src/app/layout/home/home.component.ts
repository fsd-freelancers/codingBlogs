import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/modules/blogs/services/blog.service';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('stories') stories: ElementRef<any>;
  @ViewChild('latest') latest: ElementRef<any>;
  @ViewChild('frontend') frontend: ElementRef<any>;
  @ViewChild('backend') backend: ElementRef<any>;
  @ViewChild('fullstack') fullstack: ElementRef<any>;

  private subscriptionStories: Subscription;
  private subscriptionLatest: Subscription;
  private subscriptionFrontend: Subscription;
  private subscriptionBackend: Subscription;
  private subscriptionFullstack: Subscription;

  public blogs: any;
  public isLoading: boolean = false;

  constructor(private scrollService: ScrollService, private _blogService: BlogService, public _sharedService: SharedService) {
  }

  ngOnInit() {
    this.subscriptionStories = this.scrollService.scrollStoriesCalled$.subscribe(() => {
      this.onStories();
    });

    this.subscriptionLatest = this.scrollService.scrollLatestCalled$.subscribe(() => {
      this.onLatest();
    });

    this.subscriptionFrontend = this.scrollService.scrollFrontendCalled$.subscribe(() => {
      this.onFrontend();
    });

    this.subscriptionBackend = this.scrollService.scrollBackendCalled$.subscribe(() => {
      this.onBackend();
    });

    this.subscriptionFullstack = this.scrollService.scrollFullstackCalled$.subscribe(() => {
      this.onFullstack();
    });

    this.getBlogs();
  }

  private getBlogs() {
    this.isLoading = true;
    this._blogService.getBlogs().subscribe(res => {
      this.blogs = res;
      this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
    })
  }

  private scrollToElement(element: ElementRef<any>) {
    window.scrollTo({
      top: window.scrollY + element.nativeElement.getBoundingClientRect().top - 74,
      behavior: "smooth"
    })
  }

  public onStories() {
    this.scrollToElement(this.stories);
  }

  public onLatest() {
    this.scrollToElement(this.latest);
  }

  public onFrontend() {
    this.scrollToElement(this.frontend);
  }

  public onBackend() {
    this.scrollToElement(this.backend);
  }

  public onFullstack() {
    this.scrollToElement(this.fullstack);
  }


  ngOnDestroy(): void {
    this.subscriptionStories.unsubscribe();
    this.subscriptionLatest.unsubscribe();
    this.subscriptionFrontend.unsubscribe();
    this.subscriptionBackend.unsubscribe();
    this.subscriptionFullstack.unsubscribe();
  }

}
