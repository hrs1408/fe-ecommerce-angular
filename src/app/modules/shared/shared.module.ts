import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {GuestHeaderComponent} from './components/guest-header/guest-header.component';
import {TranslateModule} from "@ngx-translate/core";
import { GuestSubHeaderComponent } from './components/guest-sub-header/guest-sub-header.component';
import { GuestFooterComponent } from './components/guest-footer/guest-footer.component';
import { GuestSubFooterComponent } from './components/guest-sub-footer/guest-sub-footer.component';
import { ToastHandlerComponent } from './components/toast-handler/toast-handler.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    GuestHeaderComponent,
    GuestSubHeaderComponent,
    GuestFooterComponent,
    GuestSubFooterComponent,
    ToastHandlerComponent,
  ],
    exports: [
        PageNotFoundComponent,
        GuestHeaderComponent,
        GuestSubHeaderComponent,
        GuestFooterComponent,
        GuestSubFooterComponent,
        ToastHandlerComponent
    ],
  imports: [
    TranslateModule,
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    ToastModule,
  ]
})
export class SharedModule {
}
