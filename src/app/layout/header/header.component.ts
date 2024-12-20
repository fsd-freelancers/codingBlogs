import { Component, ElementRef, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isShowMenu: boolean = false;
  public isSearch: boolean = false;
  public isTopics: boolean = false;
  public isUserProfile: boolean = false;

  constructor(private eRef: ElementRef, private router: Router, public _sharedService: SharedService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isUserProfile = false;
        this.isTopics = false;
        this.isSearch = false;
        this.isShowMenu = false;
      }
    })
  }

  public onMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  public onSearch() {
    this.isSearch = !this.isSearch;
    this.isUserProfile = false;
    this.isTopics = false;
  }

  public onTopics() {
    this.isTopics = !this.isTopics;
    this.isSearch = false;
  }

  public onUserProfile() {
    this.isUserProfile = !this.isUserProfile;
    this.isSearch = false;
  }

  // Listens for clicks on the document
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    // Check if the click is outside the user profile or its toggle
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isUserProfile = false;
      this.isTopics = false;
      this.isSearch = false;
    }
  }

  public searchBlogs(text) {
    this.router.navigate(['/blogs/search/' + text.value]);
  }

  public onLogout() {
    localStorage.clear();
    this.router.navigate(['/blogs']);
  }

}
