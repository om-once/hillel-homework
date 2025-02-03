import { createSlice } from '@reduxjs/toolkit';

const modalEditSlice = createSlice({
	name: 'modalEdit',
	initialState: {
		isOpen: false,
		editId: null,
	},
	reducers: {
		setEditModal: (state, action) => {
			state.isOpen = action.payload;
		},
		setEditId: (state, action) => {
			state.editId = action.payload;
		},
	},
});

export const { setEditModal, setEditId } = modalEditSlice.actions;

export default modalEditSlice.reducer;
