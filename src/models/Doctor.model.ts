// Doctor.model.ts

import { User } from './User.model';
import { UserRecord } from './UserRecord.model';
import { Specialty } from './Specialty.model';
import { Hopital } from './Hopital.model';

export class Doctor {
  uniqueId: string;
  specialization: string;
  experienceYears: number;
  licenseNumber: string;
  user: User;
  userRecord: UserRecord;
  specialty: Specialty;
  hopital: Hopital;

  constructor(
    uniqueId: string,
    specialization: string,
    experienceYears: number,
    licenseNumber: string,
    user: User,
    userRecord: UserRecord,
    specialty: Specialty,
    hopital: Hopital
  ) {
    this.uniqueId = uniqueId;
    this.specialization = specialization;
    this.experienceYears = experienceYears;
    this.licenseNumber = licenseNumber;
    this.user = user;
    this.userRecord = userRecord;
    this.specialty = specialty;
    this.hopital = hopital;
  }
}
