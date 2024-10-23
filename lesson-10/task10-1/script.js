const user = {
	name: 'John',
	age: 21,
	location: 'London, UK',
	getInfo() {
		return `
		Name: ${this.name}
		Age: ${this.age} 
		Location: ${this.location}
		`;
	},
};

console.log(user.getInfo());
