const parentBlock = document.querySelector('.pifagor-table');
const tableElement = parentBlock.appendChild(document.createElement('table'));

for (let i = 1; i <= 10; i++) {
	const row = tableElement.appendChild(document.createElement('tr'));

	for (let j = 1; j <= 10; j++) {
		const cell = row.appendChild(document.createElement('td'));
		cell.textContent = i * j;
		cell.style.padding = '20px';
		cell.style.border = '1px solid #000';
	}
}

tableElement.style.border = '2px solid #000';
