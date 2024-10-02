import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from './faqs/faqs.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeaturesModule { }
