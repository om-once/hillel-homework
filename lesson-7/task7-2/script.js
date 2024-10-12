function curryMultiplyNums(x) {
	return function (y) {
		return x * y;
	};
}
console.log(curryMultiplyNums(2)(3));
console.log(curryMultiplyNums(7)(22));
