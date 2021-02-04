import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers :[ApiService,
 ]
})
export class CoreModule { }
