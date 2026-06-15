const temperatureButton = document.querySelector("#temperature-button");
const conditionButton = document.querySelector("#condition-button");

function getWeatherDescription(code) {
    if (code === 0) {
        return "Clear sky/Sunny";
    } else if (code <= 3) {
        return "Partly cloudy/sunny";
    } else if (code <= 48) {
        return "Cloudy/Foggy";
    } else if (code <= 67) {
        return "Rainy";
    } else {
        return "Other Weather";
    }
}

temperatureButton.addEventListener("click", function() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=37.3394&longitude=-121.895&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code&temperature_unit=fahrenheit")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.querySelector("#temperature").textContent =
                data.current.temperature_2m + "°F";
        })
        .catch(function(error) {
            document.querySelector("#temperature").textContent = 
                "Error fetching temperature";
            console.log("Error loading temperature: ", error);
        });
});

conditionButton.addEventListener("click", function() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=37.3394&longitude=-121.895&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code&temperature_unit=fahrenheit")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.querySelector("#condition").textContent =
                getWeatherDescription(data.current.weather_code);
        })
        .catch(function(error) {
            document.querySelector("#condition").textContent =
                "Error loading weather condition";
            console.log("Error loading weather condition: ", error);
        });
});