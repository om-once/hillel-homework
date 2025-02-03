import { BrowserRouter, Routes, Route } from 'react-router';
import { routes } from './constants/routes';
import Layout from './components/Layout/Layout';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						{Object.keys(routes).map(route => (
							<Route
								key={routes[route].id}
								element={routes[route].element}
								path={routes[route].path}
							/>
						))}
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
