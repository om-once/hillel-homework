const form = document.querySelector('#form');
const inputText = document.querySelector('#form-text');
const todoList = document.querySelector('#todo-list');

const todoItems = [];

function createTodoItem() {
	const todoItemObj = {
		todoItemId: `item-${+new Date()}`,
		todoItemInputId: `item-input-${+new Date()}`,
		todoItemInputStatus: false,
		todoItemTextId: `item-text-${+new Date()}`,
		todoItemTextValue: inputText.value,
		todoItemBtnId: `item-btn-${+new Date()}`,
		todoItemBtnText: 'Видалити',
	};

	const postResponse = async () => {
		return fetch('http://localhost:8080/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(todoItemObj),
		});
	};

	const sendPost = async () => {
		const response = await postResponse();
		const data = await response.json();
	};

	sendPost();

	todoItems.push(todoItemObj);

	const {
		todoItemId,
		todoItemInputId,
		todoItemTextId,
		todoItemTextValue,
		todoItemBtnId,
		todoItemBtnText,
	} = todoItemObj;

	const todoItem = document.createElement('li');
	const todoItemInput = document.createElement('input');
	const todoItemText = document.createElement('p');
	const todoItemBtn = document.createElement('button');

	todoItem.classList.add('todo-list__item');
	todoItemInput.classList.add('todo-list__checkbox');
	todoItemText.classList.add('todo-list__text');
	todoItemBtn.classList.add('btn');
	todoItemBtn.classList.add('btn-delete');

	todoItem.setAttribute('id', todoItemId);
	todoItemInput.setAttribute('id', todoItemInputId);
	todoItemInput.setAttribute('type', 'checkbox');
	todoItemText.setAttribute('id', todoItemTextId);
	todoItemBtn.setAttribute('id', todoItemBtnId);

	todoItemText.textContent = todoItemTextValue;
	todoItemBtn.textContent = todoItemBtnText;

	todoList.append(todoItem);
	todoItem.append(todoItemInput, todoItemText, todoItemBtn);
}

form.addEventListener('submit', event => {
	event.preventDefault();
	createTodoItem();
	form.reset();
	console.log(todoItems);
});

todoList.addEventListener('click', event => {
	checkTodoStatus(event.target);
	deleteTodoItem(event.target);
});

function checkTodoStatus(el) {
	if (el.tagName === 'INPUT') {
		const elemId = el.getAttribute('id');
		if (el.checked) {
			el.parentElement.classList.add('line-through');
			todoItems.forEach(item => {
				if (item.todoItemInputId === elemId) {
					item.todoItemInputStatus = true;
				}
			});
		} else {
			el.parentElement.classList.remove('line-through');
			todoItems.forEach(item => {
				if (item.todoItemInputId === elemId) {
					item.todoItemInputStatus = false;
				}
			});
		}
		console.log(todoItems);
		console.log(elemId);
	}
}

function deleteTodoItem(el) {
	let elIndex = 0;
	if (el.tagName === 'BUTTON') {
		const elemId = el.getAttribute('id');
		console.log(elemId);
		todoItems.forEach((item, index) => {
			if (item.todoItemBtnId === elemId) {
				elIndex = index;
				todoItems.splice(index, 1);
			}
		});
		const todoItemElements = document.querySelectorAll('.todo-list__item');
		todoItemElements[elIndex].remove();
		console.log(todoItems);
	}
}

const getResponse = async () => {
	return fetch('http://localhost:8080/todos');
};

const getGet = async () => {
	const response = await getResponse();
	const data = await response.json();
	console.log(data);
};

getGet();
