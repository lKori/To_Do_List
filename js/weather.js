const weatherWrap = document.querySelector("#weatherWrap");
const city = document.querySelector("#city");
const weather = document.querySelector("#weather");
const temp = document.querySelector("#temp");

const API_KEY = "cf553719b444cbf4f10e73973777824d";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name + "\n";
            weather.innerText = data.weather[0].main + "\n";
            temp.innerText = `${Math.ceil(data.main.temp)}℃`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
