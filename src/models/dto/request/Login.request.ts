export class LoginRequest {
	constructor(public phone: null, public email: string, public password: string) {
		this.phone = phone;
		this.email = email;
		this.password = password;
	}
	static initial(): LoginRequest {
		return {
			phone: null,
			email: "",
			password: "",
		};
	}
	static fromJson(json: any) {
		return new LoginRequest(
			null,
			json?.email,
			json?.password
		);
	}
}

