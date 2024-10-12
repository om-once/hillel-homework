function getNumberAbove100() {
	let attempts = 10;
	let lastInput = null;

	return function askNumber() {
		while (attempts > 0) {
			let userInput = prompt('Введіть число більше 100:');

			if (userInput === null) {
				console.log('Введення скасовано користувачем.');
				return;
			}

			let number = Number(userInput);

			if (isNaN(number)) {
				alert('Введено не число. Спробуйте ще раз.');
				continue;
			}

			lastInput = number;

			if (number > 100) {
				console.log(`Ви ввели число більше 100: ${number}`);
				return;
			}

			attempts--;
		}

		console.log(`Спроби закінчилися. Останнє введене число: ${lastInput}`);
	};
}

const start = getNumberAbove100();
start();
