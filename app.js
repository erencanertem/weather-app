// INIT Storage
const storage = new Storage();
// Get Stored Location Data
const weatherLocation = storage.getLocationData();

// init Weather Class
const weather = new Weather(weatherLocation.city);

// Init UI

const ui = new UI();

// Get Weather when Refresh
document.addEventListener("DOMContentLoaded", getWeather);

let body = document.getElementsByTagName("body");
// Change Location
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;

  // Change Location
  weather.changeLocation(city);

  // Set Location in LS
  storage.setLocationData(city);
  // Get and Display Weather
  getWeather();
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
