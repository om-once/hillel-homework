import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectors from '../../redux/slices/selectors';
import { getSwapiItem } from '../../redux/slices/swapiSlice';
import { Box, Card, CardContent, Typography } from '@mui/material';
const SwapiMain = () => {
	const dispatch = useDispatch();
	const items = useSelector(selectors.items);

	useEffect(() => {
		dispatch(getSwapiItem());
	}, []);
	return (
		<Box sx={{ mb: 3 }}>
			{items.map(item => {
				return (
					<Card component='div' key={item.id}>
						<CardContent>
							<Typography
								sx={{
									backgroundColor: '#ccc',
									display: 'inline-block',
									padding: '5px',
									borderRadius: '5px',
									mb: 2,
								}}
								component='p'
							>
								{item.text}
							</Typography>
							<Typography component='pre'>
								{JSON.stringify(item.obj, null, 3)}
							</Typography>
						</CardContent>
					</Card>
				);
			})}
		</Box>
	);
};

export default SwapiMain;
