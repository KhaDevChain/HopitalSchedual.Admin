import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService, AuthenManager } from "@/services/Auth.service";
import { BasicSliceState } from "./state";
const authenManager = new AuthenManager();
export const loginCall = createAsyncThunk("signin/login", async (data: any) => {
    const authenService = new AuthService();
    const response = authenService.login(data, authenManager);
    return response;
});
interface SigninState extends BasicSliceState {
    remember: boolean;
    authoried: boolean;
}
const initialState: SigninState = {
    remember: false,
    authoried: false,
    status: "idle",
    error: "",
    action: "VIE",
};

export const signinSlice = createSlice({
    name: "signin",
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.status = "idle";
        },
        setStatus: (state, payload) => {
            state.status = payload.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginCall.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loginCall.fulfilled, (state) => {
                state.status = "completed";
                state.authoried = true;
            })
            .addCase(loginCall.rejected, (state, action) => {
                state.status = "failed";
                const code = action.error.code ?? "SYSTEM_ERROR";
                state.error = code === "ERR_BAD_REQUEST"
                    ? "Wrong username or password"
                    : code;
            });
    },
});
export const { resetStatus, setStatus } = signinSlice.actions;
export default signinSlice.reducer;
