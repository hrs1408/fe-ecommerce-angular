import { Component } from '@angular/core';
import {NavHeader} from "../../constants/NavHeader";
import {ProductSubMenu} from "../../constants/ProductSubMenu";
import {DiscoverSubMenu} from "../../constants/DiscoverSubMenu";
import {ServiceSubMenu} from "../../constants/ServiceSubMenu";

@Component({
  selector: 'app-guest-footer',
  templateUrl: './guest-footer.component.html',
  styleUrl: './guest-footer.component.scss'
})
export class GuestFooterComponent {

  protected readonly NavHeader = NavHeader;
  protected readonly ProductSubMenu = ProductSubMenu;
  protected readonly DiscoverSubMenu = DiscoverSubMenu;
  protected readonly ServiceSubMenu = ServiceSubMenu;

}
