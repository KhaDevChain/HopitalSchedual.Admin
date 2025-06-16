// UserRecord.model.ts

import { GenderEnum } from '@/types/enum/gender.enum';
import { User } from './User.model';

export class UserRecord {
  uniqueId: string;
  fullName: string;
  dateOfBirth?: Date;
  gender?: GenderEnum;
  address?: string;
  avatar?: string;
  user: User;

  constructor(
    uniqueId: string,
    fullName: string,
    user: User,
    dateOfBirth?: Date,
    gender?: GenderEnum,
    address?: string,
    avatar?: string
  ) {
    this.uniqueId = uniqueId;
    this.fullName = fullName;
    this.user = user;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.address = address;
    this.avatar = avatar;
  }
}
