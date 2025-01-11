import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], loading: false };

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		fetchStart: state => {
			state.loading = true;
		},
		addTodo: state => {
			state.loading = true;
		},
		addItem: (state, action) => {
			state.items.push(action.payload);
			state.loading = false;
		},
		fetchItems: (state, action) => {
			state.items = action.payload;
			state.loading = false;
		},
		deleteTodo: state => {
			state.loading = true;
		},
		completeTodo: state => {
			state.loading = true;
		},
		editTodo: state => {
			state.loading = true;
		},
		clearTodos: state => {
			state.loading = true;
		},
		deleteItem: (state, action) => {
			state.items = state.items.filter(item => item.id !== action.payload.id);
			state.loading = false;
		},
		completeItem: (state, action) => {
			state.items = state.items.map(item => {
				if (item.id === action.payload.id) {
					item.complete = action.payload.complete;
				}
				return item;
			});
			state.loading = false;
		},
		editItem: (state, action) => {
			state.items = state.items.map(item => {
				if (item.id === action.payload.id) {
					item.text = action.payload.text;
				}
				return item;
			});
			state.loading = false;
		},
		clearItems: state => {
			state.items = [];
			state.loading = false;
		},
	},
});

export const {
	addItem,
	fetchStart,
	fetchItems,
	deleteTodo,
	deleteItem,
	addTodo,
	completeTodo,
	completeItem,
	editTodo,
	editItem,
	clearTodos,
	clearItems,
} = todosSlice.actions;
