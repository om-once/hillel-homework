import { useDispatch } from 'react-redux';
import { TYPES } from '../../redux/store';
const ButtonDecrement = () => {
	const dispatch = useDispatch();

	const handleDecrement = () => {
		dispatch({ type: TYPES.decrement });
	};

	return <button onClick={handleDecrement}>Decrement</button>;
};

export default ButtonDecrement;
