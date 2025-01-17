import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoItem } from '../../redux/slices/todoSlice';
import selectors from '../../redux/slices/selectors';

const TodoForm = () => {
	const isLoading = useSelector(selectors.isLoadingTodo);
	const dispatch = useDispatch();
	const [value, setValue] = useState('');

	const handleChange = event => {
		setValue(event.target.value);
	};

	const handleSubmit = () => {
		dispatch(addTodoItem(value));
		setValue('');
	};
	return (
		<Box sx={{ mb: 3 }}>
			<Typography component='h1' variant='h3' sx={{ mb: 2 }}>
				Todo
			</Typography>
			<Box
				component='form'
				onSubmit={e => {
					e.preventDefault();
					handleSubmit();
				}}
				sx={{ display: 'flex', width: '100%' }}
			>
				<TextField
					value={value}
					onChange={handleChange}
					id='outlined-basic'
					label={value}
					variant='outlined'
					sx={{ width: '100%' }}
				/>
				<Button
					sx={{ flexShrink: '0' }}
					variant='outlined'
					type='submit'
					disabled={isLoading}
				>
					Add
				</Button>
			</Box>
		</Box>
	);
};

export default TodoForm;
