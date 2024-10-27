const textInBlock = document.querySelector('.block');
const changeColorBtn = document.querySelector('button');
changeColorBtn.addEventListener('click', () => {
	textInBlock.classList.toggle('red');
});
