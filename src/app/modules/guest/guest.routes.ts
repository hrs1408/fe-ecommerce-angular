import {Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {GuestLayoutComponent} from "./layouts/guest-layout/guest-layout.component";

export const GuestRoutes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
]
