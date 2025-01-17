import { Container } from '@mui/material';
import SwapiHeader from '../../components/SwapiHeader/SwapiHeader';
import SwapiMain from '../../components/SwapiMain/SwapiMain';
import SwapiFooter from '../../components/SwapiFooter/SwapiFooter';

const Swapi = () => {
	return (
		<Container>
			<SwapiHeader />
			<SwapiMain />
			<SwapiFooter />
		</Container>
	);
};

export default Swapi;
