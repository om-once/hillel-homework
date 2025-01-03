import { legacy_createStore as createStore } from 'redux';

export const TYPES = {
	increment: 'INCREMENT',
	decrement: 'DECREMENT',
};

const defaultState = {
	count: 0,
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case TYPES.increment:
			return { ...state, count: state.count + 1 };
		case TYPES.decrement:
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};

export const store = createStore(reducer);
