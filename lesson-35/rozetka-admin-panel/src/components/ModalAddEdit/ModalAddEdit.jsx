import PropTypes from 'prop-types';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModalForm from '../ModalForm/ModalForm';
import { useSelector } from 'react-redux';
import selectors from '../../redux/features/selectors/selectors';

export default function ModalAddEdit({ open, onClose }) {
	const edit = useSelector(selectors.modalEditOpen);
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'primary.light',
		boxShadow: 24,
		borderRadius: 2,
	};
	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby='modal-modal-header'
			aria-describedby='modal-modal-form'
		>
			<Box sx={style}>
				<Box
					id='modal-modal-header'
					sx={{
						display: 'flex',
						alignItems: 'center',
						padding: '5px 15px',
						justifyContent: 'space-between',
					}}
				>
					<Typography component='h3' variant='h5' color='primary.main'>
						{edit ? 'Edit product' : 'Add product'}
					</Typography>
					<IconButton onClick={onClose}>
						<CloseIcon />
					</IconButton>
				</Box>
				<Box id='modal-modal-form' sx={{ padding: '15px' }}>
					<ModalForm />
				</Box>
			</Box>
		</Modal>
	);
}

ModalAddEdit.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};
