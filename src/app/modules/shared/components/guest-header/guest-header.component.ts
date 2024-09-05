import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductSubMenu } from '../../constants/ProductSubMenu';
import { DiscoverSubMenu } from '../../constants/DiscoverSubMenu';
import { ServiceSubMenu } from '../../constants/ServiceSubMenu';
import { Router } from '@angular/router';
import { getToken } from '../../functions/storage';

@Component({
  selector: 'app-guest-header',
  templateUrl: './guest-header.component.html',
  styleUrl: './guest-header.component.scss',
})
export class GuestHeaderComponent {
  protected readonly ProductSubMenu = ProductSubMenu;
  protected readonly DiscoverSubMenu = DiscoverSubMenu;
  protected readonly ServiceSubMenu = ServiceSubMenu;

  constructor(private translate: TranslateService, private router: Router) {}

  changeLanguage(event: any) {
    this.translate.use(event.target.value);
  }

  authBtnClick() {
    if (getToken() !== null) {
      this.router
        .navigate(['/auth/profile'])
        .then((r) => console.log('navigated to profile page'));
    } else {
      this.router
        .navigate(['/auth/login'])
        .then((r) => console.log('navigated to auth page'));
    }
  }
}
