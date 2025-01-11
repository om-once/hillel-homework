import { ErrorMessage, Field, Form, Formik } from 'formik';
import selectors from '../../redux/slices/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/slices/todosSlice';
import { SignupSchema } from '../../schemas/schemas';
const TodoListForm = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectors.isLoading);
	const addTodoFunc = newText => {
		dispatch(addTodo(newText));
	};
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
						<Field className='todo-form__input' type='text' name='text' />
						<ErrorMessage
							className='todo-form__error'
							name='text'
							component='span'
						/>
						<button
							className='btn'
							type='submit'
							disabled={(errors.text && touched.text) || isLoading}
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
