const btnLocation = document.querySelector('.locate');
const btnLink = document.querySelector('.link');
let locationLink = '';

function getLocation() {
	const inputLink = prompt('Введіть посилання:');

	if (
		inputLink &&
		(inputLink.startsWith('http://') || inputLink.startsWith('https://'))
	) {
		locationLink = inputLink;
	} else {
		alert('Будь ласка, введіть коректне посилання.');
	}
}

function goToLocation() {
	if (locationLink) {
		window.location.href = locationLink;
	} else {
		alert(
			'Посилання не введено. Спочатку натисніть на кнопку "Ввести посилання".',
		);
	}
}

btnLocation.addEventListener('click', getLocation);
btnLink.addEventListener('click', goToLocation);
