
import { RoleModel } from "@/models/Role.model";
import { UsersModel } from "@/models/Users.model";
import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  refreshToken: string;
  expired: boolean;
  logined: boolean;
  user: any;
  language: string;
  avatar: string;
  firstName: string;
  lastName: string;
  storeCode: string;
  loadChangeStore: boolean;
  role: RoleModel;
  typeAccess: string;
}
const initialState: AppState = {
  expired: false,
  refreshToken: "",
  logined: false,
  user: null,
  language: "vi",
  avatar: "",
  firstName: (JSON.parse(localStorage.getItem("user") as string) as UsersModel)
    ?.firstName,
  lastName: (JSON.parse(localStorage.getItem("user") as string) as UsersModel)
    ?.lastName,
  storeCode: "",
  role: JSON.parse(localStorage.getItem("user") as string) as RoleModel,
  typeAccess: localStorage.getItem("typeAccess") as string,
  loadChangeStore: false,
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setLogined(state, action) {
      state.logined = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setAvatar(state, action) {
      state.avatar = action.payload;
    },
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
    setLastName(state, action) {
      state.lastName = action.payload;
    },
    setStoreCode(state, action) {
      state.storeCode = action.payload;
    },
    setRole(state, action) {
      state.role = action.payload;
    },
    setTypeAccess(state, action) {
      state.typeAccess = action.payload;
    },
    setLoadChangeStore(state, action) {
      state.loadChangeStore = action.payload;
    },
    setRefreshToken(state, action) {
			state.refreshToken = action.payload;
		},
    setExpired(state, action) {
			state.expired = action.payload;
		}
  },
});
export const {
  setExpired,
  setLanguage,
  setLogined,
  setUser,
  setAvatar,
  setFirstName,
  setLastName,
  setStoreCode,
  setRole,
  setTypeAccess,
  setLoadChangeStore,
  setRefreshToken
} = appSlice.actions;
export default appSlice.reducer;
