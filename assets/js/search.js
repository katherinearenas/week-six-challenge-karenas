// const fetchButton = document.getElementById('fetch-button'); 
let cityForecastEl = document.getElementById('city-name-input');
const pastSearchEl = document.getElementById('past-searches');
// let cityInputEl = document.getElementById('city-name-input');
let cityFromButton = document.querySelectorAll("city-btn")


// let result;

// // Get elements by ID
// const cityInputEl = document.getElementById('city-name-input');
// const fetchButton = document.getElementById('fetch-button');

// // Get all elements with the class 'historyButton'
// const historyButtons = document.querySelectorAll('.city-btn');

// // Event listener for form submit
// fetchButton.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
//     result = userInput.value; // Get input value
//     console.log("Result from input:", result); // Log result for testing
// });

// // Event listener for each history button click
// historyButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//         result = button.textContent; // Get button text
//         console.log("Result from history button:", result); // Log result for testing
//     });
// });


function clearContainers(event) {
  event.preventDefault()
   const cWeather = document.getElementById('current-weather-container');
  cWeather.innerHTML = "";

  const forecast = document.getElementById('forecast');
  forecast.innerHTML = "";
  console.log("I'm running")
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

function getCurrentWeather(event) {
  event.preventDefault()
  let getCurrentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + result + "&appid=9f096b9225d3366a0b3ad9b65fc340ac&units=imperial" 

  fetch(getCurrentWeather)
  .then(function (response) {
    return response.json();
  }) 
  .then (function(data){{
    if (data){
      console.log(data)
      const currentWeatherBanner = document.createElement('div');
        currentWeatherBanner.classList.add('card')
        // currentWeatherBanner.setAttribute('id', weatherChild)
        const weatherBannerIcon = document.createElement('img');
        const weatherBannerDate = document.createElement('h2');
        const weatherBannerHumidity = document.createElement('p');
        const weatherBannerTemperature = document.createElement('h1'); 
        const weatherBannerFeelsLike = document.createElement('p')
        const weatherBannerWind = document.createElement('p')
        
        weatherBannerDate.textContent = "Current Weather in " + data.name;
        weatherBannerIcon.src = "https://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png"
        data.weather[0].icon;
        weatherBannerTemperature.textContent = data.main.temp + '°';
        weatherBannerFeelsLike.textContent = "Feels Like: " + data.main.feels_like + '°';
        weatherBannerHumidity.textContent = "Humidity: " + data.main.humidity + '%';
        weatherBannerWind.textContent = "Wind: " + data.wind.speed + ' mph';
        currentWeatherBanner.appendChild(weatherBannerDate);
        currentWeatherBanner.appendChild(weatherBannerIcon)
        currentWeatherBanner.appendChild(weatherBannerTemperature);
        currentWeatherBanner.appendChild(weatherBannerFeelsLike);
        currentWeatherBanner.appendChild(weatherBannerHumidity);
        currentWeatherBanner.appendChild(weatherBannerFeelsLike);
        currentWeatherBanner.appendChild(weatherBannerWind);
        document.getElementById('current-weather-container').appendChild(currentWeatherBanner)
 } }})

}



function getApi(event) {
  event.preventDefault()

  saveSearchHistory(cityForecastEl.value)

 // https://api.openweathermap.org/data/2.5/weather?q=

//  if (cityInputEl) {
 const requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + result + "&appid=9f096b9225d3366a0b3ad9b65fc340ac&units=imperial"; 
//  else if 
//  "https://api.openweathermap.org/data/2.5/forecast?q=" + cityFromHistory + "&appid=9f096b9225d3366a0b3ad9b65fc340ac&units=imperial" ;
  // const requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.85003000&lon=-87.65005000&appid=a096090ef2291b9381ff1519ce80d339&units=imperial';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.endsWith('12:00:00')){
          const icon = "https://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon +".png";
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
        weatherWind.textContent = "Wind: " + data.list[i].wind.speed + ' mph';
        weatherCard.appendChild(weatherIcon);
        weatherCard.appendChild(weatherDate);
        weatherCard.appendChild(weatherTemperature);
        weatherCard.appendChild(weatherFeelsLike);
        weatherCard.appendChild(weatherHumidity);
        weatherCard.appendChild(weatherWind);
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
    // cityNameEl.setAttribute('id', 'output')
    cityNameEl.classList.add( "city-btn", "button", "is-success")
    cityNameEl.textContent = allSearches;
    // cityNameEl.addEventListener('click', searchFromHistory)
    pastSearchEl.appendChild(cityNameEl);
    // cityButton = document.querySelector('.city-btn')
    // cityButton.addEventListener('click', searchFromHistory(cityFromHistory))
}






function saveSearchHistory(cityName) {
  const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []
  searchHistory.push(cityName);
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
}



let searchCityHistory = JSON.parse(localStorage.getItem('searchHistory'))






// fetchButton.addEventListener('click', function(event){

//   event.preventDefault;
//   // storeCity(event);
//   // clearContainers(event);
//   // setTimeout (function(){
//   getCurrentWeather(event);
//   getApi(event)
// // })})
//     return
// })
 

// function displayWeatherFromHistory(event){
// let cityFromHistory = 



// }
let result;
const inputForm = document.getElementById('inputForm');
const cityInputEl = document.getElementById('city-name-input');
const submitButton = document.getElementById('fetch-button');

// Get all elements with the class 'historyButton'
const historyButtons = document.querySelectorAll('.city-btn');

// Event listener for form submit
inputForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  result = cityInputEl.value; // Get input value
  console.log("Result from input:", result); // Log result for testing
  clearContainers(event)
  getCurrentWeather(event)
  getApi(event)
});

// Event listener for each history button click
historyButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
      event.preventDefault
      result = button.textContent; // Get button text
      console.log("Result from history button:", result); // Log result for testing
      clearContainers(event)
      getCurrentWeather(event)
      getApi(event)
    });
});