import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid2,
	Typography,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from 'prop-types';

const ProductsItem = ({ img, name, price, quantity }) => {
	return (
		<Grid2 size={4} component={Card}>
			<CardContent sx={{ padding: '20px' }} align='center'>
				<CardMedia
					sx={{ height: 200, backgroundSize: 'contain', mb: 3 }}
					image={img}
					title={name}
				/>
				<Typography component='h3' variant='h6' sx={{ mb: 3 }}>
					{name}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						gap: 2,
						alignItems: 'center',
						mb: 3,
					}}
				>
					<Typography component='p' variant='h6' color='primary.warning'>
						{price}₴
					</Typography>
					<Typography component='p'>Кількість: {quantity}</Typography>
				</Box>
				<Button startIcon={<ShoppingCartIcon />}>Готовий до відправки</Button>
			</CardContent>
		</Grid2>
	);
};

export default ProductsItem;

ProductsItem.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	quantity: PropTypes.number,
};
