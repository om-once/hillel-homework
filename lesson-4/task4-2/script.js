const num = prompt('Введіть 3х значне число:');
if (!isFinite(num)) {
	console.log('Ви ввели не число');
} else if (num.length < 3 || num.length > 3) {
	console.log('Введене число не 3х значне');
} else {
	const setFromNum = new Set(num);
	if (setFromNum.size === 1) {
		console.log('Всі цифри однакові');
	} else if (setFromNum.size === 2) {
		console.log('Серед цифр є однакові');
	} else {
		console.log('Усі цифри різні');
	}
}
