const todoList = document.querySelector('.todo-list');
const inputElement = document.querySelector('.todo-input');
const addBtn = document.querySelector('.todo-add');

function removeElementFromToDo(event) {
	if (event.target.tagName === 'BUTTON') {
		event.target.parentElement.remove();
	}
}

function addElementToToDo() {
	const task = inputElement.value.trim();
	if (task === '') {
		alert('Будь ласка, введіть текст завдання.');
		return;
	}

	const newItem = document.createElement('li');
	const newItemTextElement = document.createElement('span');
	const newItemButton = document.createElement('button');

	newItemTextElement.textContent = task;
	newItemButton.textContent = 'Видалити';

	newItem.appendChild(newItemTextElement);
	newItem.appendChild(newItemButton);
	todoList.appendChild(newItem);

	inputElement.value = '';
	inputElement.focus();
}

addBtn.addEventListener('click', addElementToToDo);

inputElement.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		addElementToToDo();
	}
});

todoList.addEventListener('click', removeElementFromToDo);
