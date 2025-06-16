// Role.model.ts
import { Permission } from "./Permission.model";

export class Role {
  uniqueId: number;
  roleName: string;
  permissions: Permission[];

  constructor(
    uniqueId: number,
    roleName: string,
    permissions: Permission[] = []
  ) {
    this.uniqueId = uniqueId;
    this.roleName = roleName;
    this.permissions = permissions;
  }

  getPermissionsDTO() {
    if (!this.permissions) return null;
    return this.permissions.map(permission => ({
      uniqueId: permission.uniqueId,
      groupName: permission.groupName,
      groupPermission: permission.groupPermission,
      activated: permission.activated
    }));
  }
}
