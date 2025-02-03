import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Title = ({ children }) => {
	return (
		<Typography
			component='h1'
			variant='h3'
			align='center'
			sx={{ marginBottom: '75px', color: 'primary.light' }}
		>
			{children}
		</Typography>
	);
};

Title.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Title;
