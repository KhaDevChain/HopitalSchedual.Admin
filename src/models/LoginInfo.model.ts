class LoginInfo {
    username: string;
    password: string;
    remember: boolean;
    constructor(username: string, password: string, remember: boolean) {
      this.username = username;
      this.password = password;
      this.remember = remember;
    }
  }
  
  export { LoginInfo };
  