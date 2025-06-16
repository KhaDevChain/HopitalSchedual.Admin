// Prescription.model.ts

import { MedicalRecord } from './MedicalRecord.model';

export class Prescription {
  uniqueId?: number;
  medicalRecord: MedicalRecord;
  medicineName: string;
  dosage?: string;
  instruction?: string;

  constructor(
    medicalRecord: MedicalRecord,
    medicineName: string,
    dosage?: string,
    instruction?: string,
    uniqueId?: number
  ) {
    this.uniqueId = uniqueId;
    this.medicalRecord = medicalRecord;
    this.medicineName = medicineName;
    this.dosage = dosage;
    this.instruction = instruction;
  }
}
