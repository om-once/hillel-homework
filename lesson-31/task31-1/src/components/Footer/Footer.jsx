import { useDispatch, useSelector } from 'react-redux';
import { clearSwapiItems } from '../../redux/slices/swapiSlice';
import selectors from '../../redux/slices/selectors';

const Footer = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectors.isLoading);
	const handleClear = async () => {
		dispatch(clearSwapiItems());
	};
	return (
		<footer className='swapi-footer'>
			<button
				onClick={handleClear}
				className='btn btn-clear'
				disabled={isLoading}
			>
				Clear
			</button>
		</footer>
	);
};

export default Footer;
