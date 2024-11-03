const form = document.querySelector('.form');
const inputName = document.querySelector('#name');
const inputMessage = document.querySelector('#message');
const inputPhone = document.querySelector('#phone');
const inputEmail = document.querySelector('#email');
const btnSubmit = form.querySelector('button');

function checkInputField(regExp, item) {
	if (regExp.test(item.value)) {
		item.nextElementSibling.classList.remove('error');
	} else {
		item.nextElementSibling.classList.add('error');
	}
}

inputName.addEventListener('input', () => {
	checkInputField(/.{2,}/, inputName);
});
inputMessage.addEventListener('input', () => {
	checkInputField(/.{5,}/, inputMessage);
});
inputPhone.addEventListener('input', () => {
	checkInputField(/^\+380\d{9}$/, inputPhone);
});
inputEmail.addEventListener('input', () => {
	checkInputField(
		/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g,
		inputEmail,
	);
});

form.addEventListener('submit', event => {
	event.preventDefault();
	checkInputField(/.{2,}/, inputName);
	checkInputField(/.{5,}/, inputMessage);
	checkInputField(/^\+380\d{9}$/, inputPhone);
	checkInputField(
		/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g,
		inputEmail,
	);
	if (
		inputName.value.trim() === '' ||
		inputMessage.value.trim() === '' ||
		inputPhone.value.trim() === '' ||
		inputEmail.value.trim() === ''
	) {
		alert('Необхідно заповнити всі поля!');
	} else {
		console.log(`
			Name: ${inputName.value}
			Message: ${inputMessage.value}
			Phone: ${inputPhone.value}
			Email: ${inputEmail.value}
		`);
	}
});
