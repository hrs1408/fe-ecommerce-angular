import {Component} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent {
  title = 'ecommerce';

  constructor(
    private messageService: MessageService,
  ) {
  }
}
