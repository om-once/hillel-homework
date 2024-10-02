// Task 3.1
console.log('Task 3.1 ---------');

const num = 2;
const bigIntNum = 123n;
const str = 'hello';
const thisIsFunction = () => 'hello';
const obj = {
	name: 'John',
	age: 28,
};
const sym1 = Symbol('hi');
let undefinedValue;
const booleanValue = true;
const nullValue = null;
console.log(typeof num);
console.log(typeof bigIntNum);
console.log(typeof str);
console.log(typeof thisIsFunction);
console.log(typeof obj);
console.log(typeof sym1);
console.log(typeof undefinedValue);
console.log(typeof booleanValue);
console.log(typeof nullValue); // по факту це окремий тип null, але інтерпретатор вказує що цей тип об'єкт

// Task 3.2
console.log('Task 3.2 ---------');

const firstMessage = prompt('Enter first message:');
const secondMessage = prompt('Enter second message:');
const thirdMessage = prompt('Enter third message:');

console.log(
	`Рядки користувачів:
	${firstMessage}
	${secondMessage}
	${thirdMessage}`,
);

// Task 3.3
console.log('Task 3.3 ---------');

const someNumber = 10369;
const stringWithSpaces = someNumber.toString().split('').join(' ');
console.log(stringWithSpaces);
