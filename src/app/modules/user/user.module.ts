import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MyProfileComponent,
    MyBlogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserModule { }
