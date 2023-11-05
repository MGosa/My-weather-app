function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formatedDay = days[day];

  return `${formatedDay} ${hours}:${minutes}`;
}

function changeTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("h1");
  console.log(response);
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let cityElement = document.querySelector("h1");

  let city = searchInput.value;
  let apiKey = "off12bea02cd1ft1f4f0c632ee3ca6b4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeTemperature);
}

let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", search);

let h2 = document.querySelector("h2");
let currentDate = new Date();
h2.innerHTML = formatDate(currentDate);
