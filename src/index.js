// Current Longetude & Latitude Temperature
function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let apiKey = "fbbef86de25dd6b2558fa7cb141039b2";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showCurrentCityTemperature);
}

function showCurrentCityTemperature(response) {
  console.log(response.data.weather[0].description);
  let temperature = Math.round(response.data.main.temp);
  let currentCity = response.data.name;
  let displayTemp = document.querySelector("#currentTemp");
  let displayCity = document.querySelector("#cityName");
  displayTemp.innerHTML = `${temperature}º`;
  displayCity.innerHTML = `${currentCity}`;
  let tempMin = Math.round(response.data.main.temp_min);
  let tempMax = Math.round(response.data.main.temp_max);
  console.log(tempMin);
  console.log(tempMax);
  let tempMinElement = document.querySelector("#low");
  let tempMaxElement = document.querySelector("#high");
  console.log(tempMaxElement);
  console.log(tempMinElement);
  tempMinElement.innerHTML = `${tempMin}`;
  tempMaxElement.innerHTML = `${tempMax}`;

  let description = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#currentWeatherDescription");
  descriptionElement.innerHTML = `${description}`;
}

function currentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentLocalTemp = document.querySelector("#currentLocation");
currentLocalTemp.addEventListener("click", currentPosition);

navigator.geolocation.getCurrentPosition(showPosition);

//feature search engine, replace city name and city's current temperature
function searchCity(event) {
  event.preventDefault();
  let citySearchInput = document.querySelector("#city-text-input");
  let city = document.querySelector("#cityName");
  city.innerHTML = `${citySearchInput.value}`;
  let apiKey = "fbbef86de25dd6b2558fa7cb141039b2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value}&units=metric`;
  console.log(citySearchInput.value);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showCityTemperatureC);
}

//temperature in celcius
function showCityTemperatureC(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#currentTemp");
  temperatureElement.innerHTML = `${temperature}`;

  let tempMin = Math.round(response.data.main.temp_min);
  let tempMax = Math.round(response.data.main.temp_max);
  let tempMinElement = document.querySelector("#low");
  let tempMaxElement = document.querySelector("#high");
  tempMinElement.innerHTML = `${tempMin}`;
  tempMaxElement.innerHTML = `${tempMax}`;

  let description = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#currentWeatherDescription");
  descriptionElement.innerHTML = `${description}`;
}

//temperature in Farenheit

function searchCityFTemp(event) {
  event.preventDefault();
  let citySearchInput = document.querySelector("#city-text-input");
  let city = document.querySelector("#cityName");
  city.innerHTML = `${citySearchInput.value}`;
  let apiKey = "fbbef86de25dd6b2558fa7cb141039b2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value}&units=imperial`;
  console.log(citySearchInput.value);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showCityTemperatureF);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

//feature 1 display current date and time

function formDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let date = now.getDate();

  return `${day}, ${month} ${date}, ${year}`;
}

function formTime() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${hour}:${minutes}`;
}
let currentDate = document.querySelector("#currentDate");
let currentTime = document.querySelector("#currentTime");
currentDate.innerHTML = formDate();
currentTime.innerHTML = formTime();
