import { Link, ListItem } from '@mui/material';

const ContactsItem = ({ children, link }) => {
	return (
		<ListItem sx={{ justifyContent: 'center' }}>
			<Link
				href={link}
				underline='hover'
				color='inherit'
				sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
			>
				{children}
			</Link>
		</ListItem>
	);
};

export default ContactsItem;
