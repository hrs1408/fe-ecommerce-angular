import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {registerLicense} from "@syncfusion/ej2-base";
import {environment} from "./environments/environment";
import {enableProdMode} from "@angular/core";
import {KeySync} from "../keySync";

registerLicense(KeySync);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
