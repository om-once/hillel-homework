import { useSelector } from 'react-redux';
import ButtonIncrement from './components/ButtonIncrement/ButtonIncrement';
import ButtonDecrement from './components/ButtonDecrement/ButtonDecrement';

const App = () => {
	const count = useSelector(state => state.count);

	return (
		<div>
			<p>Count: {count}</p>
			<ButtonIncrement />
			<ButtonDecrement />
		</div>
	);
};

export default App;
