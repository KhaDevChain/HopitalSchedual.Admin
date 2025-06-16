// Specialty.model.ts

import { Department } from "./Department.mode";
import { Doctor } from "./Doctor.model";
import { Nurse } from "./Nurse.model";

export class Specialty {
  uniqueId: number;
  specialtyName: string;
  department: Department;
  doctors: Doctor[];
  nurses: Nurse[];

  constructor(
    uniqueId: number,
    specialtyName: string,
    department: Department,
    doctors: Doctor[] = [],
    nurses: Nurse[] = []
  ) {
    this.uniqueId = uniqueId;
    this.specialtyName = specialtyName;
    this.department = department;
    this.doctors = doctors;
    this.nurses = nurses;
  }
}
