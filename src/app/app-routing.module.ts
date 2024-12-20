import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { WriteBlogsComponent } from './modules/blogs/write-blogs/write-blogs.component';
import { BlogDetailsComponent } from './modules/blogs/blog-details/blog-details.component';
import { HomeComponent } from './layout/home/home.component';
import { FaqsComponent } from './features/faqs/faqs.component';
import { ViewBlogsComponent } from './modules/blogs/view-blogs/view-blogs.component';
import { SearchBlogsComponent } from './modules/blogs/search-blogs/search-blogs.component';
import { MyProfileComponent } from './modules/user/my-profile/my-profile.component';
import { MyBlogsComponent } from './modules/user/my-blogs/my-blogs.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'my-blogs', component: MyBlogsComponent },
  {
    path: 'blogs', component: ContentLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'details/:blogId', component: BlogDetailsComponent },
    ]
  },
  { path: 'blogs/:tag', component: ViewBlogsComponent },
  { path: 'blogs/search/:searchedText', component: SearchBlogsComponent },
  { path: 'write', component: WriteBlogsComponent },
  { path: 'update/:blogId', component: WriteBlogsComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'my-blogs', component: MyBlogsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
