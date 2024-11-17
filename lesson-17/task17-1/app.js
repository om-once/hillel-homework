class Calculator {
	add(a, b) {
		if (!isNaN(a) && !isNaN(b)) {
			return a + b;
		} else {
			alert('Один з аргументів не число!');
		}
	}
	subtract(a, b) {
		if (!isNaN(a) && !isNaN(b)) {
			return a - b;
		} else {
			alert('Один з аргументів не число!');
		}
	}
	multiply(a, b) {
		if (!isNaN(a) && !isNaN(b)) {
			return a * b;
		} else {
			alert('Один з аргументів не число!');
		}
	}
	divide(a, b) {
		if (a === 0 || b === 0) {
			return 0;
		} else if (!isNaN(a) && !isNaN(b)) {
			return a / b;
		} else {
			alert('Один з аргументів не число!');
		}
	}
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8

console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18

console.log(calc.divide(8, 0)); // 4
