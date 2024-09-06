import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {WebSocketService} from "./modules/application/services/web-socket.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  title = 'ecommerce';

  constructor(
    private messageService: MessageService,
    private websocketService: WebSocketService
  ) {
  }

  ngOnInit() {
    this.websocketService.connect();
    this.subscription = this.websocketService.getMessages().subscribe(
      (message: string) => {
        console.log('Received message:', message);
      }
    );
  }

  ngOnDestroy() {
    this.websocketService.disconnect();
  }
}
