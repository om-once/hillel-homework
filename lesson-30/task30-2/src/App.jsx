import TodoList from './components/TodoList/TodoList';
import { Provider } from 'react-redux';
import { store } from './redux/store';
const App = () => {
	return (
		<Provider store={store}>
			<TodoList />
		</Provider>
	);
};

export default App;
