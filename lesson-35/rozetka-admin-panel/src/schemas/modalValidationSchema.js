import * as yup from 'yup';
export const modalValidationSchema = yup.object({
	category: yup
		.string('Enter product category')
		.required('Category is required'),
	name: yup.string('Enter product name').required('Product name is required'),
	quantity: yup
		.number('Enter product quantity')
		.required('Product quantity is required'),
	price: yup
		.number('Enter product price')
		.required('Product price is required'),
	img: yup.string('Enter product image').required('Product image is required'),
});
