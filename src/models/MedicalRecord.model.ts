// MedicalRecord.model.ts

import { Doctor } from './Doctor.model';
import { Patient } from './Patient.model';
import { Prescription } from './Preceiption.model';

export class MedicalRecord {
  uniqueId?: number;
  patient: Patient;
  doctor: Doctor;
  symptom?: string;
  diagnose?: string;
  treatment?: string;
  prescriptions: Prescription[];
  createdAt: Date;

  constructor(
    patient: Patient,
    doctor: Doctor,
    prescriptions: Prescription[] = [],
    createdAt: Date = new Date(),
    symptom?: string,
    diagnose?: string,
    treatment?: string,
    uniqueId?: number
  ) {
    this.uniqueId = uniqueId;
    this.patient = patient;
    this.doctor = doctor;
    this.symptom = symptom;
    this.diagnose = diagnose;
    this.treatment = treatment;
    this.prescriptions = prescriptions;
    this.createdAt = createdAt;
  }
}
