import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { WriteBlogsComponent } from './modules/blogs/write-blogs/write-blogs.component';
import { BlogDetailsComponent } from './modules/blogs/blog-details/blog-details.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: '', component: ContentLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'details', component: BlogDetailsComponent }
    ]
  },
  { path: 'write', component: WriteBlogsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
