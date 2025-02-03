import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Columns } from './constants/Columns';
import Rows from './constants/rows';
import { paginationModel } from './constants/paginationModel';
import { useState } from 'react';
import ModalDelete from '../ModalDelete/ModalDelete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductsData } from '../../redux/features/productsSlice/productsSlice';
import selectors from '../../redux/features/selectors/selectors';

export default function AdminProducts() {
	const loading = useSelector(selectors.isLoading);
	const dispatch = useDispatch();
	const rows = Rows();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedId, setSelectedId] = useState(null);

	const handleOpenModal = id => {
		if (typeof id !== 'number' && typeof id !== 'string') {
			console.error('Invalid ID:', id);
			return;
		}

		setSelectedId(id);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedId(null);
	};

	const handleConfirmDelete = () => {
		if (typeof selectedId !== 'string' && typeof selectedId !== 'number') {
			console.error('Invalid ID:', selectedId);
			return;
		}

		dispatch(deleteProductsData(selectedId));
		handleCloseModal();
	};

	return (
		<Paper sx={{ width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={Columns(handleOpenModal, dispatch, loading)}
				initialState={{ pagination: { paginationModel } }}
				pageSizeOptions={[5, 10, 20]}
				disableColumnFilter
				disableRowSelectionOnClick
				sx={{
					color: 'primary.light',
					border: 0,
					'& .MuiDataGrid-columnHeaders > *:first-of-type': {
						backgroundColor: 'primary.mainDark',
					},
					'& .MuiDataGrid-row:nth-of-type(2n)': {
						backgroundColor: 'primary.mainLight',
					},
					'& .MuiDataGrid-row:nth-of-type(2n-1)': {
						backgroundColor: 'primary.dark',
					},
					'& .MuiDataGrid-footerContainer': {
						border: 'none',
					},
					'& .MuiTablePagination-root': {
						backgroundColor: 'primary.mainDark',
					},
				}}
			/>
			<ModalDelete
				open={isModalOpen}
				onClose={handleCloseModal}
				onConfirm={handleConfirmDelete}
			/>
		</Paper>
	);
}
