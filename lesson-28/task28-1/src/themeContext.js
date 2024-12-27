import { createContext } from 'react';

export const themes = {
	light: {
		addClass: 'light-theme',
	},
	dark: {
		addClass: 'dark-theme',
	},
};

export const ThemeContext = createContext();
