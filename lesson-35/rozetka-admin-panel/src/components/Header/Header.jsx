import { Box, Container } from '@mui/material';
import Logo from '../Logo/Logo';

const Header = () => {
	return (
		<Box component='header' padding={2}>
			<Container>
				<Logo />
			</Container>
		</Box>
	);
};

export default Header;
