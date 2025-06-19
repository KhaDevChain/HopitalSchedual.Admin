import { SigninRequest } from "@/models/dto/request/Signin.request";
import { HttpService } from "./http/HttpService";
import { SigninResponse } from "@/models/dto/response/Signin.response";
import axios from "axios";
import { User } from "@/models/User.model";
import { Role } from "@/models/Role.model";
import { TaskNote } from "@/models/TaskNote.model";
import { UserRecord } from "@/models/UserRecord.model";
import { ActivateEnum } from "@/types/enum/action.enum";

// Service để đăng nhập
class AuthService {

  static async login(payload: SigninRequest): Promise<SigninResponse> {
    try {
      const res = await HttpService.post("/auth/login", payload, {
        withCredentials: true
      });
      return new SigninResponse(res.data?.accessToken, res.data?.user, res.status, "Đăng nhập thành công");
    } catch (error: unknown) {
      return AuthService.handleError(error, "Đăng nhập thất bại");
    }
  }

  static async getCurrentUser(): Promise<User|null> {
    try {
      const res = await HttpService.post("/user/me", {});
      const data = res.data;

      const role = new Role(
        data.role.uniqueId,
        data.role.roleName,
        data.role.permissions
      );

      const taskNotes = (data.taskNotes || []).map(
        (note: any) =>
          new TaskNote(
            note.uniqueId,
            note.title,
            note.description,
            note.createdAt
          )
      );

      const userRecord = data.userRecord
        ? new UserRecord(
            data.userRecord.uniqueId,
            data.userRecord.history,
            data.userRecord.modifiedAt
          )
        : undefined;

      return new User(
        data.uniqueId,
        data.phone,
        data.password,
        data.email,
        data.fullName,
        data.activated as ActivateEnum,
        role,
        taskNotes,
        userRecord,
        data.createdAt ?? new Date().toISOString()
      );
    } catch (error: unknown) {
      return null;
    }
  }

  static async logout() {
    try {
      const res = await HttpService.post("/auth/logout", {});
      return new SigninResponse(res.data?.accessToken, res.data?.user, res.status, "Đăng xuất thành công");
    } catch (error: unknown) {
      return AuthService.handleError(error, "Lỗi đăng xuất");
    }
  }

  // Lỗi phát sinh
  private static handleError(error: unknown, defaultMsg: string): SigninResponse {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || defaultMsg;
      return new SigninResponse(null, null, status, message);
    }
    return new SigninResponse(null, null, 500, defaultMsg);
  }
}

export default AuthService;
