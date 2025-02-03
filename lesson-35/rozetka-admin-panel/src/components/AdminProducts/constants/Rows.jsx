import { useEffect } from 'react';
import selectors from '../../../redux/features/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../../redux/features/productsSlice/productsSlice';

const Rows = () => {
	const dispatch = useDispatch();
	const items = useSelector(selectors.products);
	useEffect(() => {
		dispatch(getProductsData());
	}, [dispatch]);

	const productsItems = items.map(item => ({
		...item,
		id: item._id,
	}));

	return Array.isArray(productsItems) ? productsItems : [];
};

export default Rows;
