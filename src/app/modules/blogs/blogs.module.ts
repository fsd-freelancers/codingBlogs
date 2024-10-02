import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestBlogsComponent } from './latest-blogs/latest-blogs.component';
import { WriteBlogsComponent } from './write-blogs/write-blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LatestBlogsComponent,
    WriteBlogsComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class BlogsModule { }
