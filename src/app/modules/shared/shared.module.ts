import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {GuestHeaderComponent} from './components/guest-header/guest-header.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    PageNotFoundComponent,
    GuestHeaderComponent,
  ],
  exports: [
    PageNotFoundComponent,
    GuestHeaderComponent
  ],
  imports: [
    TranslateModule,
    CommonModule,
    RouterModule,
    NgOptimizedImage
  ]
})
export class SharedModule {
}
