import { Box } from '@mui/material';
import Title from '../components/Title/Title';
import ProductsList from '../components/ProductsList/ProductsList';

const Products = () => {
	return (
		<Box>
			<Title>Products Preview</Title>
			<ProductsList />
		</Box>
	);
};

export default Products;
