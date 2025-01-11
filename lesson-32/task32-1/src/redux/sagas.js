import { all } from 'redux-saga/effects';
import {
	watchAddTodo,
	watchClearTodos,
	watchCompleteTodo,
	watchDeleteTodo,
	watchEditTodo,
	watchFetchTodos,
} from './sagaWatchers/sagaWatchers';

export function fetchHelper(url, options) {
	return fetch(url, options).then(response => {
		if (!response.ok) {
			throw new Error('http error');
		}
		return response.json();
	});
}

export default function* rootSaga() {
	yield all([
		watchFetchTodos(),
		watchDeleteTodo(),
		watchAddTodo(),
		watchCompleteTodo(),
		watchEditTodo(),
		watchClearTodos(),
	]);
}
