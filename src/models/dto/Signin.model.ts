export class SigninDTO {
	constructor(public email: string, public password: string) {
		this.email = email;
		this.password = password;
	}
	static initial(): SigninDTO {
		return {
			email: "",
			password: "",
		};
	}
	static fromJson(json: any) {
		return new SigninDTO(
			json?.username,
			json?.password
		);
	}
}

