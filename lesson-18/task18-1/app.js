const timerElement = document.querySelector('.timer__count');
let timeInSeconds = 85;

function formatTime(seconds) {
	if (!isNaN(timeInSeconds)) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${String(minutes).padStart(2, '0')}:${String(
			remainingSeconds,
		).padStart(2, '0')}`;
	} else {
		alert('Ви вказали не число!');
	}
}

function updateTimer() {
	timerElement.textContent = formatTime(timeInSeconds);
	if (timeInSeconds > 0) {
		timeInSeconds--;
	} else {
		clearInterval(timerInterval);
		alert('Час вийшов!');
	}
}
updateTimer();

const timerInterval = setInterval(updateTimer, 1000);
