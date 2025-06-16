// Permission.model.ts

import { ActivateEnum } from '@/types/enum/action.enum';
import { Role } from './Role.model';

export class Permission {
  uniqueId: string;
  groupName: string;
  groupPermission: string;
  description?: string;
  createdAt: Date;
  activated: ActivateEnum;
  role: Role;

  constructor(
    uniqueId: string,
    groupName: string,
    groupPermission: string,
    activated: ActivateEnum,
    role: Role,
    createdAt?: Date,
    description?: string
  ) {
    this.uniqueId = uniqueId;
    this.groupName = groupName;
    this.groupPermission = groupPermission;
    this.description = description;
    this.createdAt = createdAt ?? new Date();
    this.activated = activated;
    this.role = role;
  }
}
