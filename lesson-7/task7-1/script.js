const calcSum = () => {
	let a = 0;
	return b => (a += b);
};
const sum = calcSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));
