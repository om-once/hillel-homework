import { useEffect, useRef, useState } from 'react';
import TodoListHeader from '../TodoListHeader/TodoListHeader';
import TodoListItem from '../TodoListItem/TodoListItem';
const TodoList = () => {
	const textInput = useRef(null);
	const [todos, setTodos] = useState([]);
	const [inputName, setInputName] = useState('');
	const handleChange = () => {
		setInputName(textInput.current.value);
	};

	const addTodo = () => {
		if (inputName.trim() === '') return;
		const newTodos = [
			...todos,
			{
				id: +new Date(),
				text: inputName.trim(),
				completed: false,
			},
		];
		setTodos(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
		setInputName('');
	};

	const todoComplete = id => {
		const updatedTodos = todos.map(item =>
			item.id === id ? { ...item, completed: !item.completed } : item,
		);
		setTodos(updatedTodos);
		localStorage.setItem('todos', JSON.stringify(updatedTodos));
	};

	const todoDelete = id => {
		const filteredTodos = todos.filter(item => item.id !== id);
		setTodos(filteredTodos);
		localStorage.setItem('todos', JSON.stringify(filteredTodos));
	};

	useEffect(() => {
		const savedTodos = localStorage.getItem('todos');
		if (savedTodos) {
			setTodos(JSON.parse(savedTodos));
		}
	}, []);

	return (
		<div className='todo'>
			<TodoListHeader
				changeFunc={handleChange}
				inputValue={inputName}
				inputRef={textInput}
				todoAdd={addTodo}
			/>
			<ul className='todo-list'>
				{todos.map(item => (
					<TodoListItem
						newClass={item.completed ? 'span line-through' : null}
						key={item.id}
						text={item.text}
						completeFunc={() => todoComplete(item.id)}
						deleteFunc={() => todoDelete(item.id)}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
