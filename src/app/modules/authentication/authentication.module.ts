import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthenticationRoutes} from './authentication.routes';
import {RouterModule} from '@angular/router';
import {AuthenticationLayoutComponent} from './layouts/authentication-layout/authentication-layout.component';
import {SharedModule} from '../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthenticationLayoutComponent,
    ProfileComponent,
  ],
  imports: [
    RouterModule.forChild(AuthenticationRoutes),
    CommonModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    RippleModule,
  ],
})
export class AuthenticationModule {
}
