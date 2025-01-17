import { useDispatch, useSelector } from 'react-redux';
import { clearSwapiItems } from '../../redux/slices/swapiSlice';
import selectors from '../../redux/slices/selectors';
import { Button, Card, CardContent } from '@mui/material';

const SwapiFooter = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectors.isLoading);
	const handleClear = async () => {
		dispatch(clearSwapiItems());
	};
	return (
		<Card>
			<CardContent>
				<Button variant='outlined' onClick={handleClear} disabled={isLoading}>
					Clear
				</Button>
			</CardContent>
		</Card>
	);
};

export default SwapiFooter;
