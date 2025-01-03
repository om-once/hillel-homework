import { useDispatch } from 'react-redux';
import { TYPES } from '../../redux/store';
const ButtonIncrement = () => {
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch({ type: TYPES.increment });
	};

	return <button onClick={handleIncrement}>Increment</button>;
};

export default ButtonIncrement;
