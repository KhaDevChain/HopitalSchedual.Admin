import { Department } from "./Department.mode";

export class CheckupPart {
  uniqueId: number;
  partName: string;
  departments?: Department[];
  
  constructor(
    uniqueId: number,
    partName: string,
    departments: Department[]
  ) {
    this.uniqueId = uniqueId;
    this.partName = partName;
    this.departments = departments;
  }
}