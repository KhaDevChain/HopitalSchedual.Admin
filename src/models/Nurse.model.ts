// Nurse.model.ts

import { User } from './User.model';
import { UserRecord } from './UserRecord.model';
import { Specialty } from './Specialty.model';
import { Hopital } from './Hopital.model';

export class Nurse {
  uniqueId: string;
  specialization: string;
  nurseCode: string;
  licenseNumber?: string;
  user: User;
  userRecord: UserRecord;
  specialty: Specialty;
  hopital: Hopital;

  constructor(
    uniqueId: string,
    specialization: string,
    nurseCode: string,
    user: User,
    userRecord: UserRecord,
    specialty: Specialty,
    hopital: Hopital,
    licenseNumber?: string
  ) {
    this.uniqueId = uniqueId;
    this.specialization = specialization;
    this.nurseCode = nurseCode;
    this.licenseNumber = licenseNumber;
    this.user = user;
    this.userRecord = userRecord;
    this.specialty = specialty;
    this.hopital = hopital;
  }
}
