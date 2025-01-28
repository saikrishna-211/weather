const apiKey = 'c191d47b67ca35da3343938bec740bc4'; // Replace with your OpenWeatherMap API key

// Function to fetch weather data
async function getWeather() {
    const city = document.getElementById('city').value;
    const weatherInfo = document.getElementById('weather-info');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const weatherIcon = document.getElementById('weather-icon');
    
    if (!city) {
        alert('Please enter a city');
        return;
    }

    try {
        // Fetch weather data from OpenWeatherMap API
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        // Display weather information
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Description: ${data.weather[0].description}`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        weatherInfo.style.display = 'block';
    } catch (error) {
        alert('Error fetching weather data. Please try again.');
    }
}

// Add event listener to the button
document.querySelector('button').addEventListener('click', getWeather);
