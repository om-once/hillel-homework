import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addSwapiItem } from '../../redux/slices/swapiSlice';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/slices/selectors';
import { API } from '../../constants/constants';
import SignupSchema from '../../SignupSchema/SignupSchema';

const SwapiForm = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectors.isLoading);
	const handleSubmit = async values => {
		dispatch(addSwapiItem(values.text));
	};
	return (
		<div className='swapi-form'>
			<div className='swapi-form__link'>{API.URL_SWAPI}</div>
			<Formik
				initialValues={{ text: '' }}
				validationSchema={SignupSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form className='swapi-form__content'>
						<Field
							className='swapi-form__text'
							type='text'
							name='text'
							placeholder={'people/1'}
						/>
						<ErrorMessage
							className='swapi-form__error'
							name='text'
							component='span'
						/>
						<button
							className='btn'
							type='submit'
							disabled={(errors.text && touched.text) || isLoading}
						>
							Get info
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SwapiForm;
