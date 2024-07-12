function clearContainers() {
	const cWeather = document.getElementById("current-weather-container");
	cWeather.innerHTML = "";

	const forecast = document.getElementById("forecast");
	forecast.innerHTML = "";
	console.log("I'm running");
}

// if (){
//   let cityForecastEl = cityInputEl;
// } else {
//   let cityForecastEl =

// }

// function getCity(event){
//   event.preventDefault()
//   const getCityName = cityForecastEl.value.trim;
//   if (getCityName){
//     return getCityName
//   } else {
//     let cityForecastEl = event.target.innerText;
//   getCurrentWeather(event);
//   getApi(event);
// // //   console.log("I'm Working");
//   }
// }

// function searchFromHistory(cityFromHistory, event) {
//   event.preventDefault()
//   let cityFromHistory = event.target.innerText;
//   // getCurrentWeather(event);
//   // getApi(event);
//   console.log("I'm Working");
// }

// const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityForecastEl.value + "&appid=aedff6b19ebb0a704cc38341604b8fc8&units=imperial"

function getCurrentWeather(city) {
	let getCurrentWeather =
		"https://api.openweathermap.org/data/2.5/weather?q=" +
		city +
		"&appid=9f096b9225d3366a0b3ad9b65fc340ac&units=imperial";

	// let cityNameEl = document.createElement('button');
	// // cityNameEl.setAttribute('id', 'output')
	// cityNameEl.classList.add( "city-btn", "button", "is-success")
	// cityNameEl.textContent = allSearches;
	// // cityNameEl.addEventListener('click', searchFromHistory)
	// pastSearchEl.appendChild(cityNameEl);
	// cityButton = document.querySelector('.city-btn')

	fetch(getCurrentWeather)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			{
				if (data) {
					console.log(data);
					const currentWeatherBanner = document.createElement("div");
					currentWeatherBanner.classList.add("card", "has-text-centered");
					// currentWeatherBanner.setAttribute('id', weatherChild)
					const weatherBannerIcon = document.createElement("img");
					const weatherBannerDate = document.createElement("h1");
					const weatherBannerHumidity = document.createElement("p");
					const weatherBannerTemperature = document.createElement("h1");
					const weatherBannerFeelsLike = document.createElement("p");
					const weatherBannerWind = document.createElement("p");

					weatherBannerDate.textContent = "Current Weather in " + data.name;
					weatherBannerIcon.src =
						"https://openweathermap.org/img/wn/" +
						data.weather[0].icon +
						"@2x.png";
					data.weather[0].icon;
					weatherBannerTemperature.textContent = data.main.temp + "°";
					weatherBannerFeelsLike.textContent =
						"Feels Like: " + data.main.feels_like + "°";
					weatherBannerHumidity.textContent =
						"Humidity: " + data.main.humidity + "%";
					weatherBannerWind.textContent = "Wind: " + data.wind.speed + " mph";
					currentWeatherBanner.appendChild(weatherBannerDate);
					currentWeatherBanner.appendChild(weatherBannerIcon);
					currentWeatherBanner.appendChild(weatherBannerTemperature);
					currentWeatherBanner.appendChild(weatherBannerFeelsLike);
					currentWeatherBanner.appendChild(weatherBannerHumidity);
					currentWeatherBanner.appendChild(weatherBannerFeelsLike);
					currentWeatherBanner.appendChild(weatherBannerWind);
					document
						.getElementById("current-weather-container")
						.appendChild(currentWeatherBanner);
				}
			}
		});
}

function getFiveDayForecast(city) {
	
	const requestUrl =
		"https://api.openweathermap.org/data/2.5/forecast?q=" +
		city +
		"&appid=9f096b9225d3366a0b3ad9b65fc340ac&units=imperial";
	
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			for (let i = 0; i < data.list.length; i++) {
				if (data.list[i].dt_txt.endsWith("12:00:00")) {
					const icon =
						"https://openweathermap.org/img/wn/" +
						data.list[i].weather[0].icon +
						".png";
					const tempInF = data.list[i].main.temp;
					console.log("Temperature: " + tempInF + "°F");
					const windSpeed = data.list[i].wind.speed;
					console.log("Wind: " + windSpeed + "mph");
					const feelsLikeinF = data.list[i].main.feels_like;
					console.log("Feels Like: " + feelsLikeinF + "°F");
					const humidity = data.list[i].main.humidity;
					console.log("Humidity: " + humidity + "%");

					const weatherCard = document.createElement("div");
					weatherCard.classList.add(
						"card",
						"column",
						"is-one-fifth",
						"has-text-centered"
					);
					const weatherDate = document.createElement("h2");
					const weatherIcon = document.createElement("img");
					const weatherHumidity = document.createElement("p");
					const weatherTemperature = document.createElement("h1");
					const weatherFeelsLike = document.createElement("p");
					const weatherWind = document.createElement("p");
					weatherDate.textContent = data.list[i].dt_txt;
					weatherIcon.src =
						"http://openweathermap.org/img/wn/" +
						data.list[i].weather[0].icon +
						".png";
					weatherTemperature.textContent = data.list[i].main.temp + "°";
					weatherFeelsLike.textContent =
						"Feels Like: " + data.list[i].main.feels_like + "°";
					weatherHumidity.textContent =
						"Humidity: " + data.list[i].main.humidity + "%";
					weatherWind.textContent = "Wind: " + data.list[i].wind.speed + " mph";
					weatherCard.appendChild(weatherIcon);
					weatherCard.appendChild(weatherDate);
					weatherCard.appendChild(weatherTemperature);
					weatherCard.appendChild(weatherFeelsLike);
					weatherCard.appendChild(weatherHumidity);
					weatherCard.appendChild(weatherWind);
					document.querySelector(".forecast").appendChild(weatherCard);

				}
			}
		});
}



const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
console.log(searchHistory);
renderHistoryButtons();




function renderHistoryButtons() {
	const pastSearchEl = document.querySelector("#past-searches");
  pastSearchEl.innerHTML = "";

	for (let i = 0; i < searchHistory.length; i++) {
		const allSearches = searchHistory[i];
		console.log(allSearches);
		

		let cityNameEl = document.createElement("button");
	
		cityNameEl.classList.add("city-btn", "button", "is-success");
		cityNameEl.textContent = allSearches;
		
		pastSearchEl.appendChild(cityNameEl);
		cityButton = document.querySelector(".city-btn");
		
	}
}

document.querySelector("#past-searches").addEventListener("click", function (event) {
	if (event.target.matches(".city-btn")) {
		console.log("CITY BUTTON", event.target.textContent);
		clearContainers();
		getCurrentWeather(event.target.textContent);
		getFiveDayForecast(event.target.textContent);
    searchCityHistory(event.target.textContent)
	}
});

function saveSearchHistory(city) {
	const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
	searchHistory.push(city);
	localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}

let searchCityHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];



// }
const inputForm = document.getElementById("inputForm");
const cityInputEl = document.getElementById("city-name-input");
const submitButton = document.getElementById("fetch-button");

// Get all elements with the class 'historyButton'
const historyButtons = document.querySelectorAll(".city-btn");

// Event listener for form submit
inputForm.addEventListener("submit"), function (event){
	event.preventDefault(); // Prevent form submission
	let city = cityInputEl.value; // Get input value
	console.log("Result from input:", city); // Log result for testing
	clearContainers(event);
	// saveSearchHistory(event)
	getCurrentWeather(city);
	getFiveDayForecast(city);
  checkSearchHistory(city);
};

	// check searchHistory to see if City is already there.
  function checkSearchHistory(city){
if (searchCityHistory.includes(city)) {
  console.log("don't add me")
} else {
searchCityHistory.push(city),
saveSearchHistory(city)}
    // If not, push it to end of history
    // save to local storage
    // renderHistoryButton()
};

