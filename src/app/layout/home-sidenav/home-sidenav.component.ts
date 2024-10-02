import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-sidenav',
  templateUrl: './home-sidenav.component.html',
  styleUrls: ['./home-sidenav.component.scss']
})
export class HomeSidenavComponent {

  constructor(private scrollService: ScrollService, private router: Router) {  }

  onStories() {
    this.scrollService.triggerScrollStories();
  }

  onLatest() {
    if (this.router.url === '/blogs') {
      this.scrollService.triggerScrollLatest();
    } else {
      this.router.navigate(['latest-blogs'])
    }
  }

  onFrontend() {
    this.scrollService.triggerScrollFrontend();
  }

  onBackend() {
    this.scrollService.triggerScrollBackend();
  }

  onFullstack() {
    this.scrollService.triggerScrollFullstack();
  }

}
