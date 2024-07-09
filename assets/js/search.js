const fetchButton = document.getElementById('fetch-button'); 
const cityForecastEl = document.getElementById('city-name-input');
const pastSearchEl = document.getElementById('past-searches');


// function getCoordinates(event) {
//   event.preventDefault()

//   console.log(cityForecastEl.value)

//   let locationRequestURL = "http://api.openweathermap.org/geo/1.0/direct?q="+ cityForecastEl.value + "=&appid=a096090ef2291b9381ff1519ce80d339";

//   fetch(locationRequestURL)
//     .then(function (response) {
//       return response.json();
//     }) 
//     .then(function (data) {
//       array.forEach(city => {
//         const lat = data[city].lat;
//         const lon = data[city].lon;
//         console.log(data[city].lat);
//       });;
//       }
//     )};


      // const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityForecastEl.value + "&appid=aedff6b19ebb0a704cc38341604b8fc8&units=imperial"

function getCurrentWeather(event) {
  event.preventDefault()
  let getCurrentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityForecastEl.value + "&appid=a096090ef2291b9381ff1519ce80d339&units=imperial";

  fetch(getCurrentWeather)
  .then(function (response) {
    return response.json();
  }) 
  
}

function getApi(event) {
  event.preventDefault()

  saveSearchHistory(cityForecastEl.value)

 // https://api.openweathermap.org/data/2.5/weather?q=
 const requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityForecastEl.value + "&appid=a096090ef2291b9381ff1519ce80d339&units=imperial";
  // const requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.85003000&lon=-87.65005000&appid=a096090ef2291b9381ff1519ce80d339&units=imperial';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.endsWith('12:00:00')){
          const tempInF = data.list[i].main.temp;
            console.log("Temperature: " + tempInF + "°F");
          const windSpeed = data.list[i].wind.speed;
            console.log("Wind: " + windSpeed + "mph");
          const feelsLikeinF = data.list[i].main.feels_like;
            console.log("Feels Like: " + feelsLikeinF + "°F");
          const humidity = data.list[i].main.humidity;
            console.log("Humidity: " + humidity + "%");
          const weatherIcon = data.list[i].weather.icon;
            console.log(weatherIcon);


      
        const weatherCard = document.createElement('div');
        const weatherDate = document.createElement('p');
        const weatherHumidity = document.createElement('p');
        const weatherTemperature = document.createElement('p'); 
        const weatherWind = document.createElement('p')
        // const weather
        weatherDate.textContent = data.list[i].dt_txt;
        weatherHumidity.textContent = data.list[i].main.humidity + '%';
        weatherTemperature.textContent = data.list[i].main.temp + '°';
        weatherWind.textContent = data.list[i].wind.speed + 'mph';
        weatherCard.appendChild(weatherDate);
        weatherCard.appendChild(weatherTemperature);
        weatherCard.appendChild(weatherHumidity);
        document.querySelector(".forecast").appendChild(weatherCard)
      };}
        // issueContainer.append(issueTitle);
      })
    };


const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []
console.log(searchHistory)

for (let i = 0;  i < searchHistory.length; i++) {
    const allSearches = searchHistory[i];
    console.log(allSearches)
    // let allPostsEL = document.createElement('section')
    // document.querySelector(".inputcard").appendChild(allPostsEl)

    let cityNameEl = document.createElement('button');
    cityNameEl.classList.add("button", "is-success")
    cityNameEl.textContent = allSearches;
    pastSearchEl.appendChild(cityNameEl);
}

function saveSearchHistory(cityName) {
  const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []
  searchHistory.push(cityName);
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
}

// const forecasts = readForecastFromStorage();
// forecast

fetchButton.addEventListener('click', getApi)
