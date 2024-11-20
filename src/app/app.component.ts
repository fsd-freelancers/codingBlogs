import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogs';
  public isLoginPage: boolean = false;
  private urls = ['/sign-in', '/sign-up'];

  constructor(private router: Router) {
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

}
