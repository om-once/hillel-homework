const company = {
	sales: [
		{ name: 'John', salary: 1000 },
		{ name: 'Alice', salary: 600 },
	],
	development: {
		web: [
			{ name: 'Peter', salary: 2000 },
			{ name: 'Alex', salary: 1000 },
		],
		internals: [{ name: 'Jack', salary: 1300 }],
	},
};

function calculateSumOfSalary(department) {
	if (Array.isArray(department)) {
		return department.reduce((acc, curr) => acc + curr.salary, 0);
	} else {
		let total = 0;
		for (let subdep in department) {
			total += calculateSumOfSalary(department[subdep]);
		}
		return total;
	}
}

console.log(calculateSumOfSalary(company));
