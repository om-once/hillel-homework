import { NavLink } from 'react-router-dom';
const Link = props => {
	const { children, href } = props;
	return <NavLink to={href}>{children}</NavLink>;
};

export default Link;
