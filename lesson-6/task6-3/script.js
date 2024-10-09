function removeElement(array, item) {
	if (array.length === 0) {
		return 'Масив порожній!';
	}
	const newArr = array.filter(el => el !== item);

	if (newArr.length === array.length) {
		return 'Введеного елемента для видалення в масиві немає';
	}

	return newArr;
}

console.log(removeElement([2, 'hi', true, 45, 'jack'], 'hi'));
