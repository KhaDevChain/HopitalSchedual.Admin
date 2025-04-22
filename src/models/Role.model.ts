import { RoleFunctionModel } from "./RoleFunction.model";


class FunctionModel {
  id: string;
  actions: string[];
  fields: {
    select: string[];
    update: string[];
  };
  functionCode: string;
  functionName: string;
  roleCode: string;
  constructor(
    id: string,
    actions: string[],
    fields: {
      select: string[];
      update: string[];
    },
    functionCode: string,
    functionName: string,
    roleCode: string
  ) {
    this.id = id;
    this.actions = actions;
    this.fields = fields;
    this.functionCode = functionCode;
    this.functionName = functionName;
    this.roleCode = roleCode;
  }
  static initial() {
    return {
      id: "",
      actions: [""],
      fields: {
        select: [],
        update: [],
      },
      functionCode: "",
      functionName: "",
      roleCode: "",
    };
  }
}

class RoleModel {
  id: string;
  code: string;
  name: string;
  functions: RoleFunctionModel[];
  storeCodes?: string[];
  status: string;
  constructor(
    id: string,
    code: string,
    name: string,
    functions: RoleFunctionModel[],
    status: string,
    storeCodes?: string[]
  ) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.functions = functions;
    this.status = status;
    this.storeCodes = storeCodes;
  }
  static initial() {
    return {
      id: "",
      code: "",
      name: "",
      functions: [],
      status: "ACTIVE",
      storeCodes: [],
    };
  }
}
export { RoleModel, FunctionModel };
