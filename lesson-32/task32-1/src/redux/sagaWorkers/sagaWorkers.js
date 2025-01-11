import { call, put, select } from 'redux-saga/effects';
import { API } from '../constants/constants';
import {
	addItem,
	clearItems,
	completeItem,
	deleteItem,
	editItem,
	fetchItems,
} from '../slices/todosSlice';
import { fetchHelper } from '../sagas';

export function* fetchItemsSaga() {
	try {
		const todos = yield call(fetchHelper, API.API_URL);
		yield put(fetchItems(todos));
	} catch (e) {
		console.error(e);
	}
}

export function* deleteItemSaga(action) {
	try {
		const todo = yield call(fetchHelper, `${API.API_URL}/${action.payload}`, {
			method: 'DELETE',
		});
		yield put(deleteItem(todo));
	} catch (e) {
		console.error(e);
	}
}

export function* addItemSaga(action) {
	try {
		const todo = yield call(fetchHelper, API.API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				text: action.payload,
				complete: false,
			}),
		});
		yield put(addItem(todo));
	} catch (e) {
		console.error(e);
	}
}

export function* completeItemSaga(action) {
	try {
		const currentTodo = yield select(state =>
			state.todos.items.find(item => item.id === action.payload),
		);

		const updatedComplete = !currentTodo.complete;

		const updatedTodo = yield call(
			fetchHelper,
			`${API.API_URL}/${action.payload}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					complete: updatedComplete,
				}),
			},
		);

		yield put(
			completeItem({
				id: action.payload,
				complete: updatedTodo.complete,
			}),
		);
	} catch (e) {
		console.error(e);
	}
}

export function* editItemSaga(action) {
	try {
		const { id, text } = action.payload;

		if (!id) {
			throw new Error('ID is missing in the payload');
		}

		const updatedTodo = yield call(fetchHelper, `${API.API_URL}/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ text }),
		});

		yield put(
			editItem({
				id,
				text: updatedTodo.text,
			}),
		);
	} catch (e) {
		console.error('Error in editItemSaga:', e);
	}
}

export function* clearItemsSaga() {
	try {
		const currentTodos = yield select(state => state.todos.items);

		if (Array.isArray(currentTodos)) {
			for (const todo of currentTodos) {
				yield call(fetchHelper, `${API.API_URL}/${todo.id}`, {
					method: 'DELETE',
				});
			}

			yield put(clearItems());
		} else {
			console.error('currentTodos is not an array:', currentTodos);
		}
	} catch (e) {
		console.error('Error in clearItemsSaga:', e);
	}
}
