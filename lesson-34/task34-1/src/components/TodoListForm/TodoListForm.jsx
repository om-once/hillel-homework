import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
	text: Yup.string()
		.min(5, 'Надто коротка назва - мінімум 5 символів!')
		.required('Завдання має містити назву!'),
});
const TodoListForm = props => {
	const { addTodoFunc } = props;
	return (
		<div className='todo-form'>
			<Formik
				initialValues={{ text: '' }}
				validationSchema={SignupSchema}
				onSubmit={(values, actions) => {
					console.log(values);
					addTodoFunc(values.text);
					actions.resetForm();
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<Field
							data-testid='todo-name'
							className='todo-form__input'
							type='text'
							name='text'
						/>
						<ErrorMessage
							className='todo-form__error'
							name='text'
							component='span'
						/>
						<button
							data-testid='todo-add'
							className='btn'
							type='submit'
							disabled={errors.text && touched.text ? true : false}
						>
							Add
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default TodoListForm;
