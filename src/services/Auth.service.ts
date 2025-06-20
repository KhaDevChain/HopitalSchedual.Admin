import { LoginRequest } from "@/models/dto/request/Login.request";
import { HttpService } from "./http/HttpService";
import { LoginResponse } from "@/models/dto/response/Login.response";
import axios from "axios";
import { User } from "@/models/User.model";
import { Role } from "@/models/Role.model";
import { TaskNote } from "@/models/TaskNote.model";
import { UserRecord } from "@/models/UserRecord.model";
import { ActivateEnum } from "@/types/enum/action.enum";
import { BasicResponse } from "@/models/dto/response/Basic.response";

// Service để đăng nhập
class AuthService {

  static async login(payload: LoginRequest): Promise<LoginResponse> {
    try {
      const res = await HttpService.post("/auth/login", payload, {
        withCredentials: true
      });
      return new LoginResponse(res.data?.accessToken, res.data?.user, res.status, "Đăng nhập thành công");
    } catch (error: unknown) {
      return AuthService.handleError(error, "Đăng nhập thất bại");
    }
  }

  static async getCurrentUser(): Promise<User|null> {
    try {
      const res = await HttpService.post("/user/me", {});
      
      const json = res.data;
      const user = json.data;

      const role = new Role(
        user.roleDto.uniqueId,
        user.roleDto.roleName,
        user.roleDto.permissions
      );

      const taskNotes = (user.taskNotes || []).map(
        (note: any) =>
          new TaskNote(
            note.uniqueId,
            note.title,
            note.description,
            note.createdAt
          )
      );

      const userRecord = user.userRecord
        ? new UserRecord(
            user.userRecord.uniqueId,
            user.userRecord.history,
            user.userRecord.modifiedAt
          )
        : undefined;

      return new User(
        user.uniqueId,
        user.phone,
        user.password,
        user.email,
        user.fullName,
        user.activated as ActivateEnum,
        role,
        taskNotes,
        userRecord,
        user.createdAt ?? new Date().toISOString()
      );
    } catch (error: unknown) {
      return null;
    }
  }

  static async refreshToken(): Promise<BasicResponse> {
    try {
      const res = await HttpService.post("/refresh-token", {});
      return new BasicResponse(res.status, "Làm mới token thành công");
    } catch (error: unknown) {
      return new BasicResponse(500, "Lỗi làm mới token");
    }
  }

  static async logout() {
    try {
      const res = await HttpService.post("/auth/logout", {});
      return new LoginResponse(res.data?.accessToken, res.data?.user, res.status, "Đăng xuất thành công");
    } catch (error: unknown) {
      return AuthService.handleError(error, "Lỗi đăng xuất");
    }
  }

  // Lỗi phát sinh
  private static handleError(error: unknown, defaultMsg: string): LoginResponse {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || defaultMsg;
      return new LoginResponse(null, null, status, message);
    }
    return new LoginResponse(null, null, 500, defaultMsg);
  }
}

export default AuthService;
