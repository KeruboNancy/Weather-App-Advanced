let forecast = document.querySelector("#forecast");

forecast.innerHTML = `<div class="weather-forecast-day">
        <div class="weather-forecast-date">Thu</div>

        <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" class="weather-forecast-icon">
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature">
            <strong>16º</strong>
          </div>
          <div class="weather-forecast-temperature">10º</div>
        </div>`;