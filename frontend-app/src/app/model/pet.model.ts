export interface MedicalHistory {
  visitDate: string;
  diagnosis: string;
  treatment: string;
}

export interface DietInfo {
  schedule: string;
  foodBrand: string;
  portionSize: string;
}

export interface MedicationInfo {
  name: string;
  dosage: string;
  nextDose: string;
  refillDue?: string;
}

export interface Pet {
  id?: string;
  name: string;
  age: number;
  breed: string;
  weight?: number;
  medicalHistory?: MedicalHistory[];
  diet?: DietInfo;
  medications?: MedicationInfo[];
}
