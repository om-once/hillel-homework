const addTodoBtn = document.querySelector('#todo-add');
const todoList = document.querySelector('#todo-list');
const todoName = document.querySelector('#todo-name');

const API_URL = 'http://localhost:8080/todos';

const fetchData = async (url, options = {}) => {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP Error: ${response.status}`);
		}
		return response.json();
	} catch (error) {
		console.error('Error with fetch:', error);
		alert(`Помилка: ${error.message}`);
	}
};

const renderTodo = ({ text, _id, checked }) => {
	const todoItem = document.createElement('li');
	todoItem.setAttribute('id', _id);
	todoItem.classList.add('todo-list__item');

	const todoItemInput = document.createElement('input');
	todoItemInput.setAttribute('type', 'checkbox');
	todoItemInput.checked = checked;

	const todoItemTask = document.createElement('p');
	todoItemTask.classList.add('todo-list__text');
	todoItemTask.textContent = text;

	const todoItemBtn = document.createElement('button');
	todoItemBtn.classList.add('btn', 'btn-delete');
	todoItemBtn.textContent = 'Видалити';

	if (checked) {
		todoItemTask.classList.add('line-through');
	}

	todoList.append(todoItem);
	todoItem.append(todoItemInput, todoItemTask, todoItemBtn);
};

const getTodos = async () => {
	const todos = await fetchData(API_URL);
	if (todos) {
		todoList.innerHTML = '';
		todos.forEach(todo => renderTodo(todo));
	}
};

const addTodo = async text => {
	const newTodo = await fetchData(API_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			text,
			checked: false,
			buttonId: `button-${+new Date()}`,
		}),
	});

	if (newTodo) {
		renderTodo(newTodo);
		todoName.value = '';
	}
};

const deleteTodo = async id => {
	const response = await fetch(`${API_URL}/${id}`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
	});
	document.getElementById(id).remove();
	console.log(`Задачу ${id} видалено успішно.`);
};

const updateTodo = async (id, checked) => {
	const updatedTodo = await fetchData(`${API_URL}/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			id,
			checked,
		}),
	});

	if (updatedTodo) {
		console.log(`Задачу ${id} оновлено:`, updatedTodo);
	}
};

addTodoBtn.addEventListener('click', () => {
	const todoText = todoName.value.trim();
	if (!todoText) {
		alert('Введіть текст завдання!');
		return;
	}
	addTodo(todoText);
});

todoList.addEventListener('click', event => {
	const elem = event.target;
	const parentId = elem.parentElement.getAttribute('id');

	if (elem.tagName === 'BUTTON') {
		console.log(`Видалення завдання з ID: ${parentId}`);
		deleteTodo(parentId);
	}

	if (elem.tagName === 'INPUT') {
		console.log(
			`Оновлення статусу завдання з ID: ${parentId}, checked: ${elem.checked}`,
		);
		const todoTask = elem.parentElement.querySelector('p');
		if (elem.checked) {
			todoTask.classList.add('line-through');
		} else {
			todoTask.classList.remove('line-through');
		}
		updateTodo(parentId, elem.checked);
	}
});

getTodos();
