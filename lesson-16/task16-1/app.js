function Student(name, surname, birthYear, ratings) {
	this.name = name;
	this.surname = surname;
	this.birthYear = birthYear;
	this.ratingsArray = Array.isArray(ratings) ? ratings : [];
	this.attendance = [];
	this.maxAttendance = 25;

	this.calcStudentAge = () => {
		const date = new Date();
		return date.getFullYear() - birthYear;
	};

	this.present = () => {
		if (this.attendance.length < this.maxAttendance) {
			this.attendance.push(true);
		}
	};

	this.absent = () => {
		if (this.attendance.length < this.maxAttendance) {
			this.attendance.push(false);
		}
	};

	this.averageScore = () => {
		if (this.ratingsArray.length === 0) return 0;
		const sum = this.ratingsArray.reduce((current, item) => current + item, 0);
		return Math.round(sum / this.ratingsArray.length);
	};

	this.averageAttendance = () => {
		if (this.attendance.length === 0) return 0;
		const sum = this.attendance.reduce((current, item) => current + item, 0);
		return (sum / this.attendance.length).toFixed(2);
	};

	this.summary = () => {
		const averageScoreCount = this.averageScore();
		const averageAttendanceCount = this.averageAttendance();
		if (averageScoreCount > 90 && averageAttendanceCount > 0.9) {
			return 'Молодець!';
		} else if (averageScoreCount > 90 || averageAttendanceCount > 0.9) {
			return 'Добре, але можна краще!';
		} else {
			return 'Редиска!';
		}
	};
}

const student1 = new Student('John', 'Cena', 2004, [60, 71, 95, 60, 78, 75]);
const student2 = new Student('Ashley', 'Black', 2005, [76, 75, 81, 84, 72, 88]);
const student3 = new Student('James', 'Bond', 2005, [100, 95, 98, 91, 94, 95]);
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();
console.log(`Ім'я та прізвище студента: ${student1.name} ${student1.surname}`);
console.log(`Вік студента: ${student1.calcStudentAge()}`);
console.log(`Середня оцінка: ${student1.averageScore()}`);
console.log(`Середня відвідуваність: ${student1.averageAttendance()}`);
console.log(`Загальна оцінка студента: ${student1.summary()}`);

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
console.log('------------------');
console.log(`Ім'я та прізвище студента: ${student2.name} ${student2.surname}`);
console.log(`Вік студента: ${student2.calcStudentAge()}`);
console.log(`Середня оцінка: ${student2.averageScore()}`);
console.log(`Середня відвідуваність: ${student2.averageAttendance()}`);
console.log(`Загальна оцінка студента: ${student2.summary()}`);

student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

console.log('------------------');
console.log(`Ім'я та прізвище студента: ${student3.name} ${student3.surname}`);
console.log(`Вік студента: ${student3.calcStudentAge()}`);
console.log(`Середня оцінка: ${student3.averageScore()}`);
console.log(`Середня відвідуваність: ${student3.averageAttendance()}`);
console.log(`Загальна оцінка студента: ${student3.summary()}`);
