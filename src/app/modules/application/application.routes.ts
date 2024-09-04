import {Routes} from '@angular/router';
import {PageNotFoundComponent} from "../shared/components/page-not-found/page-not-found.component";
import {authGuardGuard} from "./guards/auth-guard.guard";

export const ApplicationRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../guest/guest.module').then((m) => m.GuestModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('../authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  {
    path: 'admin',
    canActivate: [authGuardGuard],
    loadChildren: () => import('../administrator/administrator.module').then((m) => m.AdministratorModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
