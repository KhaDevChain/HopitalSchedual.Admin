// User.model.ts

import { ActivateEnum } from "@/types/enum/action.enum";
import { Role } from "./Role.model";
import { UserRecord } from "./UserRecord.model";
import { TaskNote } from "./TaskNote.model";

export class User {
  uniqueId: string;
  phone: string;
  password: string;
  email: string;
  fullName?: string;
  createdAt: string; // ISO date string
  activated: ActivateEnum;
  role: Role;
  userRecord?: UserRecord; // mappedBy, có thể undefined
  taskNotes: TaskNote[];

  constructor(
    uniqueId: string,
    phone: string,
    password: string,
    email: string,
    fullName: string,
    activated: ActivateEnum,
    role: Role,
    taskNotes: TaskNote[] = [],
    userRecord?: UserRecord,
    createdAt: string = new Date().toISOString()
  ) {
    this.uniqueId = uniqueId;
    this.phone = phone;
    this.password = password;
    this.email = email;
    this.fullName = fullName;
    this.activated = activated;
    this.role = role;
    this.taskNotes = taskNotes;
    this.userRecord = userRecord;
    this.createdAt = createdAt;
  }

  getRoleDTO() {
    if (!this.role) return null;
    return {
      uniqueId: this.role.uniqueId,
      roleName: this.role.roleName,
      permissions: this.role.permissions,
    };
  }
}
