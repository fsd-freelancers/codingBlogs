import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isShowMenu: boolean = false;
  public isSearch: boolean = false;
  public isTopics: boolean = false;

  public onMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  public onSearch() {
    this.isSearch = !this.isSearch;
  }

  public onTopics() {
    this.isTopics = !this.isTopics;
  }

}
