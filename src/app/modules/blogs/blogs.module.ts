import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteBlogsComponent } from './write-blogs/write-blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBlogsComponent } from './search-blogs/search-blogs.component';
import { MatModule } from 'src/app/material/mat.module';



@NgModule({
  declarations: [
    WriteBlogsComponent,
    BlogDetailsComponent,
    ViewBlogsComponent,
    SearchBlogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatModule
  ]
})
export class BlogsModule { }
