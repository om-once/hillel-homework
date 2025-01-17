import { Card, CardContent, Typography } from '@mui/material';
import SwapiForm from '../SwapiForm/SwapiForm';

const SwapiHeader = () => {
	return (
		<Card sx={{ mb: 3 }}>
			<CardContent>
				<Typography component='h1' variant='h3'>
					SWAPI
				</Typography>
				<SwapiForm />
			</CardContent>
		</Card>
	);
};

export default SwapiHeader;
