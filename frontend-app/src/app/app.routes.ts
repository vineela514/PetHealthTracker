import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pet-form',
    loadComponent: () => import('./pet-form/pet-form.component').then(m => m.PetFormComponent)
  }
];
