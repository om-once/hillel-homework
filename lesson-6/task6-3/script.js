function removeElement(array, item) {
	if (array.length <= 0) {
		return 'Масив порожній!';
	}
	let newArr = [];
	for (let key in array) {
		if (array[key] === item) {
			continue;
		}
		newArr.push(array[key]);
	}
	if (array.length === newArr.length) {
		return 'Введеного елемента для видалення в масиві немає';
	}
	return newArr;
}

console.log(removeElement([2, 'hi', true, 45, 'jack'], 'hi'));
