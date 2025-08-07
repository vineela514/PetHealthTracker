import { Component } from '@angular/core';
import { Pet } from '../models/pet.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html'
})
export class PetFormComponent {
  pet: Pet = { name: '', age: 0, breed: '' };

  constructor(private petService: PetService) {}

  onSubmit() {
    this.petService.addPet(this.pet).subscribe(response => {
      console.log('Pet added:', response);
      this.pet = { name: '', age: 0, breed: '' }; // Reset form
    });
  }
}
