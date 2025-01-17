import { Container } from '@mui/material';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';

const Todo = () => {
	return (
		<Container maxWidth='lg'>
			<TodoForm />
			<TodoList />
		</Container>
	);
};

export default Todo;
