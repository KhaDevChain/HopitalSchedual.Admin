class StoresModel {
    id: string;
    code: string;
    name: string;
    address: string;
    phone: string;
    parentId: string;
    childs: StoresModel[];
    status: string;
    active: boolean;
    createdAt: string;
    constructor(
      id: string,
      code: string,
      name: string,
      address: string,
      phone: string,
      parentId: string,
      childs: StoresModel[],
      status: string,
      active: boolean,
      createdAt: string
    ) {
      this.id = id;
      this.code = code;
      this.name = name;
      this.address = address;
      this.phone = phone;
      this.parentId = parentId;
      this.childs = childs;
      this.status = status;
      this.active = active;
      this.createdAt = createdAt;
    }
    static initial() {
      return {
        id: "",
        code: "",
        name: "",
        address: "",
        phone: "",
        parentId: "",
        childs: [],
        status: "ACTIVE",
        active: false,
        createdAt: "",
      };
    }
  }
  export { StoresModel };
  