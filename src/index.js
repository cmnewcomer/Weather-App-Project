let currentLocalTemp = document.querySelector("#currentLocation");
currentLocalTemp.addEventListener("click", currentPosition);
navigator.geolocation.getCurrentPosition(showPosition);

function currentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

// Current Longetude & Latitude Temperature
function showPosition(position) {
  //console.log(position.coords.latitude);
  //console.log(position.coords.longitude);
  let apiKey = "fbbef86de25dd6b2558fa7cb141039b2";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showCurrentCityTemperature);
  axios.get(`${apiUrl}`).then(sunriseTime);
  axios.get(`${apiUrl}`).then(sunsetTime);
}

function showCurrentCityTemperature(response) {
  //console.log(response.data.main);
  let temperature = Math.round(response.data.main.temp);
  let currentCity = response.data.name;
  let displayTemp = document.querySelector("#currentTemp");
  let displayCity = document.querySelector("#cityName");
  displayTemp.innerHTML = `${temperature}º`;
  displayCity.innerHTML = `${currentCity}`;
  let tempMin = Math.round(response.data.main.temp_min);
  let tempMax = Math.round(response.data.main.temp_max);
  let tempMinElement = document.querySelector("#low");
  let tempMaxElement = document.querySelector("#high");
  tempMinElement.innerHTML = `${tempMin}`;
  tempMaxElement.innerHTML = `${tempMax}`;

  let description = response.data.weather[0].description;
  let descriptionElement = document.querySelector("#currentWeatherDescription");
  descriptionElement.innerHTML = `${description}`;

  let windspeed = response.data.wind.speed;
  let windspeedElement = document.querySelector("#windspeedNumber");
  windspeedElement.innerHTML = `${windspeed} m/s`;

  let humidityUnit = `%`;
  let humidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#humidityPercentage");
  humidityElement.innerHTML = `${humidity}${humidityUnit}`;
}

//feature search engine, replace city name and city's current temperature
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function searchCity(event) {
  event.preventDefault();
  let citySearchInput = document.querySelector("#city-text-input");
  let city = document.querySelector("#cityName");
  city.innerHTML = `${citySearchInput.value}`;
  let apiKey = "fbbef86de25dd6b2558fa7cb141039b2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value}&units=metric&appid=${apiKey}`;
  console.log(citySearchInput.value);
  axios.get(`${apiUrl}`).then(showCityTemperatureC);
  axios.get(`${apiUrl}`).then(sunriseTime);
  axios.get(`${apiUrl}`).then(sunsetTime);
}

//temperature in celcius
function showCityTemperatureC(response) {
  console.log(response.data);
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

  console.log(response.data);
  let windspeed = response.data.wind.speed;
  let windspeedElement = document.querySelector("#windspeedNumber");
  windspeedElement.innerHTML = `${windspeed} m/s`;

  let humidityUnit = `%`;
  let humidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#humidityPercentage");
  humidityElement.innerHTML = `${humidity}${humidityUnit}`;
}

//sunrise and sunset times

function sunriseTime(response) {
  let sunriseElement = document.querySelector("#sunriseTime");
  let sunriseTime = new Date(response.data.sys.sunrise * 1000);
  let sunriseHour = sunriseTime.getHours();
  let sunriseMinute = sunriseTime.getMinutes();
  if (sunriseMinute < 10) {
    sunriseMinute = `0${sunriseMinute}`;
  }
  if (sunriseHour < 10) {
    sunriseHour = `0${sunriseHour}`;
  }
  sunriseElement.innerHTML = `${sunriseHour}:${sunriseMinute}`;
}

function sunsetTime(response) {
  let sunsetElement = document.querySelector("#sunsetTime");
  let sunsetTime = new Date(response.data.sys.sunset * 1000);
  let sunsetHour = sunsetTime.getHours();
  let sunsetMinute = sunsetTime.getMinutes();
  if (sunsetMinute < 10) {
    sunsetMinute = `0${sunsetMinute}`;
  }
  if (sunsetHour < 10) {
    sunsetHour = `0${sunsetHour}`;
  }
  sunsetElement.innerHTML = `${sunsetHour}:${sunsetMinute}`;
}
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

/*temperature in Farenheit

function searchCityFTemp(event) {
  event.preventDefault();
  let citySearchInput = document.querySelector("#city-text-input");
  let city = document.querySelector("#cityName");
  city.innerHTML = `${citySearchInput.value}`;
  let apiKey = "fbbef86de25dd6b2558fa7cb141039b2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value}&units=imperial`;
  console.log(citySearchInput.value);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showCityTemperatureF);
}*/
