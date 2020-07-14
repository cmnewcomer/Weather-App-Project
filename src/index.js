let city = prompt("Enter a city");

city = city.toLowerCase();
city = city.trim();

let cityWeather = [
  {
    name: "paris",
    ctemp: 22,
    ftemp: 72,
    humidity: 50,
  },

  {
    name: "london",
    ctemp: 19,
    ftemp: 66,
    humidity: 60,
  },

  {
    name: "austin",
    ctemp: 29,
    ftemp: 84,
    humidity: 80,
  },

  {
    name: "new york",
    ctemp: 22,
    ftemp: 72,
    humidity: 78,
  },
  {
    name: "brussels",
    ctemp: 21,
    ftemp: 70,
    humidity: 50,
  },
];

if (city === cityWeather[0].name) {
  alert(
    `It is currently ${cityWeather[0].ctemp}º (${cityWeather[0].ftemp}º) in ${cityWeather[0].name} with a humidity of ${cityWeather[0].humidity}%`
  );
} else {
  if (city === cityWeather[1].name) {
    alert(
      `It is currently ${cityWeather[1].ctemp}º (${cityWeather[1].ftemp}º) in ${cityWeather[1].name} with a humidity of ${cityWeather[1].humidity}%`
    );
  } else {
    if (city === cityWeather[2].name) {
      alert(
        `It is currently ${cityWeather[2].ctemp}º (${cityWeather[2].ftemp}º) in ${cityWeather[2].name} with a humidity of ${cityWeather[2].humidity}%`
      );
    } else {
      if (city === cityWeather[3].name) {
        alert(
          `It is currently ${cityWeather[3].ctemp}º (${cityWeather[3].ftemp}º) in ${cityWeather[3].name} with a humidity of ${cityWeather[3].humidity}%`
        );
      } else {
        if (city === cityWeather[4].name) {
          alert(
            `It is currently ${cityWeather[4].ctemp}º (${cityWeather[4].ftemp}º) in ${cityWeather[4].name} with a humidity of ${cityWeather[4].humidity}%`
          );
        } else {
          alert(
            `Sorry, we know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
          );
        }
      }
    }
  }
}
