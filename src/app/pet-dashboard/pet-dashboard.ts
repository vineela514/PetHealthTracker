import { Component } from '@angular/core';

@Component({
  selector: 'app-pet-dashboard',
  templateUrl: './pet-dashboard.html',
  styleUrls: ['./pet-dashboard.css']
})
export class PetDashboardComponent {
  petVaccinations = {
    distemper: true,
    parvovirus: false
  };

  foodSchedule = {
    morning: '8:00 AM',
    evening: '6:00 PM'
  };
}
