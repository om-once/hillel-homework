const birthYear = prompt('Введіть рік народження');
const cityLive = prompt('Введіть місто в якому живете');
const loveSport = prompt('Ваш улюблений вид спорту');

const capitals = [
	{
		capital: 'Лондон',
		country: 'Великої Британії',
	},
	{
		capital: 'Київ',
		country: 'України',
	},
	{
		capital: 'Вашингтон',
		country: 'США',
	},
];

const champions = [
	{
		sport: 'Бокс',
		champion: 'Олександр Усик',
	},
	{
		sport: 'Футбол',
		champion: 'Андрій Шевченко',
	},
	{
		sport: 'Боротьба',
		champion: 'Жан Беленюк',
	},
];

if (birthYear.trim() === '' || birthYear === null || !isFinite(birthYear)) {
	alert(
		'Шкода що ви не захотіли ввести свою дату народження або ввели її в неправильному форматі',
	);
} else if (cityLive.trim() === '' || cityLive === null) {
	alert('Шкода що ви не захотіли ввести місто в якому живете');
} else if (loveSport.trim() === '' || loveSport === null) {
	alert('Шкода що ви не захотіли ввести улюблений вид спорту');
} else {
	let yearsOld = 2024 - Number(birthYear);
	let cheсkCity = capitals.find(item => {
		return item.capital.toLowerCase() === cityLive.toLowerCase();
	});
	let cheсkChampions = champions.find(item => {
		return item.sport.toLowerCase() === loveSport.toLowerCase();
	});
	if (cheсkCity && !cheсkChampions) {
		alert(
			`Твій вік ${yearsOld}. Ти живеш у столиці - ${cheсkCity.country}. Твій улюблений вид спорту - ${loveSport}`,
		);
	} else if (!cheсkCity && cheсkChampions) {
		alert(
			`Твій вік ${yearsOld}. Ти живеш у місті - ${cityLive}. Твій улюблений вид спорту - ${loveSport}. Круто! Хочеш бути як ${cheсkChampions.champion}?`,
		);
	} else if (cheсkCity && cheсkChampions) {
		alert(
			`Твій вік ${yearsOld}. Ти живеш у столиці ${cheсkCity.country}. Твій улюблений вид спорту - ${loveSport}. Круто! Хочеш бути як ${cheсkChampions.champion}?`,
		);
	} else {
		alert(
			`Твій вік ${yearsOld}. Ти живеш у місті - ${cityLive}. Твій улюблений вид спорту - ${loveSport}`,
		);
	}
}
