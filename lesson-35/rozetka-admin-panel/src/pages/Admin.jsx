import AdminHeader from '../components/AdminHeader/AdminHeader';
import AdminProducts from '../components/AdminProducts/AdminProducts';
import Title from '../components/Title/Title';

const Admin = () => {
	return (
		<div>
			<AdminHeader />
			<Title>Products</Title>
			<AdminProducts />
		</div>
	);
};

export default Admin;
