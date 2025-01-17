import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Box from '@mui/material/Box';
import Todo from './pages/Todo/Todo';
import Swapi from './pages/Swapi/Swapi';

const App = () => {
	return (
		<BrowserRouter>
			<Box
				component='div'
				sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
			>
				<CssBaseline />
				<Header />
				<Box
					component='main'
					sx={{ flex: '1 1 auto', padding: '70px 0 30px 0' }}
				>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/todo' element={<Todo />} />
						<Route path='/swapi' element={<Swapi />} />
					</Routes>
				</Box>
				<Footer />
			</Box>
		</BrowserRouter>
	);
};

export default App;
