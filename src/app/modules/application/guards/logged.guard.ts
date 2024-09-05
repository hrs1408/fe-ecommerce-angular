import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { getToken } from '../../shared/functions/storage';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (getToken() !== null) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
