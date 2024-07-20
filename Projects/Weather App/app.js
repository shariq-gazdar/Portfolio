let triggerBtn = document.querySelector("#triggerBtn");

document.addEventListener("DOMContentLoaded", () => {
  triggerBtn.addEventListener("click", async () => {
    let apiKey = `662a084d5f26412ca1e153450241807`;
    let weatherSection = document.querySelector("#weatherSection");
    weatherSection.classList.remove("hidden");
    let cityName = document.querySelector("#cityName").value;
    let baseUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;

    async function weatherUpdate(x, y) {
      if (cityName !== "") {
        console.log(cityName);

        try {
          let response = await fetch(baseUrl);
          if (!response.ok) {
            throw new Error(
              `Network response was not ok: ${response.statusText}`
            );
          }
          let name = document.querySelector("#cityNameDisplay");
          let temp = document.querySelector("#temperatureDisplay");
          let humidity = document.querySelector("#humidityDisplay");
          let weatherIcon = document.querySelector("#weatherIcon");
          let windDisplay = document.querySelector("#windDisplay");
          let resultJson = await response.json();
          console.log(resultJson);
          name.innerText = resultJson.location.name;
          temp.innerText = `${resultJson.current.temp_c}°C`;
          humidity.innerText = `${resultJson.current.humidity}%`;
          windDisplay.innerText = `${resultJson.current.wind_kph}kph`;
          weatherIcon.src = `https:${resultJson.current.condition.icon}`;
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        let apiKey = `662a084d5f26412ca1e153450241807`;
        let weatherSection = document.querySelector("#weatherSection");
        weatherSection.classList.remove("hidden");
        let cityName = document.querySelector("#cityName").value;
        let baseUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${x},${y}&aqi=no`;

        try {
          let response = await fetch(baseUrl);
          if (!response.ok) {
            throw new Error(
              `Network response was not ok: ${response.statusText}`
            );
          }
          let name = document.querySelector("#cityNameDisplay");
          let temp = document.querySelector("#temperatureDisplay");
          let humidity = document.querySelector("#humidityDisplay");
          let weatherIcon = document.querySelector("#weatherIcon");
          let windDisplay = document.querySelector("#windDisplay");
          let resultJson = await response.json();
          console.log(resultJson);
          name.innerText = resultJson.location.name;
          temp.innerText = `${resultJson.current.temp_c}°C`;
          humidity.innerText = `${resultJson.current.humidity}%`;
          weatherIcon.src = `https:${resultJson.current.condition.icon}`;
          windDisplay.innerText = `${resultJson.current.wind_kph}kph`;
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }

    navigator.geolocation.getCurrentPosition((position) => {
      weatherUpdate(position.coords.latitude, position.coords.longitude);
    });
  });
});
