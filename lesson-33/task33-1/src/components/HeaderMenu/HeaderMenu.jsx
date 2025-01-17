import { AppBar, Box, Container, Typography } from '@mui/material';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem';
const HeaderMenu = () => {
	return (
		<AppBar component='nav'>
			<Container maxWidth='lg'>
				<Box
					sx={{
						gap: 10,
						display: 'flex',
						alignItems: 'center',
						padding: '10px 0',
					}}
				>
					<Typography variant='h4' component='h2' sx={{ flexGrow: 1 }}>
						My cite
					</Typography>
					<HeaderMenuItem link='/'>Home</HeaderMenuItem>
					<HeaderMenuItem link='/todo'>Todo</HeaderMenuItem>
					<HeaderMenuItem link='/swapi'>Swapi</HeaderMenuItem>
				</Box>
			</Container>
		</AppBar>
	);
};

export default HeaderMenu;
