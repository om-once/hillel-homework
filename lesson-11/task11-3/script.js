const imageBlock = document.querySelector('.image-block');
const imageChangeBtn = document.querySelector('button');

function randomImageChange() {
	imageBlock.innerHTML = '';
	const randomNumOfImage = Math.floor(Math.random() * (10 - 1) + 1);
	const newImg = imageBlock.appendChild(document.createElement('img'));
	newImg.setAttribute('src', `img/${randomNumOfImage}.jpg`);
	newImg.setAttribute('alt', `This is ${randomNumOfImage} image`);
}
randomImageChange();

imageChangeBtn.addEventListener('click', randomImageChange);
