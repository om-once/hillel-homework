import { Card, CardContent, Typography } from '@mui/material';
import ResumeTitle from '../ResumeTitle/ResumeTitle';

const ResumeSummary = () => {
	return (
		<Card>
			<CardContent>
				<ResumeTitle>Summary</ResumeTitle>
				<Typography component='p' sx={{ color: 'text.secondary' }}>
					I have worked as a Content manager/Programmer for about 3 years. I
					have extensive experience in developing responsive web applications
					using HTML5, CSS3, and JavaScript, ensuring cross-browser
					compatibility. I have developed and finalized templates for Webasyst
					CRM and CMS OpenCart. I am skilled in CSS optimization with SASS/SCSS,
					Bootstrap, and Tailwind CSS. I have used Gulp for project optimization
					and file minification. Additionally, I have experience in SEO
					optimization and have worked with React, creating SPA applications
					using Redux, Material UI, and React Router.
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ResumeSummary;
