import { actions } from "@/types";

export interface BasicSliceState {
  status: "idle" | "loading" | "completed" | "failed";
  error?: string;
  action: actions;
}
