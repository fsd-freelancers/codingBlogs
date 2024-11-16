import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { WriteBlogsComponent } from './modules/blogs/write-blogs/write-blogs.component';
import { BlogDetailsComponent } from './modules/blogs/blog-details/blog-details.component';
import { HomeComponent } from './layout/home/home.component';
import { FaqsComponent } from './features/faqs/faqs.component';
import { ViewBlogsComponent } from './modules/blogs/view-blogs/view-blogs.component';
import { SearchBlogsComponent } from './modules/blogs/search-blogs/search-blogs.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  {
    path: 'blogs', component: ContentLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'details/:blogId', component: BlogDetailsComponent },
    ]
  },
  { path: 'blogs/:tag', component: ViewBlogsComponent },
  { path: 'blogs/search/:searchedText', component: SearchBlogsComponent },
  { path: 'write', component: WriteBlogsComponent },
  { path: 'faqs', component: FaqsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
