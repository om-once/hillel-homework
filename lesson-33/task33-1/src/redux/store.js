import { configureStore } from '@reduxjs/toolkit';
import { swapiSlice } from './slices/swapiSlice';
import { todoSlice } from './slices/todoSlice';

export const store = configureStore({
	reducer: {
		swapi: swapiSlice.reducer,
		todos: todoSlice.reducer,
	},
});
