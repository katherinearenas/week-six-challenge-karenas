const fetchButton = document.getElementById('fetch-button'); 
const cityForecastEl = document.getElementById('city-name-input');



function getCoordinates(event) {
  event.preventDefault()
  console.log(cityForecastEl.value)

  let locationRequestURL = 'http://api.openweathermap.org/geo/1.0/direct?q='+ cityForecastEl.value + '&limit=10&appid=a096090ef2291b9381ff1519ce80d339'

  console.log(locationRequestURL)
  fetch(locationRequestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      })
    };



function getApi(event) {
  event.preventDefault()

  const requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.85003000&lon=-87.65005000&appid=a096090ef2291b9381ff1519ce80d339&units=imperial';

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


      
        // const weatherCard = document.createElement('div');
        // const weatherDate = document.createElement('<p>');
        // const weatherTemperature = document.createElement('<p>'); 
        // // const weather
        // weatherDate.textContent = data.list[i].dt_txt;
        
        // weatherCard.textContent = data[i].city.name;
        
        // cityForecastEl.appendChild(weatherCard)};
        }
        // issueContainer.append(issueTitle);
      }
    });
}

fetchButton.addEventListener('click', getCoordinates )
