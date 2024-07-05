import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import {CommonModule, NgFor} from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {
    
  }
}
