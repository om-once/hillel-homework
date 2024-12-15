import PropTypes from 'prop-types';

const Form = ({ children }) => (
	<form className='input-group mb-3'>{children}</form>
);

Form.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Form;
