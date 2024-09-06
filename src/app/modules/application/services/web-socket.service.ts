import { Injectable } from '@angular/core';
import { Client, Message, StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private client!: Client;
  private messageSubject = new BehaviorSubject<string>('');
  private subscription: StompSubscription | null = null;

  constructor() {
    this.initializeWebSocketClient();
  }

  private initializeWebSocketClient(): void {
    this.client = new Client({
      webSocketFactory: () => {
        const token = this.getAuthToken();
        return new SockJS(`${environment.apiUrl}/ws?token=${token}`);
      },
      connectHeaders: {
        Authorization: `Bearer ${this.getAuthToken()}`,
      },
      onConnect: this.onConnected.bind(this),
      onDisconnect: this.onDisconnected.bind(this),
      onStompError: this.onError.bind(this),
    });
  }

  private getAuthToken(): string {
    return localStorage.getItem('token') || '';
  }

  private onConnected(): void {
    console.log('Connected to WebSocket');
    this.subscription = this.client.subscribe('/topic/notifications', this.onMessageReceived.bind(this));
  }

  private onDisconnected(): void {
    console.log('Disconnected from WebSocket');
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  private onError(error: any): void {
    console.error('WebSocket error:', error);
    // Implement error handling logic here (e.g., reconnection, user notification)
  }

  private onMessageReceived(message: Message): void {
    this.messageSubject.next(message.body);
  }

  connect(): void {
    if (!this.client.active) {
      this.client.activate();
    }
  }

  disconnect(): void {
    if (this.client.active) {
      this.client.deactivate();
    }
  }

  sendMessage(message: string): void {
    if (this.client.active) {
      this.client.publish({ destination: '/app/hello', body: message });
    } else {
      console.error('WebSocket is not connected. Cannot send message.');
    }
  }

  getMessages(): Observable<string> {
    return this.messageSubject.asObservable();
  }
}