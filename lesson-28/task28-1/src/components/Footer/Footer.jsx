import { useContext } from 'react';
import { ThemeContext } from '../../themeContext';
import Link from '../Link/Link';
const Footer = () => {
	const [theme] = useContext(ThemeContext);
	return (
		<footer className={`footer ${theme.addClass}`}>
			<ul className='menu'>
				<li>
					Phone number: <Link href='tel:+2312321312'>+2312321312</Link>
				</li>
				<li>
					Email:<Link href='mailto:example@gmail.com'>example@gmail.com</Link>
				</li>
				<li>
					GitHub:<Link href='https://github.com'>https://github.com</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
