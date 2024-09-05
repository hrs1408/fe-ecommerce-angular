import { Component, HostListener } from '@angular/core';
import { NavHeader } from "../../constants/NavHeader";
import { ProductSubMenu } from "../../constants/ProductSubMenu";
import { DiscoverSubMenu } from "../../constants/DiscoverSubMenu";
import { ServiceSubMenu } from "../../constants/ServiceSubMenu";

@Component({
  selector: 'app-guest-sub-header',
  templateUrl: './guest-sub-header.component.html',
  styleUrls: ['./guest-sub-header.component.scss']
})
export class GuestSubHeaderComponent {
  isMenuOpen = false;
  activeMenuItem: string | null = null;

  protected readonly NavHeader = NavHeader;
  protected readonly ProductSubMenu = ProductSubMenu;
  protected readonly DiscoverSubMenu = DiscoverSubMenu;
  protected readonly ServiceSubMenu = ServiceSubMenu;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.activeMenuItem = null;
    }
  }

  toggleSubMenu(itemName: string) {
    this.activeMenuItem = this.activeMenuItem === itemName ? null : itemName;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 1024 && this.isMenuOpen) {
      this.isMenuOpen = false;
      this.activeMenuItem = null;
    }
  }
}
