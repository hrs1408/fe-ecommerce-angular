import {Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthenticationLayoutComponent} from "./layouts/authentication-layout/authentication-layout.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { LoggedGuard } from "../application/guards/logged.guard";

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    component: AuthenticationLayoutComponent,
    children: [
      {
        path: 'login',
        canActivate: [LoggedGuard],
        component: LoginComponent
      },
      {
        path: 'register',
        canActivate: [LoggedGuard],
        component: RegisterComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
