import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  public url: Array<any>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.updateUrl();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateUrl();
      });
  }

  updateUrl() {
    let routerUrl = this.router.url;
    let updateRouterUrl = routerUrl.split('/').slice(1);
    this.url = updateRouterUrl;
  }

}
