import { User } from "@/models/User.model";

export class LoginResponse {
	constructor(
        public token: string|null, 
        public user: User|null, 
		public code?: number,
		public message?: string
    ) {
		this.token = token;
		this.user = user;
		this.code = code;
		this.message = message;
	}
	static fromJson(json: any) {
		return new LoginResponse(
			json.token,
			json.user,
			json.code,
			json.message
		);
	}
}

