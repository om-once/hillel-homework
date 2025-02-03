export default {
	products: state => state.products.products,
	isLoading: state => state.products.loading,
	modalState: state => state.modalState,
	modalEditOpen: state => state.modalEdit.isOpen,
	modalEditId: state => state.modalEdit.editId,
	users: state => state.users,
};
