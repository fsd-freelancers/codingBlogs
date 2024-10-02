import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { WriteBlogsComponent } from './modules/blogs/write-blogs/write-blogs.component';
import { BlogDetailsComponent } from './modules/blogs/blog-details/blog-details.component';
import { HomeComponent } from './layout/home/home.component';
import { LatestBlogsComponent } from './modules/blogs/latest-blogs/latest-blogs.component';
import { FaqsComponent } from './features/faqs/faqs.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  {
    path: 'blogs', component: ContentLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'details', component: BlogDetailsComponent },
    ]
  },
  { path: 'latest-blogs', component: LatestBlogsComponent },
  { path: 'write', component: WriteBlogsComponent },
  { path: 'faqs', component: FaqsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
