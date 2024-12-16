document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const cityTemperatureDisplay = document.getElementById("temperature");
  const DescriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "b431726f5f8a7e2f1456f5d480d43955";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;
    console.log(city);
    cityInput.value = "";

    try {
      const weatherData = await fetchweatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
      console.error("Error", error);
    }
  });

  async function fetchweatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    console.log(typeof response);
    console.log("Response from api", response);

    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    console.log("DATA is ", data);
    console.log(typeof data);
    
    const { name, main, weather } = data;
    cityNameDisplay.textContent = name;
    cityTemperatureDisplay.textContent = `Temperature:${main.temp}°C`;
    DescriptionDisplay.textContent = `Weather:${weather[0].description}`;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
