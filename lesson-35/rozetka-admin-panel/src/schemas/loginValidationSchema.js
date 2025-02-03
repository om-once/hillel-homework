import * as yup from 'yup';
export const loginValidationSchema = yup.object({
	username: yup.string('Enter your username').required('Username is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
});
