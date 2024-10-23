const contacts = {
	contactsArray: [
		{
			name: 'John',
			number: '380111111111',
			email: 'john@gmail.com',
		},
		{
			name: 'Leyla',
			number: '380222222222',
			email: 'leyla@gmail.com',
		},
		{
			name: 'Larry',
			number: '380333333333',
			email: 'larry@gmail.com',
		},
		{
			name: 'Simon',
			number: '380444444444',
			email: 'simon@gmail.com',
		},
	],
	getContactByName() {
		const searchName = prompt("Вкажіть ім'я для пошуку контакту:");
		const foundContact = this.contactsArray.find(
			item => item.name.toLowerCase() === searchName.toLowerCase(),
		);

		if (foundContact) {
			console.log(`Знайдено контакт: ${foundContact.name}`);
			return foundContact;
		} else {
			console.log('Нажаль даного контакту немає у вашій записній книжці.');
			return null;
		}
	},
	addNewContact() {
		const dogSymbol = '@';
		let name = prompt("Вкажіть ім'я контакту:");

		while (
			this.contactsArray.some(
				item => item.name.toLowerCase() === name.toLowerCase(),
			)
		) {
			alert("Дане ім'я вже є в списку ваших контактів!");
			name = prompt("Вкажіть інше ім'я контакту:");
		}

		let number = prompt('Вкажіть номер телефону контакту:');
		while (
			isNaN(number) ||
			this.contactsArray.some(item => item.number === number)
		) {
			alert('Номер має містити тільки цифри або вже є в списку контактів!');
			number = prompt('Вкажіть інший номер телефону:');
		}

		let email = prompt('Вкажіть email контакту:');
		while (
			email.indexOf(dogSymbol) === -1 ||
			this.contactsArray.some(
				item => item.email.toLowerCase() === email.toLowerCase(),
			)
		) {
			alert('Email має містити @ або вже є в списку контактів!');
			email = prompt('Вкажіть інший email контакту:');
		}

		this.contactsArray.push({ name, number, email });
		alert('Контакт успішно додано!');
	},
};
contacts.addNewContact();
console.log(contacts.getContactByName());
console.log(contacts);
