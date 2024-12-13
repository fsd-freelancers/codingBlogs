import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoginPage: boolean = false;
  private urls = ['/sign-in', '/sign-up', '/forgot-password'];
  public isServerStarted: boolean = false;

  constructor(private router: Router, private _sharedService: SharedService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.urls.includes(event.url)) {
          this.isLoginPage = true;
        } else {
          this.isLoginPage = false;
        }
      }
    });
  }

  ngOnInit() {
    this.testApi();
  }

  private testApi() {
    this._sharedService.testApi().subscribe(() => {
      this.isServerStarted = true;
    })
  }

}
