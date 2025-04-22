import { StoresModel } from "./Stores.model";

class UsersModel {
  id: string;
  userId: string;
  code: string;
  avatar: {
    fileName: string;
    url: string;
  };
  username: string;
  lastName: string;
  firstName: string;
  phone: string;
  types: string[];
  roleCode: string;
  roleName: string;
  storeCodes: string[];
  stores: StoresModel[];
  status: string;
  attributes: {
    address?: string;
    gender?: string;
  };
  email: string;
  createdAt: string;
  constructor(
    id: string,
    userId: string,
    code: string,
    avatar: {
      fileName: string;
      url: string;
    },
    username: string,
    lastName: string,
    firstName: string,
    phone: string,
    types: string[],
    roleCode: string,
    roleName: string,
    storeCodes: string[],
    stores: StoresModel[],
    status: string,
    attributes: {
      address?: string;
      gender?: string;
    },
    email: string,
    createdAt: string
  ) {
    this.id = id;
    this.userId = userId;
    this.code = code;
    this.avatar = avatar;
    this.username = username;
    this.lastName = lastName;
    this.firstName = firstName;
    this.phone = phone;
    this.types = types;
    this.email = email;
    this.roleCode = roleCode;
    this.roleName = roleName;
    this.storeCodes = storeCodes;
    this.stores = stores;
    this.attributes = attributes;
    this.status = status;
    this.createdAt = createdAt;
  }
  static initial() {
    return {
      id: "",
      userId: "",
      code: "",
      avatar: {
        fileName: "",
        url: "",
      },
      username: "",
      lastName: "",
      firstName: "",
      phone: "",
      email: "",
      types: [],
      roleCode: "",
      roleName: "",
      storeCodes: [],
      stores: [],
      status: "ACTIVE",
      attributes: {
        gender: "",
      },
      createdAt: "",
    };
  }
}
export { UsersModel };
