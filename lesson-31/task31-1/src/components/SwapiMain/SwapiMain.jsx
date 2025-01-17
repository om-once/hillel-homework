import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectors from '../../redux/slices/selectors';
import { getSwapiItem } from '../../redux/slices/swapiSlice';
const Main = () => {
	const dispatch = useDispatch();
	const items = useSelector(selectors.items);
	useEffect(() => {
		dispatch(getSwapiItem());
	}, []);
	return (
		<main className='swapi-main'>
			{items.map(item => {
				return (
					<div className='swapi-main__content' key={item.id}>
						<p>{item.text}</p>
						<pre>{JSON.stringify(item.obj, null, 3)}</pre>
					</div>
				);
			})}
		</main>
	);
};

export default Main;
