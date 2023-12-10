import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestBlogsComponent } from './latest-blogs/latest-blogs.component';
import { WriteBlogsComponent } from './write-blogs/write-blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';



@NgModule({
  declarations: [
    LatestBlogsComponent,
    WriteBlogsComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogsModule { }
