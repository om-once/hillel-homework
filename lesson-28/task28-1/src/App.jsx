import { useEffect, useRef, useState } from 'react';

function App() {
	const textInput = useRef(null);
	const [todos, setTodos] = useState([]);
	const [inputName, setInputName] = useState('');

	const handleChange = () => {
		setInputName(textInput.current.value);
	};

	const addTodo = () => {
		if (inputName.trim() === '') return;
		setTodos(prevState => [
			...prevState,
			{
				id: +new Date(),
				text: inputName.trim(),
				completed: false,
			},
		]);
		setInputName('');
	};

	const todoComplete = id => {
		setTodos(prevState =>
			prevState.map(item =>
				item.id === id ? { ...item, completed: !item.completed } : item,
			),
		);
	};

	const todoDelete = id => {
		setTodos(prevState => prevState.filter(item => item.id !== id));
		console.log(todos);
	};

	useEffect(() => {
		if (todos !== 0) {
			localStorage.setItem('todos', JSON.stringify(todos));
		}
	}, [todos]);

	useEffect(() => {
		const savedTodos = localStorage.getItem('todos');
		if (savedTodos) {
			setTodos(JSON.parse(savedTodos));
		}
	}, []);

	return (
		<div className='todo'>
			<input
				onChange={handleChange}
				value={inputName}
				type='text'
				ref={textInput}
				className='todo-input'
			/>
			<button onClick={addTodo}>add</button>
			<ul className='todo-list'>
				{todos.map(item => (
					<li key={item.id} className='todo-list__item'>
						<span>{item.text}</span>
						<button onClick={() => todoComplete(item.id)}>complete</button>
						<button onClick={() => todoDelete(item.id)}>delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
