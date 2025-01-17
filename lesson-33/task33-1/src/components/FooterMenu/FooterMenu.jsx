import { List, Typography } from '@mui/material';
import ContactsItem from '../ContactsItem/ContactsItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';

const FooterMenu = () => {
	const theme = useTheme();
	return (
		<List sx={{ display: 'flex', color: theme.palette.main }}>
			<ContactsItem link='mailto:minenkogt@gmail.com'>
				<MailIcon />
				<Typography component='span'>minenkogt@gmail.com</Typography>
			</ContactsItem>
			<ContactsItem link='https://www.linkedin.com/in/olexandr-minenko-5612ba1b5/'>
				<LinkedInIcon />
				<Typography component='span'>LinkedIn</Typography>
			</ContactsItem>
			<ContactsItem link='https://github.com/om-once'>
				<GitHubIcon />
				<Typography component='span'>GitHub</Typography>
			</ContactsItem>
		</List>
	);
};

export default FooterMenu;
