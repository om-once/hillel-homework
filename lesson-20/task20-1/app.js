const $form = $('.js--form');
const $inputTask = $('.js--form__input');
const $list = $('.js--todos-wrapper');

const data = localStorage.getItem('itemList');
let itemList = data ? JSON.parse(data) : [];

for (let item of itemList) {
	createElement(item);
}

$form.on('submit', event => {
	event.preventDefault();
	setLocalStorage();
	$form.get(0).reset();
});

function setLocalStorage() {
	const obj = {
		task: $inputTask.val(),
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
	const $listItem = jQuery('<li>');
	const $listInput = jQuery('<input>');
	const $span = jQuery('<span>');
	const $btn = jQuery('<button>');

	$btn.text(obj.btn);
	$span.text(obj.task);
	$listInput.attr({
		type: 'checkbox',
		id: obj.inputId,
	});
	$btn.attr('id', obj.btnId);
	$listInput.prop('checked', obj.completed);

	if (obj.completed) $listItem.addClass('todo-item--checked');

	$span.on('click', () => {
		$('.modal-body').text(obj.task);
		$('#modal').modal('show');
	});

	$listInput.on('change', () => {
		toggleCompleted(obj.inputId, $listInput.prop('checked'), $listItem);
	});

	$btn.on('click', () => {
		$btn.parent().remove();
		itemRemove(obj.btnId);
	});

	$listItem.addClass('todo-item');
	$span.addClass('todo-item__description');
	$btn.addClass('todo-item__delete');
	$list.append($listItem);
	$listItem.append($listInput);
	$listItem.append($span);
	$listItem.append($btn);
}

function toggleCompleted(id, completed, listItem) {
	const itemIndex = itemList.findIndex(item => item.inputId === id);
	if (itemIndex !== -1) {
		itemList[itemIndex].completed = completed;
		if (completed) {
			listItem.addClass('todo-item--checked');
		} else {
			listItem.removeClass('todo-item--checked');
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
