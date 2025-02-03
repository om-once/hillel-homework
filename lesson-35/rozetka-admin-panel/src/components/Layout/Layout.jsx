import { Container, ThemeProvider } from '@mui/material';
import { Navigate, Outlet, useLocation } from 'react-router';
import Header from '../Header/Header';
import { CssBaseline } from '@mui/material';
import { theme } from '../../theme/theme';

const Layout = () => {
	const location = useLocation();
	const isLoginPage = location.pathname === '/login';
	const token = localStorage.getItem('token');

	if (!token && !isLoginPage) {
		return <Navigate to='/login' replace />;
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{!isLoginPage && <Header />}
			<Container sx={{ flexGrow: 1 }}>
				<Outlet />
			</Container>
		</ThemeProvider>
	);
};

export default Layout;
