import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/slices/selectors';
import {
	completeTodo,
	deleteTodo,
	editTodo,
} from '../../redux/slices/todosSlice';
import { useState } from 'react';
import TodoEditForm from '../TodoEditForm/TodoEditForm';

const TodoListItem = ({ text, todoId, todoComplete }) => {
	const [formState, setFormState] = useState(false);
	const isLoading = useSelector(selectors.isLoading);
	const dispatch = useDispatch();

	const deleteTodoItem = id => {
		dispatch(deleteTodo(id));
	};

	const toggleFormState = () => {
		setFormState(prevState => !prevState);
	};

	const completeTodoItem = id => {
		dispatch(completeTodo(id));
	};

	const editTodoItem = ({ id, text }) => {
		dispatch(editTodo({ id, text }));
		toggleFormState();
	};

	return (
		<li className='todo-list__item'>
			{!formState ? (
				<p
					onClick={toggleFormState}
					className={todoComplete ? 'line-through' : ''}
				>
					{text}
				</p>
			) : (
				<TodoEditForm
					text={text}
					todoId={todoId}
					editTodoItem={editTodoItem}
					cancelEdit={toggleFormState}
					isLoading={isLoading}
				/>
			)}

			<div className='todo-list__btns'>
				<button
					onClick={() => completeTodoItem(todoId)}
					className='btn btn-complete'
					disabled={isLoading}
				>
					Complete
				</button>

				<button
					onClick={() => deleteTodoItem(todoId)}
					className='btn btn-delete'
					disabled={isLoading}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TodoListItem;
