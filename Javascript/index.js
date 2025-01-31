let myApiKey = "ac5decd94047a4ea13519c9889126264";
let myInput = document.querySelector("input#value");
let mySearch = document.querySelector("i#search");
let temp = document.querySelector(".weather-details .weather .text h4 ");
let theName = document.querySelector(".weather-details .weather .text p");
let humniditly = document.querySelector("p#degree");
let speed = document.querySelector("p#speed");
let weatherIcon = document.querySelector(".weather .image img");
let form = document.querySelector(".weather-details");
async function checkWeather() {
  try {
    let myCity = myInput.value;
    let myApi = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${myApiKey}&units=metric`;
    const respone = await fetch(myApi);
    const data = await respone.json();
    if (!respone.ok) {
      form.style.display = "none";
      alert("City Not Found");
      return;
    }
    form.style.display = "block";
    let myTemperature = Math.round(data.main.temp);
    temp.innerHTML = `${myTemperature}°C`;
    theName.innerHTML = `${data.name}`;
    humniditly.innerHTML = `${data.main.humidity}%`;
    speed.innerHTML = `${data.wind.speed} km/h`;

    let weatherCondition = data.weather[0].icon;
    if (weatherCondition.includes("01d") || weatherCondition.includes("01n")) {
      weatherIcon.src = "./images/clear.png";
      weatherIcon.alt = "Clear Sky";
    } else if (
      weatherCondition.includes("02d") ||
      weatherCondition.includes("02n")
    ) {
      weatherIcon.src = "./images/mist.png";
      weatherIcon.alt = "Few Clouds";
    } else if (
      weatherCondition.includes("03d") ||
      weatherCondition.includes("03n")
    ) {
      weatherIcon.src = "./images/clouds.png";
      weatherIcon.alt = "Scattered Clouds";
    } else if (
      weatherCondition.includes("04d") ||
      weatherCondition.includes("04n")
    ) {
      weatherIcon.src = "./images/drizzle.png";
      weatherIcon.alt = "Broken Clouds";
    } else if (
      weatherCondition.includes("09d") ||
      weatherCondition.includes("09n")
    ) {
      weatherIcon.src = "./images/rain.png";
      weatherIcon.alt = "Shower Rain";
    } else if (
      weatherCondition.includes("10d") ||
      weatherCondition.includes("10n")
    ) {
      weatherIcon.src = "./images/rain.png";
      weatherIcon.alt = "Rain";
    } else if (
      weatherCondition.includes("11d") ||
      weatherCondition.includes("11n")
    ) {
      weatherIcon.src = "./images/snow.png";
      weatherIcon.alt = "Thunderstorm";
    } else if (
      weatherCondition.includes("13d") ||
      weatherCondition.includes("13n")
    ) {
      weatherIcon.src = "./images/snow.png";
      weatherIcon.alt = "Snow";
    } else if (
      weatherCondition.includes("50d") ||
      weatherCondition.includes("50n")
    ) {
      weatherIcon.src = "./images/mist.png";
      weatherIcon.alt = "Mist";
    }
  } catch {
    alert("City Not Found");
  }
}
mySearch.addEventListener("click", checkWeather);
