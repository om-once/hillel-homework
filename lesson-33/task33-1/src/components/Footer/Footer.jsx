import { Container, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import FooterMenu from '../FooterMenu/FooterMenu';

const Footer = () => {
	return (
		<Paper component='footer'>
			<Divider component='div' />
			<Container maxWidth='lg'>
				<FooterMenu />
			</Container>
		</Paper>
	);
};

export default Footer;
