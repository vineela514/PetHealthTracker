// app.component.ts
import { Component } from '@angular/core';
import { PetFormComponent } from './pet-form/pet-form.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PetDashboardComponent } from './pet-dashboard/pet-dashboard';
import { PetProfileComponent } from './pet-profile/pet-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PetFormComponent, ChatbotComponent, PetDashboardComponent, PetProfileComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
