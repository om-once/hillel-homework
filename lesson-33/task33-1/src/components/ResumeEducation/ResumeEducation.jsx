import { Card, CardContent, Typography } from '@mui/material';
import ResumeTitle from '../ResumeTitle/ResumeTitle';

const ResumeEducation = () => {
	return (
		<Card sx={{ mb: 3 }}>
			<CardContent>
				<ResumeTitle>Education</ResumeTitle>
				<Typography gutterBottom variant='h5' component='h3'>
					Electronics and Internet of Things (IoT) Devices
				</Typography>
				<Typography gutterBottom variant='h6' component='h4'>
					Chernihiv National University of Technology
				</Typography>
				<Typography
					gutterBottom
					variant='body1'
					sx={{ color: 'text.secondary' }}
				>
					09/2017 - 12/2018
				</Typography>
				<Typography gutterBottom variant='h5' component='h3'>
					Radio Engineering and Telecommunications
				</Typography>
				<Typography gutterBottom variant='h6' component='h4'>
					Chernihiv National University of Technology
				</Typography>
				<Typography
					gutterBottom
					variant='body1'
					sx={{ color: 'text.secondary' }}
				>
					09/2013 - 06/2017
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ResumeEducation;
