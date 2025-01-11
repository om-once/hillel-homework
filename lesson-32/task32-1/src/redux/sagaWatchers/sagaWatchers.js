import { takeEvery, takeLatest } from 'redux-saga/effects';
import {
	addTodo,
	clearTodos,
	completeTodo,
	deleteTodo,
	editTodo,
	fetchStart,
} from '../slices/todosSlice';
import {
	addItemSaga,
	clearItemsSaga,
	completeItemSaga,
	deleteItemSaga,
	editItemSaga,
	fetchItemsSaga,
} from '../sagaWorkers/sagaWorkers';

export function* watchFetchTodos() {
	yield takeEvery(fetchStart.type, fetchItemsSaga);
}

export function* watchDeleteTodo() {
	yield takeEvery(deleteTodo.type, deleteItemSaga);
}

export function* watchAddTodo() {
	yield takeEvery(addTodo.type, addItemSaga);
}

export function* watchCompleteTodo() {
	yield takeEvery(completeTodo.type, completeItemSaga);
}

export function* watchEditTodo() {
	yield takeEvery(editTodo.type, editItemSaga);
}

export function* watchClearTodos() {
	yield takeLatest(clearTodos.type, clearItemsSaga);
}
