import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	p: 4,
	textAlign: 'center',
	borderRadius: 2,
	boxShadow: 24,
};

export default function ModalDelete({ open, onClose, onConfirm }) {
	return (
		<Modal open={open} onClose={onClose} aria-labelledby='modal-modal-title'>
			<Box sx={style}>
				<Typography
					id='modal-modal-title'
					variant='h6'
					component='h2'
					color='primary'
					mb={2}
				>
					Are you sure you want to delete this product?
				</Typography>
				<Button
					variant='contained'
					onClick={onClose}
					sx={{
						marginRight: 2,
						color: 'primary.light',
						backgroundColor: 'primary.dark',
						'&:hover': {
							backgroundColor: 'primary.main',
						},
					}}
				>
					Cancel
				</Button>
				<Button
					onClick={onConfirm}
					variant='contained'
					color='error'
					sx={{
						'&:hover': {
							backgroundColor: 'error.dark',
						},
					}}
				>
					Delete
				</Button>
			</Box>
		</Modal>
	);
}

ModalDelete.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onConfirm: PropTypes.func.isRequired,
};
