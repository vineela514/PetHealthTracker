import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pet, MedicalHistory, DietInfo, MedicationInfo } from '../model/pet.model';

@Component({
  selector: 'app-pet-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent {
  pet: Pet = {
    name: '',
    age: 0,
    breed: '',
    weight: undefined,
    medicalHistory: [],
    diet: { schedule: '', foodBrand: '', portionSize: '' },
    medications: []
  };

  newHistory: MedicalHistory = { visitDate: '', diagnosis: '', treatment: '' };
  newMedication: MedicationInfo = { name: '', dosage: '', nextDose: '', refillDue: '' };

  addMedicalHistory() {
    this.pet.medicalHistory?.push({ ...this.newHistory });
    this.newHistory = { visitDate: '', diagnosis: '', treatment: '' };
  }

  addMedication() {
    this.pet.medications?.push({ ...this.newMedication });
    this.newMedication = { name: '', dosage: '', nextDose: '', refillDue: '' };
  }

  saveProfile() {
    // Save logic here (service or local storage)
    alert('Pet profile saved!');
  }
}
