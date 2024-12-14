document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const cityTempDisplay = document.getElementById("temperature");
  const descDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "b431726f5f8a7e2f1456f5d480d43955";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    console.log(city);
    cityInput.value = "";
    //it may throw some error
    // server or database is in another continent.

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
      console.log("ERROR", error);
    }
  });

  async function fetchWeatherData(city) {
    //fetch city weather
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    console.log(typeof response);
    console.log("Response is ", response);

    if (!response.ok) {
      throw new Error("city not found");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    //display data

    console.log(data);
    const { name, main, weather } = data;
    cityNameDisplay.textContent = name;
    cityTempDisplay.textContent = `Temperature:${main.temp} °C`;
    descDisplay.textContent = `Weather:${weather[0].description}`;

    // console.log("mai data is ",data.main)
    //unlock the display

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
