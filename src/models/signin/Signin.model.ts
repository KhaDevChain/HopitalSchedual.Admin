class SigninModel {
	constructor(public username: string, public password: string) {
		this.username = username;
		this.password = password;
	}
	static initial(): SigninModel {
		return {
			username: "",
			password: "",
		};
	}
	static fromJson(json: any) {
		return new SigninModel(
			json?.username,
			json?.password
		);
	}
}

export default SigninModel;

