const fetchButton = document.getElementById('fetch-button'); 
let cityForecastEl = document.getElementById('city-name-input');
const pastSearchEl = document.getElementById('past-searches');


// function getCity(event){
//   event.preventDefault()
//   const getCityName = cityForecastEl.value.trim;
//   if (getCityName){
//     return getCityName
//   } else {

//   }
// }

// function searchFromHistory(event) {

//   event.preventDefault()
//   getCurrentWeather(event.target.innerText, event)
//   getApi(event.target.innerText, event)
//   let cityFromHistory = event.target.innerText
//   console.log("I'm Working")
// } 


      // const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityForecastEl.value + "&appid=aedff6b19ebb0a704cc38341604b8fc8&units=imperial"

function getCurrentWeather(event) {
  event.preventDefault()
  let getCurrentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityForecastEl.value + "&appid=9f096b9225d3366a0b3ad9b65fc340ac&units=imperial" 

  fetch(getCurrentWeather)
  .then(function (response) {
    return response.json();
  }) 
  .then (function(data){
    console.log(data)
    if (data){
      const currentWeatherBanner = document.createElement('div');
        currentWeatherBanner.classList.add('card')
        const weatherBannerIcon = document.createElement('img');
        const weatherBannerDate = document.createElement('h2');
        const weatherBannerHumidity = document.createElement('p');
        const weatherBannerTemperature = document.createElement('h1'); 
        const weatherBannerFeelsLike = document.createElement('p')
        const weatherBannerWind = document.createElement('p')
        
        weatherBannerDate.textContent = "Current Weather";
        weatherBannerIcon.src = "http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png"
        data.weather[0].icon;
        weatherBannerTemperature.textContent = data.main.temp + '°';
        weatherBannerFeelsLike.textContent = "Feels Like: " + data.main.feels_like + '°';
        weatherBannerHumidity.textContent = "Humidity: " + data.main.humidity + '%';
        weatherBannerWind.textContent = "Wind: " + data.wind.speed + 'mph';
        currentWeatherBanner.appendChild(weatherBannerDate);
        currentWeatherBanner.appendChild(weatherBannerIcon)
        currentWeatherBanner.appendChild(weatherBannerTemperature);
        currentWeatherBanner.appendChild(weatherBannerFeelsLike);
        currentWeatherBanner.appendChild(weatherBannerHumidity);
        currentWeatherBanner.appendChild(weatherBannerFeelsLike);
        document.querySelector(".current-weather").appendChild(currentWeatherBanner)
  }})

}



function getApi(event) {
  event.preventDefault()

  saveSearchHistory(cityForecastEl.value)

 // https://api.openweathermap.org/data/2.5/weather?q=
 const requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityForecastEl.value + "&appid=9f096b9225d3366a0b3ad9b65fc340ac&units=imperial";
  // const requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.85003000&lon=-87.65005000&appid=a096090ef2291b9381ff1519ce80d339&units=imperial';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.endsWith('12:00:00')){
          const icon = "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon +".png";
          const tempInF = data.list[i].main.temp;
            console.log("Temperature: " + tempInF + "°F");
          const windSpeed = data.list[i].wind.speed;
            console.log("Wind: " + windSpeed + "mph");
          const feelsLikeinF = data.list[i].main.feels_like;
            console.log("Feels Like: " + feelsLikeinF + "°F");
          const humidity = data.list[i].main.humidity;
            console.log("Humidity: " + humidity + "%");
          


      
        const weatherCard = document.createElement('div');
        weatherCard.classList.add('card')
        const weatherDate = document.createElement('h2');
        const weatherIcon = document.createElement('img');
        const weatherHumidity = document.createElement('p');
        const weatherTemperature = document.createElement('h1'); 
        const weatherFeelsLike = document.createElement('p')
        const weatherWind = document.createElement('p')
        // const weather
        weatherDate.textContent = data.list[i].dt_txt;
        weatherIcon.src = "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon +".png";
        weatherTemperature.textContent = data.list[i].main.temp + '°';
        weatherFeelsLike.textContent = "Feels Like: " + data.list[i].main.feels_like + '°';
        weatherHumidity.textContent = "Humidity: " + data.list[i].main.humidity + '%';
        weatherWind.textContent = "Wind: " + data.list[i].wind.speed + 'mph';
        weatherCard.appendChild(weatherIcon);
        weatherCard.appendChild(weatherDate);
        weatherCard.appendChild(weatherTemperature);
        weatherCard.appendChild(weatherFeelsLike);
        weatherCard.appendChild(weatherHumidity);
        weatherDate.appendChild(weatherFeelsLike);
        document.querySelector(".forecast").appendChild(weatherCard)
      };}
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
    // cityNameEl.addEventListener('click', searchFromHistory)

    pastSearchEl.appendChild(cityNameEl);
}

function saveSearchHistory(cityName) {
  const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []
  searchHistory.push(cityName);
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
}

// const forecasts = readForecastFromStorage();
// forecast



fetchButton.addEventListener('click', function(event){
  event.preventDefault;
  getCurrentWeather(event);
  getApi(event);
})
 