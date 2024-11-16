import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  public url: Array<any>;

  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.actRoute.snapshot.routeConfig.children[1].path == 'details/:blogId')

    this.updateUrl();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateUrl();
      });
  }

  updateUrl() {
    const isBlogId = this.actRoute?.snapshot?.routeConfig?.children?.[1]?.path == 'details/:blogId';
    let routerUrl = this.router.url;
    let updateRouterUrl = routerUrl.split('/').slice(1);

    if (isBlogId) {
      updateRouterUrl.pop();
    }

    this.url = updateRouterUrl;
  }

}
