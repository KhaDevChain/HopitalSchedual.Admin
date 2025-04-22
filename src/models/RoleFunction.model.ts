export type FieldType = {
    [key in "select" | "update"]: string[];
  };
  
  class RoleFunctionModel {
    _id: string;
    roleCode: string;
    roleName: string;
    functionCode: string;
    functionName: string;
    actions: string[];
    fields: FieldType;
    constructor(
      _id: string,
      roleCode: string,
      roleName: string,
      functionCode: string,
      functionName: string,
      actions: string[],
      fields: FieldType
    ) {
      this._id = _id;
      this.roleCode = roleCode;
      this.roleName = roleName;
      this.functionCode = functionCode;
      this.functionName = functionName;
      this.actions = actions;
      this.fields = fields;
    }
    static initial() {
      return {
        _id: "",
        roleCode: "",
        roleName: "",
        functionCode: "",
        functionName: "",
        actions: [],
        fields: { select: [], update: [] },
      };
    }
  }
  export { RoleFunctionModel };
  