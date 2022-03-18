class Weather {
  constructor(city) {
    this.apiKey = "3265874a2c77ae4a04bb96236a642d2f";
    this.city = city;
  }

  // Fetch weather from api

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    );

    const responseData = await response.json();
    return responseData;
  }

  // Change Weather Location

  changeLocation(city) {
    this.city = city;
  }
}
