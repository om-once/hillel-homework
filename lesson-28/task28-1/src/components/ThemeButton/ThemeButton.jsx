import { useContext } from 'react';
import { ThemeContext, themes } from '../../themeContext';
const ThemeButton = () => {
	const [theme, setTheme] = useContext(ThemeContext);
	const handleClick = () => {
		setTheme(theme.addClass === 'light-theme' ? themes.dark : themes.light);
	};
	return <button onClick={handleClick}>Change theme</button>;
};

export default ThemeButton;
