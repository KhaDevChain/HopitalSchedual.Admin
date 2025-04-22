
import { LoginInfo } from "@/models/LoginInfo.model";
import { HttpService } from "./http/HttpService";
import { parseCommonHttpResult } from "./http/parseCommonHttpResult";

interface Authen {
  authenticate(args: LoginInfo): any;
}
class LocalAuthen implements Authen {
  async authenticate(arg: LoginInfo) {
    const response = await HttpService.doPostRequest(
      "/auth/login",
      {
        username: arg.username,
        password: arg.password,
      },
      false
    );
    if (response.status == 200) {
      const data = response.data.data;
      localStorage.setItem("username", arg.username);
      if (arg.remember) {
        localStorage.setItem("remember_username", arg.username);
        localStorage.setItem("remember_password", arg.password);
      } else {
        localStorage.removeItem("remember_username");
        localStorage.removeItem("remember_password");
      }
      localStorage.setItem("accessToken", data.tokens.access);
      HttpService.setToken(data.tokens.access);
      localStorage.setItem("refreshToken", data.tokens.refresh);
      HttpService.setLocalRefToken(data.tokens.refresh);
      localStorage.setItem("role", JSON.stringify(data.role));
      localStorage.setItem("typeAccess", data.typeAccess);
      localStorage.setItem("userId", data.profile.userId);
      localStorage.setItem("user", JSON.stringify(data.profile));
      localStorage.setItem("myStore", JSON.stringify(data.profile.stores));
      return data.profile;
    }
    return { code: response.status, message: response.statusText };
  }
}
class AuthenManager {
  executeAuthenticate(arg: LoginInfo) {
    if (arg instanceof LoginInfo) {
      return new LocalAuthen().authenticate(arg);
    }
  }
}
class AuthenEventHandler {
  constructor(public authenManager: AuthenManager) {}
  handleAuthen(arg: LoginInfo) {
    return this.authenManager.executeAuthenticate(arg);
  }
}
class AuthService {
  login(arg: LoginInfo, authenManager: AuthenManager) {
    const authenHandler = new AuthenEventHandler(authenManager);
    return authenHandler.handleAuthen(arg);
  }
  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    HttpService.setToken("");
    localStorage.removeItem("refreshToken");
    HttpService.setLocalRefToken("");
    localStorage.removeItem("userId");
    localStorage.removeItem("user");
  }
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
  async changePassword(data: any) {
    const res = await HttpService.doPatchRequest(`/auth/password/change`, data);
    return parseCommonHttpResult(res);
  }
  async resetPassword(data: any) {
    const res = await HttpService.doPatchRequest(`/auth/password/reset`, data);
    return parseCommonHttpResult(res);
  }
}
export { AuthService, AuthenManager, LocalAuthen, AuthenEventHandler };
