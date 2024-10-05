let N = +prompt('Введіть ціле число:');
while (!Number.isInteger(N)) {
	N = +prompt('Введіть ціле число:');
}

let isPrime = true;
if (N <= 1) {
	isPrime = false;
} else {
	for (let i = 2; i <= Math.sqrt(N); i++) {
		if (N % i === 0) {
			isPrime = false;
			break;
		}
	}
}

if (isPrime) {
	console.log(`Число ${N} - просте`);
} else {
	console.log(`Число ${N} - не просте`);
}
