import TodoListForm from '../TodoListForm/TodoListForm';
import TodoListItem from '../TodoListItem/TodoListItem';
import { clearTodos, fetchStart } from '../../redux/slices/todosSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import selectors from '../../redux/slices/selectors';
import { useEffect } from 'react';

const TodoList = () => {
	const isLoading = useSelector(selectors.isLoading);
	const items = useSelector(selectors.items);
	const dispatch = useDispatch();
	const clearAllTodo = () => {
		dispatch(clearTodos());
	};
	useEffect(() => {
		dispatch(fetchStart());
	}, []);
	return (
		<div className='todo'>
			<h1 className='todo__title'>ToDo List</h1>
			<TodoListForm />
			<ul className='todo-list'>
				{items.map(item => (
					<TodoListItem
						key={item.id}
						text={item.text}
						todoId={item.id}
						todoComplete={item.complete}
					/>
				))}
			</ul>
			<p className='todo__total'>Total: {items.length}</p>
			<button className='btn' onClick={clearAllTodo} disabled={isLoading}>
				Clear todos
			</button>
		</div>
	);
};

export default TodoList;
