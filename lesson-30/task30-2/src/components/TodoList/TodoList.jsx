import TodoListForm from '../TodoListForm/TodoListForm';
import TodoListItem from '../TodoListItem/TodoListItem';
import todosSlice from '../../redux/slices/todosSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import selectors from '../../redux/slices/selectors';

const TodoList = () => {
	const items = useSelector(selectors.items);
	const dispatch = useDispatch();
	const addTodo = newText => {
		dispatch(
			todosSlice.actions.addItem({
				id: +new Date(),
				text: newText,
				completed: false,
			}),
		);
	};
	return (
		<div className='todo'>
			<h1 className='todo__title'>ToDo List</h1>
			<TodoListForm addTodoFunc={addTodo} />
			<ul className='todo-list'>
				{items.map(item => (
					<TodoListItem key={item.id} text={item.text} />
				))}
			</ul>
			<p className='todo__total'>Total: {items.length}</p>
		</div>
	);
};

export default TodoList;
