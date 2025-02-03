import { Box, Paper } from '@mui/material';
import LoginForm from '../components/LoginForm/LoginForm';
import Logo from '../components/Logo/Logo';

const Login = () => {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Paper
				sx={{
					width: '100%',
					maxWidth: '450px',
					padding: '50px',
				}}
			>
				<Logo />
				<LoginForm />
			</Paper>
		</Box>
	);
};

export default Login;
