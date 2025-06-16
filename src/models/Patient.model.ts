// models/Patient.model.ts

import { BloodEnum } from '@/types/enum/blood.enum';
import { User } from './User.model';
import { UserRecord } from './UserRecord.model';

export class Patient {
  uniqueId: string;
  medicalHistory?: string;
  bloodType?: BloodEnum;
  insuranceId?: string;
  user: User;
  userRecord: UserRecord;

  constructor(
    uniqueId: string,
    user: User,
    userRecord: UserRecord,
    medicalHistory?: string,
    bloodType?: BloodEnum,
    insuranceId?: string
  ) {
    this.uniqueId = uniqueId;
    this.user = user;
    this.userRecord = userRecord;
    this.medicalHistory = medicalHistory;
    this.bloodType = bloodType;
    this.insuranceId = insuranceId;
  }
}
