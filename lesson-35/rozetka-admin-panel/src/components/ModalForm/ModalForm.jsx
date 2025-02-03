import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import { modalValidationSchema } from '../../schemas/modalValidationSchema';
import { useDispatch, useSelector } from 'react-redux';
import {
	postProductsData,
	putProductsData,
} from '../../redux/features/productsSlice/productsSlice';
import { setStateModal } from '../../redux/features/modalSlice/modalSlice';
import Rows from '../AdminProducts/constants/rows';
import selectors from '../../redux/features/selectors/selectors';

const ModalForm = () => {
	const loading = useSelector(selectors.isLoading);
	const rows = Rows();
	const dispatch = useDispatch();
	const edit = useSelector(selectors.modalEditOpen);
	const editId = useSelector(selectors.modalEditId);
	const selectedRow = rows.find(row => row.id === editId);

	const formik = useFormik({
		initialValues: edit
			? {
					id: editId || selectedRow?.id || '',
					category: selectedRow?.category || '',
					name: selectedRow?.name || '',
					quantity: selectedRow?.quantity || '',
					price: selectedRow?.price || '',
					img: selectedRow?.img || '',
			  }
			: {
					category: '',
					name: '',
					quantity: '',
					price: '',
					img: '',
			  },
		validationSchema: modalValidationSchema,
		onSubmit: values => {
			if (edit) {
				dispatch(putProductsData(values));
				dispatch(setStateModal());
			} else {
				dispatch(postProductsData(values));
				dispatch(setStateModal());
			}
		},
	});

	return (
		<Box
			display='flex'
			flexDirection='column'
			gap={3}
			component='form'
			onSubmit={formik.handleSubmit}
		>
			<TextField
				label='Category'
				id='category'
				name='category'
				value={formik.values.category}
				onChange={formik.handleChange}
				error={formik.touched.category && Boolean(formik.errors.category)}
				helperText={formik.touched.category && formik.errors.category}
				slotProps={{
					inputLabel: { shrink: true },
				}}
				sx={{
					'& .MuiInputBase-input': {
						color: 'primary.main',
					},
				}}
			/>
			<TextField
				label='Name'
				id='name'
				name='name'
				value={formik.values.name}
				onChange={formik.handleChange}
				error={formik.touched.name && Boolean(formik.errors.name)}
				helperText={formik.touched.name && formik.errors.name}
				slotProps={{
					inputLabel: { shrink: true },
				}}
				sx={{
					'& .MuiInputBase-input': {
						color: 'primary.main',
					},
				}}
			/>
			<TextField
				label='Quantity'
				id='quantity'
				name='quantity'
				value={formik.values.quantity}
				onChange={formik.handleChange}
				error={formik.touched.quantity && Boolean(formik.errors.quantity)}
				helperText={formik.touched.quantity && formik.errors.quantity}
				slotProps={{
					inputLabel: { shrink: true },
				}}
				sx={{
					'& .MuiInputBase-input': {
						color: 'primary.main',
					},
				}}
			/>
			<TextField
				label='Price'
				id='price'
				name='price'
				value={formik.values.price}
				onChange={formik.handleChange}
				error={formik.touched.price && Boolean(formik.errors.price)}
				helperText={formik.touched.price && formik.errors.price}
				slotProps={{
					inputLabel: { shrink: true },
				}}
				sx={{
					'& .MuiInputBase-input': {
						color: 'primary.main',
					},
				}}
			/>
			<TextField
				label='Image'
				id='img'
				name='img'
				value={formik.values.img}
				onChange={formik.handleChange}
				error={formik.touched.img && Boolean(formik.errors.img)}
				helperText={formik.touched.img && formik.errors.img}
				slotProps={{
					inputLabel: { shrink: true },
				}}
				sx={{
					'& .MuiInputBase-input': {
						color: 'primary.main',
					},
				}}
			/>
			<Button
				sx={{ padding: '15px', color: 'primary.light' }}
				color='primary'
				variant='contained'
				type='submit'
				disabled={loading}
			>
				Submit
			</Button>
		</Box>
	);
};

export default ModalForm;
