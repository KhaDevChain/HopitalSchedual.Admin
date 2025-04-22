import { Action, Dispatch } from "@reduxjs/toolkit";
import { setLogined } from "@/slice/app.slice";
export const customMiddleware =
  ({ dispatch }: { dispatch: Dispatch<Action> }) =>
  (next: (arg0: any) => void) =>
  (action: any) => {
    if (action.payload) {
      const { message } = action.payload;
      if (message) {
        if (message === "Invalid refresh token!") {
          dispatch(setLogined(false));
          window.location.replace("/signin");
          return;
        }
      }
    }
    next(action);
  };
