import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './features/usersSlice/usersSlice';
import { productsSlice } from './features/productsSlice/productsSlice';
import { modalSlice } from './features/modalSlice/modalSlice';
import modalEditReducer from './features/modalEditSlice/modalEditSlice';

export const store = configureStore({
	reducer: {
		users: usersSlice.reducer,
		products: productsSlice.reducer,
		modalState: modalSlice.reducer,
		modalEdit: modalEditReducer,
	},
});
