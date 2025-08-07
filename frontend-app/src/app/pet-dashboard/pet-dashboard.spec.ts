import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDashboard } from './pet-dashboard';

describe('PetDashboard', () => {
  let component: PetDashboard;
  let fixture: ComponentFixture<PetDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
