// Department.model.ts

import { ActivateEnum } from '@/types/enum/action.enum';
import { CheckupPart } from './CheckPart.model';
import { Specialty } from './Specialty.model';

export class Department {
  uniqueId: number;
  departmentName: string;
  note: string;
  createdAt: string;
  activated: ActivateEnum;
  checkupPart: CheckupPart;
  specialties: Specialty[];

  constructor(
    uniqueId: number,
    departmentName: string,
    note: string,
    activated: ActivateEnum,
    checkupPart: CheckupPart,
    specialties: Specialty[] = [],
    createdAt: string = new Date().toISOString()
  ) {
    this.uniqueId = uniqueId;
    this.departmentName = departmentName;
    this.note = note;
    this.activated = activated;
    this.checkupPart = checkupPart;
    this.specialties = specialties;
    this.createdAt = createdAt;
  }
}
