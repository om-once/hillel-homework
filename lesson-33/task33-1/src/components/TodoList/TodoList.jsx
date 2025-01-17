import Stack from '@mui/material/Stack';
import TodoListItem from '../TodoListItem/TodoListItem';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/slices/selectors';
import { useEffect } from 'react';
import { getTodoItem } from '../../redux/slices/todoSlice';

const TodoList = () => {
	const dispatch = useDispatch();
	const items = useSelector(selectors.todos);

	useEffect(() => {
		dispatch(getTodoItem());
	}, []);

	return (
		<Stack spacing={3}>
			{items.map(item => (
				<TodoListItem
					id={item.id}
					key={item.id}
					text={item.text}
					completed={item.complete}
				/>
			))}
		</Stack>
	);
};

export default TodoList;
