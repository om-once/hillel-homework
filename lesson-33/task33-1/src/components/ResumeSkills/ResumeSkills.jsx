import { Card, CardContent, List } from '@mui/material';
import ResumeTitle from '../ResumeTitle/ResumeTitle';
import ResumeItem from '../ResumeItem/ResumeItem';
const ResumeSkills = () => {
	return (
		<Card sx={{ mb: 3 }}>
			<CardContent>
				<ResumeTitle>Skills</ResumeTitle>
				<List>
					<ResumeItem text='HTML5' />
					<ResumeItem text='CSS3' />
					<ResumeItem text='Sass/SCSS' />
					<ResumeItem text='Bootstrap, Tailwind CSS' />
					<ResumeItem text='Adobe Photoshop, Figma' />
					<ResumeItem text='Git & GitHub' />
					<ResumeItem text='JavaScript' />
					<ResumeItem text='React.js' />
					<ResumeItem text='Redux' />
					<ResumeItem text='Material UI' />
					<ResumeItem text='Webasyst CRM' />
					<ResumeItem text='OpenCart CMS' />
				</List>
			</CardContent>
		</Card>
	);
};

export default ResumeSkills;
