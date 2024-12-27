import { useContext } from 'react';
import { ThemeContext } from '../../themeContext';
import Link from '../Link/Link';
const Contacts = () => {
	const [theme] = useContext(ThemeContext);
	return (
		<div className={`main contacts ${theme.addClass}`}>
			<div className='main__content'>
				<h2 className='title'>Contact Us</h2>
				<ul className='contacts-list'>
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
				<p className='contacts__copy'>
					For information about our policy on posting copyrighted material to{' '}
					<Link href='https://google.com'>Google</Link>
				</p>
			</div>
		</div>
	);
};

export default Contacts;
