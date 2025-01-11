import { ErrorMessage, Field, Form, Formik } from 'formik';
import { SignupSchema } from '../../schemas/schemas';

const TodoEditForm = ({
	text,
	todoId,
	editTodoItem,
	cancelEdit,
	isLoading,
}) => {
	return (
		<Formik
			initialValues={{ text }}
			validationSchema={SignupSchema}
			onSubmit={values => {
				editTodoItem({ id: todoId, text: values.text });
			}}
		>
			{({ errors, touched }) => (
				<Form className='edit-form'>
					<Field className='edit-form__input' type='text' name='text' />
					<ErrorMessage
						className='edit-form__error'
						name='text'
						component='span'
					/>

					<div className='edit-form__group'>
						<button
							className='btn'
							type='submit'
							disabled={(errors.text && touched.text) || isLoading}
						>
							Edit
						</button>

						<button
							className='btn btn-cancel'
							type='button'
							onClick={cancelEdit}
						>
							Cancel
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default TodoEditForm;
