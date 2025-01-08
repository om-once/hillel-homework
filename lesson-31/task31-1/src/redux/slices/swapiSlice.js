import { createSlice } from '@reduxjs/toolkit';
import { API } from '../../constants/constants';

const initialState = { items: [], loading: false };

export const swapiSlice = createSlice({
	name: 'swapi',
	initialState,
	reducers: {
		fetchStart: state => {
			state.loading = true;
		},
		addItem: (state, action) => {
			state.items = [action.payload];
			state.loading = false;
		},
		fetchItem: (state, action) => {
			state.items = action.payload;
			state.loading = false;
		},
		clearItem: state => {
			state.items = [];
			state.loading = false;
		},
	},
});

export const { addItem, fetchItem, fetchStart, clearItem } = swapiSlice.actions;

export const addSwapiItem = text => async dispatch => {
	dispatch(fetchStart());
	try {
		const responseSwapi = await fetch(`${API.URL_SWAPI}/${text}`);
		const dataSwapi = await responseSwapi.json();

		const mockapiResponse = await fetch(API.URL_MOCKAPI);
		const mockapiData = await mockapiResponse.json();

		const existingItem = mockapiData.find(item => item.obj.id === dataSwapi.id);

		const method = existingItem ? 'PUT' : 'POST';
		const url = existingItem
			? `${API.URL_MOCKAPI}/${existingItem.id}`
			: API.URL_MOCKAPI;

		const responseMockapi = await fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ text, id: dataSwapi.id, obj: dataSwapi }),
		});

		const updatedData = await responseMockapi.json();

		dispatch(addItem({ text, id: updatedData.id, obj: dataSwapi }));
	} catch (error) {
		console.error('Error in addSwapiItem:', error);
	}
};

export const getSwapiItem = () => async dispatch => {
	try {
		const responseMockapi = await fetch(API.URL_MOCKAPI);
		const dataMockapi = await responseMockapi.json();
		dispatch(fetchItem(dataMockapi));
	} catch (e) {
		console.error(e);
	}
};

export const clearSwapiItems = () => async dispatch => {
	dispatch(fetchStart());
	try {
		const mockapiResponse = await fetch(API.URL_MOCKAPI);
		const mockapiData = await mockapiResponse.json();

		for (const item of mockapiData) {
			await fetch(`${API.URL_MOCKAPI}/${item.id}`, {
				method: 'DELETE',
			});
		}

		dispatch(clearItem());
	} catch (error) {
		console.error('Error clearing items:', error);
	}
};
