import { Divider, Typography } from '@mui/material';
const ResumeTitle = ({ children }) => {
	return (
		<>
			<Typography
				component='h2'
				variant='h5'
				sx={{
					textAlign: 'center',
					textTransform: 'uppercase',
					mt: 2,
					mb: 2,
				}}
			>
				{children}
			</Typography>
			<Divider component='div' sx={{ mb: 2 }} />
		</>
	);
};

export default ResumeTitle;
