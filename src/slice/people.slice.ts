import { createSlice } from "@reduxjs/toolkit";
import { commonCreateAsyncThunk } from "../app/thunk";
import { RequestState } from "../app/state";
import { actions } from "../types";
import PeopleModel from "@/models/People.model";
import { PeopleService } from "@/services/People.service";

export interface PeopleState {
	list: PeopleModel[];
	filtered: PeopleModel[];
	item: PeopleModel | undefined;
	fetchState: RequestState;
	actionState: RequestState;
	currentPage: number;
	currentRows: number;
	action: actions;
	successMessage: string;
}
const initialState: PeopleState = {
	list: [],
	filtered: [],
	item: undefined,
	fetchState: { status: "idle" },
	actionState: { status: "idle" },
	currentPage: 1,
	currentRows: 10,
	action: "INS",
	successMessage: "",
};
export const fetchContacts: any = commonCreateAsyncThunk({ type: "peoples/getContacts", action: PeopleService.fetchContacts });
export const fetchContact: any = commonCreateAsyncThunk({ type: "peoples/getContact", action: PeopleService.getContact });
export const PeopleSlice = createSlice({
	name: "role",
	initialState,
	reducers: {
		changeAction: (state, action) => {
			state.action = action.payload;
		},
		selectItem(state, action) {
			state.item = action.payload;
		},
		resetFetchState(state) {
			state.fetchState = { status: "idle" };
		},
		resetActionState(state) {
			state.actionState = { status: "idle" };
		},
		resetActionStateContact(state) {
			state.actionState = { status: "idle" };
		},
		setFiltered(state, action) {
			state.filtered = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setCurrentRows: (state, action) => {
			state.currentRows = action.payload;
		},
	},
});
export const {
	selectItem,
	resetFetchState,
	setFiltered,
	resetActionState,
	setCurrentPage,
	setCurrentRows,
	resetActionStateContact,
	changeAction,
} = PeopleSlice.actions;

export default PeopleSlice.reducer;
