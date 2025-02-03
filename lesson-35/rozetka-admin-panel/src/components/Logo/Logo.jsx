import { Box } from '@mui/material';
import MainLogo from '../../assets/logo.svg';
import HeaderLogo from '../../assets/logo_header.svg';
import { useLocation } from 'react-router';

const Logo = () => {
	const location = useLocation();
	const isLoginPage = location.pathname.endsWith('/login');
	return (
		<Box sx={isLoginPage ? { mb: 2 } : null}>
			<img src={!isLoginPage ? HeaderLogo : MainLogo} alt='logo' />
		</Box>
	);
};

export default Logo;
