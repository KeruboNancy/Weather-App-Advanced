function displayForecast() {
    let forecast = document.querySelector("#forecast");
    let days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`]; // Include all days of the week
    
    forecast.innerHTML = '';

    days.forEach(function(day) {
        forecast.innerHTML += `
            <div class="weather-forecast-day">
                <div class="weather-forecast-date">${day}</div>
                <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" class="weather-forecast-icon">
                <div class="weather-forecast-temperatures">
                    <div class="weather-forecast-temperature">
                        <strong>16º</strong>
                    </div>
                    <div class="weather-forecast-temperature">10º</div>
                </div>
            </div>`;
    });
}
displayForecast();