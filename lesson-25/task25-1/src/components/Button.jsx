import PropTypes from 'prop-types';

const Button = ({ children }) => (
	<button className='btn btn-outline-secondary' type='button'>
		{children}
	</button>
);

Button.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Button;
