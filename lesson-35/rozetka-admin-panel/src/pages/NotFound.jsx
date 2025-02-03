import {
	Button,
	Card,
	CardContent,
	Container,
	Typography,
} from '@mui/material';
import { Link } from 'react-router';

const NotFound = () => {
	return (
		<Container sx={{ textAlign: 'center', mt: 5 }}>
			<Card sx={{ padding: '50px' }}>
				<CardContent>
					<Typography variant='h3' color='error' sx={{ mb: 3 }}>
						404 - Сторінку не знайдено
					</Typography>
					<Typography variant='h6' sx={{ mb: 4 }}>
						Здається, такої сторінки не існує. Але можна повернутися на сторінку
						Admin Panel.
					</Typography>
					<Button
						variant='contained'
						color='primary'
						sx={{ color: 'primary.light' }}
						component={Link}
						to='/admin'
					>
						На Admin Panel
					</Button>
				</CardContent>
			</Card>
		</Container>
	);
};

export default NotFound;
