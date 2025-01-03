import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

export default createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
		},
	},
});
