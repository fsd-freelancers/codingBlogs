import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { RouterModule } from '@angular/router';
import { HomeSidenavComponent } from './home-sidenav/home-sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ContentLayoutComponent,
    HomeSidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
