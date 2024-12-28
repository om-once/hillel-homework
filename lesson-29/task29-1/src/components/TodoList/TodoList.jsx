import { useEffect, useState } from 'react';
import TodoListForm from '../TodoListForm/TodoListForm';
import TodoListItem from '../TodoListItem/TodoListItem';
const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const addTodo = newText => {
		setTodos(prevState => {
			const updatedTodos = [
				...prevState,
				{
					id: +new Date(),
					text: newText,
					completed: false,
				},
			];
			localStorage.setItem('todos', JSON.stringify(updatedTodos));
			return updatedTodos;
		});
	};
	const changeTodoComplete = id => {
		setTodos(prevTodos => {
			const changedTodos = prevTodos.map(item =>
				item.id === id ? { ...item, completed: !item.completed } : item,
			);
			localStorage.setItem('todos', JSON.stringify(changedTodos));
			return changedTodos;
		});
	};
	const deleteTodo = id => {
		setTodos(prevTodos => {
			const changedTodos = prevTodos.filter(item => item.id !== id);
			localStorage.setItem('todos', JSON.stringify(changedTodos));
			return changedTodos;
		});
	};
	useEffect(() => {
		const todoList = localStorage.getItem('todos');
		if (todoList) {
			setTodos(JSON.parse(todoList));
		}
	}, []);

	return (
		<div className='todo'>
			<h1 className='todo__title'>ToDo List</h1>
			<TodoListForm addTodoFunc={addTodo} />
			<ul className='todo-list'>
				{todos.map(item => (
					<TodoListItem
						newClass={item.completed ? 'span line-through' : null}
						key={item.id}
						text={item.text}
						completeFunc={() => changeTodoComplete(item.id)}
						deleteFunc={() => deleteTodo(item.id)}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
