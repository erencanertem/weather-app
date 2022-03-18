class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.pressure = document.getElementById("w-pressure");
    this.wind = document.getElementById("w-wind");
  }

  paint(responseData) {
    this.location.textContent = `${responseData.sys.country} , ${responseData.name} `;
    this.desc.textContent = responseData.weather[0].main;
    this.string.textContent = `${responseData.main.temp} F ~ ${Math.floor(
      responseData.main.temp - 273
    )} ℃`;
    this.icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${responseData.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity : ${responseData.main.humidity} %`;
    this.feelsLike.textContent = `Feels Like : ${responseData.main.feels_like
      } F ~ ${Math.floor(responseData.main.feels_like - 273)} ℃`;
    this.pressure.textContent = `Pressure : ${responseData.main.pressure}`;
    this.wind.innerHTML = `Wind Speed :  ${responseData.wind.speed} <br/> Wind Degree : ${responseData.wind.deg} `;
  }
}




