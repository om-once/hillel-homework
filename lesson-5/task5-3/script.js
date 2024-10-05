let N = +prompt('Введіть ціле число:');
while (!Number.isInteger(N)) {
	N = +prompt('Введіть ціле число:');
}
for (let i = 1; i <= 100; i++) {
	if (Math.pow(i, 2) <= N) {
		console.log(i);
	}
}
