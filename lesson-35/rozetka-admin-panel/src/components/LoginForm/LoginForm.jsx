import { useFormik } from 'formik';
import { loginValidationSchema } from '../../schemas/loginValidationSchema';
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postUsersData } from '../../redux/features/usersSlice/usersSlice';
import { useNavigate } from 'react-router';
import selectors from '../../redux/features/selectors/selectors';

const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword(show => !show);
	const { loading, error } = useSelector(selectors.users);

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: loginValidationSchema,
		onSubmit: values => {
			dispatch(postUsersData({ ...values, navigate }));
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
				fullWidth
				id='username'
				name='username'
				label='Username'
				value={formik.values.username}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.username && Boolean(formik.errors.username)}
				helperText={formik.touched.username && formik.errors.username}
			/>
			<FormControl
				variant='outlined'
				fullWidth
				error={formik.touched.password && Boolean(formik.errors.password)}
			>
				<InputLabel htmlFor='password'>Password</InputLabel>
				<OutlinedInput
					id='password'
					type={showPassword ? 'text' : 'password'}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								aria-label={
									showPassword ? 'hide the password' : 'display the password'
								}
								onClick={handleClickShowPassword}
								edge='end'
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
					label='Password'
					name='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.password && formik.errors.password && (
					<FormHelperText>{formik.errors.password}</FormHelperText>
				)}
			</FormControl>

			<Button
				sx={{ padding: '15px', color: 'primary.light' }}
				color='primary'
				variant='contained'
				fullWidth
				type='submit'
				disabled={loading}
			>
				{loading ? 'Завантаження...' : 'Login'}
			</Button>
			{error && <FormHelperText error>{error}</FormHelperText>}
		</Box>
	);
};

export default LoginForm;
