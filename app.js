const API_KEY = '';

document.getElementsById('search-bar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchWeather();
    }
});

function searchWeather() {
    const location = document.getElementsByClassName('search-bar').value;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}'

    fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        displayError();
        console.error('There was a problem with the fetch operation:', error);
    });
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>Weather in ${weatherData.name}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
    `;
}

function displayError() {
    document.querySelector('.notFound').computedStyleMap.display;
}