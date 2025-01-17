import { Button, Card, CardContent, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/slices/selectors';
import { completeTodoItem, deleteTodoItem } from '../../redux/slices/todoSlice';

const TodoListItem = ({ text, completed, id }) => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectors.isLoadingTodo);
	const handleDelete = id => {
		dispatch(deleteTodoItem(id));
	};
	const handleComplete = id => {
		dispatch(completeTodoItem(id));
	};
	return (
		<Card>
			<CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
				<Typography
					sx={
						completed
							? { textDecoration: 'line-through', flexGrow: 1 }
							: { flexGrow: 1 }
					}
					component='p'
					variant='body1'
				>
					{text}
				</Typography>
				<Button
					onClick={() => handleComplete(id)}
					variant='contained'
					color='success'
					disabled={isLoading}
				>
					Complete
				</Button>
				<Button
					variant='contained'
					color='error'
					disabled={isLoading}
					onClick={() => handleDelete(id)}
				>
					Delete
				</Button>
			</CardContent>
		</Card>
	);
};

export default TodoListItem;
