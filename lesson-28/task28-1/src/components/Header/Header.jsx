import { useContext } from 'react';
import { ThemeContext } from '../../themeContext';
import Link from '../Link/Link';
import ThemeButton from '../ThemeButton/ThemeButton';
const Header = () => {
	const [theme] = useContext(ThemeContext);
	return (
		<header className={`header ${theme.addClass}`}>
			<h1>Logo</h1>
			<ul className='menu'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/contacts'>Contacts</Link>
				</li>
				<li>
					<Link href='/about'>About us</Link>
				</li>
			</ul>
			<ThemeButton />
		</header>
	);
};

export default Header;
