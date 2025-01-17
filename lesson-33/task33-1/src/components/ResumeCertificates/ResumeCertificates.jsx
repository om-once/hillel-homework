import { Card, CardContent, Typography } from '@mui/material';
import ResumeTitle from '../ResumeTitle/ResumeTitle';

const ResumeCertificates = () => {
	return (
		<Card>
			<CardContent>
				<ResumeTitle>Certificates</ResumeTitle>
				<Typography gutterBottom variant='h5' component='h3'>
					Front End Developer
				</Typography>
				<Typography gutterBottom variant='h6' component='h4'>
					SkillUp - IT courses
				</Typography>
				<Typography
					gutterBottom
					variant='body1'
					sx={{ color: 'text.secondary' }}
				>
					09/2023 - 01/2024
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ResumeCertificates;
