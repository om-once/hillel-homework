import { Box, Card, CardContent, List, Typography } from '@mui/material';
import ResumeTitle from '../ResumeTitle/ResumeTitle';
import ResumeItem from '../ResumeItem/ResumeItem';
const ResumeExperience = () => {
	return (
		<Card sx={{ mb: 3 }}>
			<CardContent>
				<ResumeTitle>WORK EXPERIENCE</ResumeTitle>
				<Typography gutterBottom variant='h5' component='h3'>
					Content manager/Programmer
				</Typography>
				<Typography gutterBottom variant='h6' component='h4'>
					LTD Elekt-K
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
					<Typography
						gutterBottom
						variant='body1'
						sx={{ color: 'text.secondary' }}
					>
						04/2021 - Present
					</Typography>
					<Typography
						gutterBottom
						variant='body1'
						sx={{ color: 'text.secondary' }}
					>
						Kyiv, Ukraine
					</Typography>
				</Box>
				<List>
					<ResumeItem text='Performed SEO optimization, revised and supported websites, and managed content.' />
					<ResumeItem text='Refined and finalized templates for Webasyst CRM and CMS OpenCart.' />
					<ResumeItem text='Modified and edited JavaScript scripts.' />
					<ResumeItem text='Refined new templates using HTML and Smarty.' />
				</List>
			</CardContent>
		</Card>
	);
};

export default ResumeExperience;
