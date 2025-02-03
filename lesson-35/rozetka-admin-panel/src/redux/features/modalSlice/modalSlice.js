import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const modalSlice = createSlice({
	name: 'modalAddEdit',
	initialState,
	reducers: {
		setStateModal: state => !state,
	},
});

export const { setStateModal } = modalSlice.actions;

export default modalSlice.reducer;
