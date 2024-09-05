import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ToastServiceService } from '../../services/toast-service.service';

@Component({
  selector: 'app-toast-handler',
  styleUrl: './toast-handler.component.scss',
  template: '<p-toast></p-toast>',
  providers: [MessageService],
})
export class ToastHandlerComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;

  constructor(
    private messageService: MessageService,
    private notificationService: ToastServiceService
  ) {}

  ngOnInit() {
    this.subscription = this.notificationService.notification$.subscribe(
      (notification) => {
        if (notification) {
          this.messageService.add(notification);
          this.notificationService.clearNotification();
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
