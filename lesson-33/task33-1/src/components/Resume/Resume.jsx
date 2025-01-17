import { Grid2 } from '@mui/material';
import ResumeInfo from '../ResumeInfo/ResumeInfo';
import ResumeSummary from '../ResumeSummary/ResumeSummary';
import ResumeExperience from '../ResumeExperience/ResumeExperience';
import ResumeSkills from '../ResumeSkills/ResumeSkills';
import ResumeCertificates from '../ResumeCertificates/ResumeCertificates';
import ResumeEducation from '../ResumeEducation/ResumeEducation';
import ResumeLanguages from '../ResumeLanguages/ResumeLanguages';
const Resume = () => {
	return (
		<Grid2 container spacing={3}>
			<Grid2 size={12}>
				<ResumeInfo />
			</Grid2>
			<Grid2 size={12}>
				<ResumeSummary />
			</Grid2>
			<Grid2 size={6}>
				<ResumeExperience />
				<ResumeEducation />
				<ResumeCertificates />
			</Grid2>
			<Grid2 size={6}>
				<ResumeSkills />
				<ResumeLanguages />
			</Grid2>
		</Grid2>
	);
};

export default Resume;
