import Admin from '../pages/Admin.jsx';
import Login from '../pages/Login.jsx';
import Products from '../pages/Products.jsx';

export const routes = {
	login: {
		id: 1,
		element: <Login />,
		path: '/login',
	},
	admin: {
		id: 3,
		element: <Admin />,
		path: '/admin',
	},
	products: {
		id: 4,
		element: <Products />,
		path: '/products',
	},
};
