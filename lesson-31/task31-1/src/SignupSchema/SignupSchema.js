import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
	text: Yup.string().required('Завдання має містити назву!'),
});

export default SignupSchema;
