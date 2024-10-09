let str = prompt('Задайте строку з якої будуть видалені символи:');
while (str === '' || str === null) {
	alert('Ви не написали строку, з якої будуть видалені символи');
	str = prompt('Задайте строку з якої будуть видалені символи:');
}

let symbols = prompt('Задайте символи, які необхідно видалити зі строки:');
while (symbols === '' || symbols === null) {
	alert('Ви не задали символи, які необхідно видалити зі строки');
	symbols = prompt('Задайте символи, які необхідно видалити зі строки:');
}

function func(str, symbols) {
	let newStr = str;
	for (let item of symbols) {
		const symbol = item.trim();
		newStr = newStr.replace(new RegExp(symbol, 'g'), '');
	}
	if (str.length === newStr.length) {
		return 'В тексті не знайдено введених символів';
	}
	return newStr;
}

console.log(func(str, symbols));
