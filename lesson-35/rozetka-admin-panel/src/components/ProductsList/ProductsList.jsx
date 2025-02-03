import { Grid2 } from '@mui/material';
import ProductsItem from '../ProductsItem/ProductsItem';
import Rows from '../AdminProducts/constants/rows';

const ProductsList = () => {
	const rows = Rows();
	return (
		<Grid2 container spacing={10} sx={{ mb: 10 }}>
			{rows.map(item => {
				return (
					<ProductsItem
						key={item.name}
						name={item.name}
						img={item.img}
						price={item.price}
						quantity={item.quantity}
					/>
				);
			})}
		</Grid2>
	);
};

export default ProductsList;
