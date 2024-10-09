const arr = [32, 25, 42, true, 'hello', 'man', 56, 24, 23];

function calcMiddleValueofArray(arr) {
	let sum = 0;
	let count = 0;

	if (arr.length === 0) {
		return 'Масив порожній';
	}

	for (let item of arr) {
		if (typeof item === 'number') {
			sum += item;
			count++;
		}
	}

	if (count === 0) {
		return 'В масиві немає чисел';
	}

	return sum / count;
}

console.log(calcMiddleValueofArray(arr));
