const form = document.querySelector('.js--form');
const inputTask = document.querySelector('.js--form__input');
const list = document.querySelector('.js--todos-wrapper');

const data = localStorage.getItem('itemList');

let itemList = [];

if (data != '' && data !== null) {
	itemList = JSON.parse(data);
}

for (let item of itemList) {
	createElement(item);
}

form.addEventListener('submit', event => {
	event.preventDefault();
	setLocalStorage();
	form.reset();
});

function setLocalStorage() {
	const obj = {
		task: inputTask.value,
		inputId: +new Date(),
		completed: false,
		btn: 'Видалити',
		btnId: `btn-${+new Date()}`,
	};
	itemList.push(obj);
	localStorage.setItem('itemList', JSON.stringify(itemList));
	createElement(obj);
}

function createElement(obj) {
	const listItem = document.createElement('li');
	const listInput = document.createElement('input');
	const span = document.createElement('span');
	const btn = document.createElement('button');
	btn.textContent = obj.btn;
	span.textContent = obj.task;
	listInput.setAttribute('type', 'checkbox');
	listInput.setAttribute('id', obj.inputId);
	btn.setAttribute('id', obj.btnId);
	listInput.checked = obj.completed;
	if (obj.completed) listItem.classList.add('todo-item--checked');
	listInput.addEventListener('change', () => {
		toggleCompleted(obj.inputId, listInput.checked, listItem);
	});
	btn.addEventListener('click', () => {
		btn.parentElement.remove();
		itemRemove(obj.btnId);
	});
	listItem.classList.add('todo-item');
	span.classList.add('todo-item__description');
	btn.classList.add('todo-item__delete');
	list.append(listItem);
	listItem.append(listInput);
	listItem.append(span);
	listItem.append(btn);
}

function toggleCompleted(id, completed, listItem) {
	const itemIndex = itemList.findIndex(item => item.inputId === id);
	if (itemIndex !== -1) {
		itemList[itemIndex].completed = completed;
		if (completed) {
			listItem.classList.add('todo-item--checked');
		} else {
			listItem.classList.remove('todo-item--checked');
		}
		localStorage.setItem('itemList', JSON.stringify(itemList));
	}
}

function itemRemove(id) {
	const itemIndex = itemList.findIndex(item => item.btnId === id);
	if (itemIndex !== -1) {
		itemList.splice(itemIndex, 1);
		localStorage.setItem('itemList', JSON.stringify(itemList));
	}
}
