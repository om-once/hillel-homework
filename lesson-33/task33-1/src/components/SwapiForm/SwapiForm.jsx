import { addSwapiItem } from '../../redux/slices/swapiSlice';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/slices/selectors';
import { API } from '../../constants/constants';
import { Box, Typography, Button, TextField } from '@mui/material';
import { useState } from 'react';

const SwapiForm = () => {
	const [value, setValue] = useState('');

	const handleChange = event => {
		setValue(event.target.value);
	};
	const dispatch = useDispatch();
	const isLoading = useSelector(selectors.isLoading);
	const handleSubmit = async () => {
		dispatch(addSwapiItem(value));
	};
	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Typography component='p'>{API.URL_SWAPI}</Typography>
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
					disabled={isLoading}
					type='submit'
				>
					Get info
				</Button>
			</Box>
		</Box>
	);
};

export default SwapiForm;
