import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MessageService} from 'primeng/api';
import {SharedModule} from './modules/shared/shared.module';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    SharedModule,
    BreadcrumbModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  exports: [TranslateModule]
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['vi', 'en']);
    translate.setDefaultLang('vi');
    translate.use('vi');
  }
}

export function httpTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
