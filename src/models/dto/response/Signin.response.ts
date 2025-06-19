export class SigninResponse {
	constructor(
        public token: string|null, 
        public email: string|null, 
		public code?: number,
		public message?: string
    ) {
		this.token = token;
		this.email = email;
		this.code = code;
		this.message = message;
	}
	static fromJson(json: any) {
		return new SigninResponse(
			json.token,
			json.email,
			json.code,
			json.message
		);
	}
}

