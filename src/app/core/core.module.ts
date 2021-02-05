import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services';

import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
//import {HttpInterceptorsClass} from "./interceptors/interceptors.service"


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers :[
   // HttpInterceptorsClass,
    //{provide:HTTP_INTERCEPTORS , useClass: HttpInterceptorsClass , multi: true},
    ApiService
    
 ]
})
export class CoreModule { }
