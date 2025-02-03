import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import ModalAddEdit from '../ModalAddEdit/ModalAddEdit';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/features/selectors/selectors';
import { setStateModal } from '../../redux/features/modalSlice/modalSlice';
import { setEditModal } from '../../redux/features/modalEditSlice/modalEditSlice';

const AdminHeader = () => {
	const dispatch = useDispatch();
	const isModalOpen = useSelector(selectors.modalState);

	const handleOpen = () => {
		dispatch(setEditModal(false));
		dispatch(setStateModal());
	};

	const handleClose = () => {
		dispatch(setStateModal());
	};

	return (
		<>
			<Box
				sx={{
					marginBottom: '20px',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Button
					component={Link}
					to='/products'
					sx={{ backgroundColor: 'primary.light' }}
					variant='outlined'
					startIcon={<PersonIcon />}
				>
					Preview
				</Button>
				<Button
					onClick={handleOpen}
					sx={{ backgroundColor: 'primary.light' }}
					variant='outlined'
					startIcon={<AddIcon />}
				>
					Add product
				</Button>
			</Box>
			<ModalAddEdit open={isModalOpen} onClose={handleClose} />
		</>
	);
};

export default AdminHeader;
