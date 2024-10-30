const parentBlock = document.querySelector('.parent-block');
parentBlock.addEventListener('click', event => {
	alert(`Клікнуто на кнопці: ${event.target.textContent}`);
});
