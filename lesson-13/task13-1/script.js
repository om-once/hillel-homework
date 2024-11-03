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

function validateNameValue() {
	checkInputField(/.{2,}/, inputName);
}

function validateMessageValue() {
	checkInputField(/.{5,}/, inputMessage);
}

function validatePhoneValue() {
	checkInputField(/^\+380\d{9}$/, inputPhone);
}

function validateEmailValue() {
	checkInputField(
		/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g,
		inputEmail,
	);
}

inputName.addEventListener('input', validateNameValue);
inputMessage.addEventListener('input', validateMessageValue);
inputPhone.addEventListener('input', validatePhoneValue);
inputEmail.addEventListener('input', validateEmailValue);

form.addEventListener('submit', event => {
	event.preventDefault();
	validateMessageValue();
	validateNameValue();
	validatePhoneValue();
	validateEmailValue();
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
