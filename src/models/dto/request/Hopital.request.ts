import { ActivateEnum } from "@/types/enum/action.enum";
import { HopitalTypeEnum } from "@/types/enum/hopitaltype.enum";

export class HopitalRequest {
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
	  representName?: string;
	  representJob?: string;
	  activated: ActivateEnum;
	  doctorsId?: string
	
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
		representName: string,
		representJob: string,
		activated: ActivateEnum,
		doctorsId: string
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
		this.representName = representName;
		this.representJob = representJob;
		this.activated = activated;
		this.doctorsId = doctorsId;
	  }
}

