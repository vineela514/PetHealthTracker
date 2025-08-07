import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatbotService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // Example endpoint
  private apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your key

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<string> {
    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }]
    };
    return this.http.post<any>(this.apiUrl, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      }
    }).pipe(
      map(res => res.choices?.[0]?.message?.content || 'No response')
    );
  }
}
