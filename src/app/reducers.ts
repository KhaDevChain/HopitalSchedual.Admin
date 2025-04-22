import appSlice from "@/slice/app.slice";
import signinSlice from "@/slice/signin.slice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    app: appSlice,
    signin: signinSlice
  });
  export default rootReducer;