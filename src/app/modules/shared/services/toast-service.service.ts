import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  severity: string;
  summary: string;
  detail: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastServiceService {
  private notificationSubject = new BehaviorSubject<Notification | null>(null);
  notification$ = this.notificationSubject.asObservable();

  setNotification(notification: Notification) {
    if (!notification.detail) {
      notification.detail = 'Unkown Error Occured';
    }
    notification.summary = notification.summary.replace('undefined', '');
    this.notificationSubject.next(notification);
  }

  clearNotification() {
    this.notificationSubject.next(null);
  }

  constructor() {}
}
