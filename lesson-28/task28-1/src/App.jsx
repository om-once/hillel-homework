import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import { ThemeContext, themes } from './themeContext';
const App = () => {
	const theme = useState(themes.light);

	return (
		<ThemeContext.Provider value={theme}>
			<BrowserRouter>
				<ErrorBoundary>
					<div className='content'>
						<Header />
						<main>
							<Routes>
								<Route path='*' element={<NotFound />} />
								<Route path='/' element={<Main />} />
								<Route path='/contacts' element={<Contacts />} />
								<Route path='/about' element={<AboutUs />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</ErrorBoundary>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
};

export default App;
