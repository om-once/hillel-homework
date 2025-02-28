const inputCity = document.querySelector('.weather-widget__input');
const btnSubmit = document.querySelector('#btn-submit');
const cityName = document.querySelector('.weather-widget__city');
const windSpeed = document.querySelector('#wind');
const humidityPer = document.querySelector('#humidity');
const weatherDesc = document.querySelector('.weather-widget__desc');
const pressureValue = document.querySelector('#pressure');
const iconWeatherWrapper = document.querySelector('.weather-widget__icon');
const windDeg = document.querySelector('#deg');
const tempValue = document.querySelector('#temp');
const dayName = document.querySelector('.weather-widget__day');
const todayDate = document.querySelector('.weather-widget__date');
const windDegDirect = document.querySelector('.icon-wind');
const currentTimeCity = document.querySelector('.weather-widget__time');
let icon;
let iconUrl;
let cityValue;
let timezoneOffsetInSeconds;
let intervalId;

function getCityWeather() {
	currentTimeCity.textContent = '';
	iconWeatherWrapper.innerHTML = '';
	clearInterval(intervalId);
	let weatherIcon;
	cityValue = inputCity.value.toUpperCase();
	cityName.textContent = cityValue;
	console.log(cityValue);
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			if (data.cod != 200) {
				alert(data.message);
			} else {
				timezoneOffsetInSeconds = data.timezone;
				function updateClock() {
					const currentDate = new Date();
					const localTime = currentDate.getTime();
					const localOffset = currentDate.getTimezoneOffset() * 60000;
					const utc = localTime + localOffset;
					const cityTime = utc + timezoneOffsetInSeconds * 1000;
					const adjustedDate = new Date(cityTime);

					const year = adjustedDate.getFullYear();
					const month = adjustedDate.getMonth() + 1;
					const day = adjustedDate.getDate();
					const dayOfWeek = adjustedDate.getDay();
					const hours = adjustedDate.getHours().toString().padStart(2, '0');
					const minutes = adjustedDate.getMinutes().toString().padStart(2, '0');
					const seconds = adjustedDate.getSeconds().toString().padStart(2, '0');
					const currentTime = `${hours}:${minutes}:${seconds}`;
					currentTimeCity.textContent = currentTime;

					const daysOfWeek = [
						'Sunday',
						'Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
					];
					dayName.textContent = daysOfWeek[dayOfWeek];
					todayDate.textContent = `${day}/${month}/${year}`;
				}
				updateClock();
				intervalId = setInterval(updateClock, 1000);

				windSpeed.textContent = data.wind.speed.toFixed(2);
				humidityPer.textContent = data.main.humidity + ' %';
				weatherDesc.textContent = data.weather[0].description;
				pressureValue.textContent = data.main.pressure;
				windDeg.textContent = data.wind.deg;
				windDegDirect.style.transform = `rotate(${data.wind.deg}deg)`;
				tempValue.textContent = Math.floor(data.main.temp);
				icon = data.weather[0].icon;
				iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
				weatherIcon = document.createElement('img');
				weatherIcon.setAttribute('src', iconUrl);
				iconWeatherWrapper.append(weatherIcon);
			}
		});
}

btnSubmit.addEventListener('click', getCityWeather);
inputCity.addEventListener('keydown', e => {
	if (e.key === 'Enter') {
		getCityWeather();
	}
});
