import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_PRODUCTS } from '../API/API';

const initialState = {
	products: [],
	loading: false,
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		fetchStart: state => {
			state.loading = true;
		},
		getProducts: (state, action) => {
			state.products = action.payload;
			state.loading = false;
		},
		postProducts: (state, action) => {
			state.products.push(action.payload);
			state.loading = false;
		},
		deleteProducts: (state, action) => {
			state.products = state.products.filter(
				product => product.id !== action.payload,
			);
			state.loading = false;
		},
		putProducts: (state, action) => {
			const updatedProduct = action.payload;
			state.products = state.products.map(product =>
				product.id === updatedProduct.id ? updatedProduct : product,
			);
			state.loading = false;
		},
	},
});

export const {
	fetchStart,
	getProducts,
	postProducts,
	deleteProducts,
	putProducts,
} = productsSlice.actions;

export const getProductsData = () => async dispatch => {
	dispatch(fetchStart());
	try {
		const response = await axios(API_PRODUCTS);
		const res = response.data;
		console.log(res);

		dispatch(getProducts(res));
	} catch (error) {
		console.error('Error in getTodoItem:', error);
	}
};

export const postProductsData =
	({ name, category, quantity, price, img }) =>
	async dispatch => {
		dispatch(fetchStart());
		try {
			const response = await axios.post(API_PRODUCTS, {
				_id: crypto.randomUUID(),
				name,
				category,
				quantity,
				price,
				img,
			});
			const res = response.data;
			console.log(res);

			dispatch(postProducts(res));
		} catch (error) {
			console.error('Error in postProductsData:', error);
		}
	};

export const deleteProductsData = id => async dispatch => {
	dispatch(fetchStart());
	try {
		const response = await axios.delete(`${API_PRODUCTS}/${id}`);
		const res = response.data;
		console.log(res);

		dispatch(deleteProducts(id));
		dispatch(getProductsData());
	} catch (error) {
		console.error('Error in deleteProductsData:', error);
	}
};

export const putProductsData =
	({ id, name, category, quantity, price, img }) =>
	async dispatch => {
		dispatch(fetchStart());
		try {
			await axios.put(`${API_PRODUCTS}/${id}`, {
				name,
				category,
				quantity,
				price,
				img,
			});

			dispatch(getProductsData());

			console.log('Product updated successfully');
		} catch (error) {
			console.error('Error in putProductsData:', error);
		}
	};
