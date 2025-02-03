import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_USERS } from '../API/API';

const initialState = {
	users: [],
	loading: false,
	token: null,
	error: null,
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		fetchStart: state => {
			state.loading = true;
			state.error = null;
		},
		authSuccess: (state, action) => {
			state.token = action.payload;
			state.loading = false;
		},
		authFail: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
		logout: state => {
			state.token = null;
		},
	},
});

export const { fetchStart, authSuccess, authFail, logout } = usersSlice.actions;

export const postUsersData =
	({ username, password, navigate }) =>
	async dispatch => {
		dispatch(fetchStart());
		try {
			const response = await axios.post(API_USERS, {
				username,
				password,
			});
			const { token } = response.data;

			localStorage.setItem('token', token);

			dispatch(authSuccess(token));
			navigate('/admin');
		} catch (error) {
			dispatch(authFail(error, 'Невірний логін або пароль'));
		}
	};

export default usersSlice.reducer;
