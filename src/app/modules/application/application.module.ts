import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ApplicationRoutes} from "./application.routes";



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ApplicationRoutes),
    CommonModule
  ]
})
export class ApplicationModule { }
