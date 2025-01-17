import { createSlice } from '@reduxjs/toolkit';
import { API } from '../../constants/constants';

const initialState = { items: [], loading: false };

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		fetchStart: state => {
			state.loading = true;
		},
		addTodo: (state, action) => {
			state.items.push(action.payload);
			state.loading = false;
		},
		getTodo: (state, action) => {
			state.items = action.payload;
			state.loading = false;
		},
		deleteTodo: (state, action) => {
			state.items = state.items.filter(item => item.id !== action.payload);
			state.loading = false;
		},
		completeTodo: (state, action) => {
			state.items = state.items.map(item => {
				if (item.id === action.payload) {
					item.complete = !item.complete;
				}
				return item;
			});
			state.loading = false;
		},
	},
});

export const { addTodo, fetchStart, getTodo, deleteTodo, completeTodo } =
	todoSlice.actions;

export const addTodoItem = text => async dispatch => {
	dispatch(fetchStart());
	try {
		const response = await fetch(API.URL_MOCKAPI_TODO, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ text, complete: false }),
		});
		const todo = await response.json();

		dispatch(addTodo(todo));
	} catch (error) {
		console.error('Error in addTodoItem:', error);
	}
};

export const getTodoItem = () => async dispatch => {
	dispatch(fetchStart());
	try {
		const response = await fetch(API.URL_MOCKAPI_TODO);
		const todos = await response.json();
		dispatch(getTodo(todos));
	} catch (error) {
		console.error('Error in getTodoItem:', error);
	}
};

export const deleteTodoItem = id => async dispatch => {
	dispatch(fetchStart());
	try {
		await fetch(`${API.URL_MOCKAPI_TODO}/${id}`, {
			method: 'DELETE',
		});
		dispatch(deleteTodo(id));
	} catch (error) {
		console.error('Error in deleteTodoItem:', error);
	}
};

export const completeTodoItem = id => async (dispatch, getState) => {
	const state = getState();
	dispatch(fetchStart());
	try {
		await fetch(`${API.URL_MOCKAPI_TODO}/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ complete: !state.todos.items.complete }),
		});
		dispatch(completeTodo(id));
	} catch (error) {
		console.error('Error in completeTodoItem:', error);
	}
};
