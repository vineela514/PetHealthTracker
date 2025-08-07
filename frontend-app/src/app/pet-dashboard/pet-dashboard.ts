import { Component, Input } from '@angular/core';

export interface PetSummary {
  name: string;
  age: number;
  weight: number;
  breed: string;
}

export interface Appointment {
  type: string;
  date: string;
  notes?: string;
}

export interface MedicationReminder {
  medication: string;
  nextDose: string;
  refillDue?: string;
}

@Component({
  selector: 'app-pet-dashboard',
  standalone: true,
  templateUrl: './pet-dashboard.html',
  styleUrls: ['./pet-dashboard.css']
})
export class PetDashboardComponent {
  @Input() pet: PetSummary = { name: 'Buddy', age: 3, weight: 12, breed: 'Beagle' };
  @Input() appointments: Appointment[] = [
    { type: 'Vet Visit', date: '2025-08-10', notes: 'Annual checkup' },
    { type: 'Grooming', date: '2025-08-15' }
  ];
  @Input() medicationReminders: MedicationReminder[] = [
    { medication: 'Heartworm', nextDose: '2025-08-09', refillDue: '2025-08-30' },
    { medication: 'Flea & Tick', nextDose: '2025-08-12' }
  ];
}
