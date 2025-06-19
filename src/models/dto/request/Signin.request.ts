export class SigninRequest {
	constructor(public phone: null, public email: string, public password: string) {
		this.phone = phone;
		this.email = email;
		this.password = password;
	}
	static initial(): SigninRequest {
		return {
			phone: null,
			email: "",
			password: "",
		};
	}
	static fromJson(json: any) {
		return new SigninRequest(
			null,
			json?.email,
			json?.password
		);
	}
}

