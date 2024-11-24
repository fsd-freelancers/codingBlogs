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
  public tags = [
    'web', 'frontend', 'backend', 'fullstack', 'html5', 'css3', 'JavaScript', 'typeScript', 'react', 'angular', 'vue', 'node', 'nestjs', 'java', 'python', 'c', 'c++'
  ]

  constructor(private scrollService: ScrollService, private router: Router) { }

  onStories() {
    if (this.router.url === '/blogs') {
      this.scrollService.triggerScrollStories();
    } else {
      this.router.navigate(['/blogs/featured'])
    }
  }

  onLatest() {
    if (this.router.url === '/blogs') {
      this.scrollService.triggerScrollLatest();
    } else {
      this.router.navigate(['/blogs/latest'])
    }
  }

  onFrontend() {
    if (this.router.url === '/blogs') {
      this.scrollService.triggerScrollFrontend();
    } else {
      this.router.navigate(['/blogs/frontend'])
    }
  }

  onBackend() {
    if (this.router.url === '/blogs') {
      this.scrollService.triggerScrollBackend();
    } else {
      this.router.navigate(['/blogs/backend'])
    }
  }

  onFullstack() {
    if (this.router.url === '/blogs') {
      this.scrollService.triggerScrollFullstack();
    } else {
      this.router.navigate(['/blogs/fullstack'])
    }
  }

  onSubscribeNow() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }

}
