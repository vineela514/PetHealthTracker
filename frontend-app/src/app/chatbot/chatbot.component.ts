import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotService } from '../services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: { sender: string, text: string }[] = [];
  userInput: string = '';
  loading: boolean = false;

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    if (!this.userInput.trim()) return;
    this.messages.push({ sender: 'User', text: this.userInput });
    this.loading = true;
    this.chatbotService.sendMessage(this.userInput).subscribe(
      (response: string) => {
        this.messages.push({ sender: 'Bot', text: response });
        this.loading = false;
      },
      () => {
        this.messages.push({ sender: 'Bot', text: 'Sorry, something went wrong.' });
        this.loading = false;
      }
    );
    this.userInput = '';
  }
}
