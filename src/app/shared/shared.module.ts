import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    LoaderComponent,
    SkeletonLoaderComponent,
    PageLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbComponent,
    LoaderComponent,
    SkeletonLoaderComponent,
    PageLoaderComponent
  ]
})
export class SharedModule { }
