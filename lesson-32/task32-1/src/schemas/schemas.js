import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
	text: Yup.string()
		.min(5, 'Надто коротка назва - мінімум 5 символів!')
		.required('Завдання має містити назву!'),
});
