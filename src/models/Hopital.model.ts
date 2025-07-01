// Hopital.model.ts

import { ActivateEnum } from "@/types/enum/action.enum";
import { HopitalTypeEnum } from "@/types/enum/hopitaltype.enum";
import { Doctor } from "./Doctor.model";

export class HopitalModel {
  uniqueId: string;
  name: string;
  code: string;
  address: string;
  email?: string;
  type: HopitalTypeEnum;
  taxCode?: string;
  website?: string;
  openWork?: string;
  closeWork?: string;
  logo: string;
  contract?: string;
  contractSize?: number;
  representName?: string;
  representPhone?: string;
  representJob?: string;
  activated: ActivateEnum;
  createdAt?: string;
  doctors?: Doctor[];

  constructor(
    uniqueId: string,
    name: string,
    code: string,
    address: string,
    email: string,
    type: HopitalTypeEnum,
    taxCode: string,
    website: string,
    openWork: string,
    closeWork: string,
    logo: string,
    contract: string,
    contractSize: number,
    representName: string,
    representPhone: string,
    representJob: string,
    activated: ActivateEnum,
    createdAt: string,
    doctors: Doctor[] = []
  ) {
    this.uniqueId = uniqueId;
    this.name = name;
    this.code = code;
    this.address = address;
    this.email = email;
    this.type = type
    this.taxCode = taxCode;
    this.website = website;
    this.openWork = openWork;
    this.closeWork = closeWork;
    this.logo = logo;
    this.contract = contract;
    this.contractSize = contractSize;
    this.representName = representName;
    this.representPhone = representPhone;
    this.representJob = representJob;
    this.activated = activated;
    this.createdAt = createdAt;
    this.doctors = doctors;
  }

}
