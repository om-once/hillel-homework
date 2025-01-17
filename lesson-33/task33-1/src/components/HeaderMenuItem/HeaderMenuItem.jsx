import { Typography } from '@mui/material';
import { Link } from 'react-router';

const HeaderMenuItem = ({ children, link }) => {
	return (
		<Typography variant='h5' component='h5'>
			<Link to={link} style={{ color: 'inherit', textDecoration: 'none' }}>
				{children}
			</Link>
		</Typography>
	);
};

export default HeaderMenuItem;
