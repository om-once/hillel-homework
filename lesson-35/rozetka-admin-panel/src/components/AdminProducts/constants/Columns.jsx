import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { setStateModal } from '../../../redux/features/modalSlice/modalSlice';
import {
	setEditModal,
	setEditId,
} from '../../../redux/features/modalEditSlice/modalEditSlice';

export const Columns = (handleOpenModal, dispatch, loading) => [
	{
		field: 'id',
		headerName: 'ID',
		flex: 1,
		align: 'center',
	},
	{ field: 'category', headerName: 'Category', flex: 1, align: 'center' },
	{ field: 'name', headerName: 'Name', flex: 1, align: 'center' },
	{
		field: 'quantity',
		headerName: 'Quantity',
		type: 'number',
		flex: 1,
		align: 'center',
	},
	{
		field: 'price',
		headerName: 'Price (₴)',
		type: 'number',
		flex: 1,
		align: 'center',
	},
	{
		field: 'actions',
		headerName: '',
		sortable: false,
		filterable: false,
		flex: 1,
		align: 'center',
		renderCell: params => {
			return (
				<>
					<IconButton
						disabled={loading}
						onClick={() => {
							console.log(params.row.id);
							dispatch(setEditId(params.row.id));
							dispatch(setEditModal(true));
							dispatch(setStateModal());
						}}
					>
						<EditIcon />
					</IconButton>
					<IconButton
						disabled={loading}
						onClick={() => handleOpenModal(params.row.id)}
					>
						<DeleteIcon />
					</IconButton>
				</>
			);
		},
	},
];
