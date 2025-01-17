import { Box, Card, CardContent, Typography } from '@mui/material';
import ResumeTitle from '../ResumeTitle/ResumeTitle';

const ResumeLanguages = () => {
	return (
		<Card>
			<CardContent>
				<ResumeTitle>Languages</ResumeTitle>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box>
						<Typography gutterBottom variant='h6' component='h4'>
							Ukrainian
						</Typography>
						<Typography
							gutterBottom
							variant='body1'
							sx={{ color: 'text.secondary' }}
						>
							Native
						</Typography>
					</Box>
					<Box>
						<Typography gutterBottom variant='h6' component='h4'>
							English
						</Typography>
						<Typography
							gutterBottom
							variant='body1'
							sx={{ color: 'text.secondary' }}
						>
							A2 - Pre-Intermediate
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ResumeLanguages;
