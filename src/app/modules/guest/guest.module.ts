import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {GuestRoutes} from "./guest.routes";
import {TranslateModule} from "@ngx-translate/core";
import {GuestLayoutComponent} from './layouts/guest-layout/guest-layout.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent,
    GuestLayoutComponent
  ],
  imports: [
    RouterModule.forChild(GuestRoutes),
    CommonModule,
    TranslateModule,
    SharedModule
  ]
})
export class GuestModule {
}
