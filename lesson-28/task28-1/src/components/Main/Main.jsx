import { useContext } from 'react';
import { ThemeContext } from '../../themeContext';
import TodoList from '../TodoList/TodoList';
const Main = () => {
	const [theme] = useContext(ThemeContext);
	return (
		<div className={`main ${theme.addClass}`}>
			<div className='main__content'>
				<h2 className='title'>ToDO List</h2>
				<TodoList />
			</div>
		</div>
	);
};

export default Main;
