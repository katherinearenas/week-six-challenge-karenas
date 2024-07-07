const cityForecastEl = document.getElementById('#city-forecast');
const fetchButton = document.getElementById('fetch-button');

function getCoordinates() {
  let coordinates = 'http://api.openweathermap.org/geo/1.0/direct?q=chicago,il,us&limit=10&appid=a096090ef2291b9381ff1519ce80d339'
  return coordinates;
}
console.log(getCoordinates())

function getApi() {
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
fetchButton.addEventListener('click', getApi, getCoordinates);

// const getRepoName = function () {
//   const queryString = document.location.search;
//   const repoName = queryString.split('=')[1];

//   if (repoName) {
//     repoNameEl.textContent = repoName;

//     getRepoIssues(repoName);
//   } else {
//     document.location.replace('./index.html');
//   }
// };

// const getRepoIssues = function (repo) {
//   const apiUrl = `https://api.github.com/repos/${repo}/issues?direction=asc`;

//   fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         displayIssues(data);

//         if (response.headers.get('Link')) {
//           displayWarning(repo);
//         }
//       });
//     } else {
//       document.location.replace('./index.html');
//     }
//   });
// };

// const displayIssues = function (issues) {
//   if (issues.length === 0) {
//     issueContainerEl.textContent = 'This repo has no open issues!';
//     return;
//   }

//   for (let issueObj of issues) {
//     const issueEl = document.createElement('a');
//     issueEl.classList = 'list-item flex-row justify-space-between align-center';
//     issueEl.setAttribute('href', issueObj.html_url);
//     issueEl.setAttribute('target', '_blank');

//     const titleEl = document.createElement('span');
//     titleEl.textContent = issueObj.title;
//     issueEl.appendChild(titleEl);

//     const typeEl = document.createElement('span');

//     if (issueObj.pull_request) {
//       typeEl.textContent = '(Pull request)';
//     } else {
//       typeEl.textContent = '(Issue)';
//     }

//     issueEl.appendChild(typeEl);

//     issueContainerEl.appendChild(issueEl);
//   }
// };

// const displayWarning = function (repo) {
//   limitWarningEl.textContent = 'To see more than 30 issues, visit ';

//   const linkEl = document.createElement('a');
//   linkEl.textContent = 'GitHub.com';
//   linkEl.setAttribute('href', `https://github.com/${repo}/issues`);
//   linkEl.setAttribute('target', '_blank');

//   limitWarningEl.appendChild(linkEl);
// };

// getRepoName();
