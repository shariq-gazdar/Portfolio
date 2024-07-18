let cityName = document.querySelector("#cityName").value;
let triggerBtn = document.querySelector("#triggerBtn");
let apiKey = `662a084d5f26412ca1e153450241807`;
let baseUrl = `https://api.weatherapi.com/v1/current.json?key=%20662a084d5f26412ca1e153450241807&q=${cityName}&aqi=noo`;

triggerBtn.addEventListener("click", async () => {
  let weatherSection = document.querySelector("#weatherSection");
  weatherSection.classList.remove("hidden");
  let cityName = document.querySelector("#cityName").value;
  let baseUrl = `https://api.weatherapi.com/v1/current.json?key=662a084d5f26412ca1e153450241807&q=${cityName}&aqi=no`;

  if (cityName !== "") {
    console.log(cityName);

    try {
      let response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      let name = document.querySelector("#cityNameDisplay");
      let temp = document.querySelector("#temperatureDisplay");
      let humidity = document.querySelector("#humidityDisplay");
      let weatherIcon = document.querySelector("#weatherIcon");
      let resultJson = await response.json();
      console.log(resultJson);
      name.innerText = resultJson.location.name;
      temp.innerText = `${resultJson.current.temp_c}°C`;
      humidity.innerText = `${resultJson.current.humidity}mm`;
      weatherIcon.src = `https:${resultJson.current.condition.icon}`;
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    console.log("City name cannot be empty");
  }
});
