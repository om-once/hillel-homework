const userName = prompt("Введіть ім'я користувача:");
if (userName === null) {
	alert('Ви скасували введення імені користувача');
} else if (userName.trim() === '') {
	alert("Ви не ввели ім'я користувача");
} else {
	alert(`Hello, ${userName}! How are you?`);
}
