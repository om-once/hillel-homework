import PropTypes from 'prop-types';

const TextElement = ({ children }) => (
	<span className='input-group-text'>{children}</span>
);

TextElement.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TextElement;
