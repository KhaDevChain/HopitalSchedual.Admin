import { createSlice } from "@reduxjs/toolkit";
import { BussinessInfoState, RequestState } from "@/app/state";

export interface AuthState {
	user: any;
	role: any;
	tokens: any;
	loginState: RequestState;
	actionState: RequestState;
	BusinessInfo: BussinessInfoState;
}
const initialState: AuthState = {
	user: false,
	role: undefined,
	tokens: false,
	loginState: { status: "idle" },
	actionState: { status: "idle" },
	BusinessInfo: {
		city: "",
		dbName: "",
		email: "",
		name: "",
		phone: "",
		state: "",
		street1: "",
		street2: "",
		zipcode: "",
	},
};
// export const createMode: any = commonCreateAsyncThunk({
// 	type: "ath/createMode",
// 	action: CloverService.CreateMode,
// });

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		resetLoginState(state) {
			(state.loginState = { status: "idle" }), (state.actionState = { status: "idle" });
		},
		resetActionStateChange(state) {
			state.actionState = { status: "idle" };
		},
		setRole(state, action) {
			state.role = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			
	},
});
export const { resetLoginState, setRole, resetActionStateChange } = authSlice.actions;

export default authSlice.reducer;
