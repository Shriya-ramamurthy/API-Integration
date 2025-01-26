function getWeather() {
    const apiKey = '1ddfda1d1e79a445b86cc4e9193ebf30';
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

;
    console.log(apiUrl); 

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('weather-data').innerText = 'Error fetching data';
        });
}

function displayWeatherData(data) {
    if (data.cod === 200) {
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        document.getElementById('weather-data').innerHTML = `
            <h2>Weather in ${cityName}</h2>
            <p><strong>Temperature:</strong> ${temperature}°C</p>
            <p><strong>Condition:</strong> ${weatherDescription}</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
        `;
    } else {
        document.getElementById('weather-data').innerText = 'City not found.';
    }
}
