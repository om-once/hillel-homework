import { Box, Card, CardContent, Typography } from '@mui/material';
import Contacts from '../Contacts/Contacts';
const ResumeInfo = () => {
	return (
		<Card>
			<CardContent
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					gap: 5,
				}}
			>
				<Box>
					<Typography component='h1' variant='h4'>
						Oleksandr Minenko
					</Typography>
					<Typography component='h2' variant='h6'>
						Front End Developer
					</Typography>
				</Box>
				<Contacts />
			</CardContent>
		</Card>
	);
};

export default ResumeInfo;
