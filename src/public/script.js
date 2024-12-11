document.getElementById('weatherForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const city = document.getElementById('cityInput').value;
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = 'Loading...';

    try {
        const response = await fetch(`/api/weather/${city}`);
        if (!response.ok) {
            console.log(response)
            throw new Error('City not found or API error');
        }
        const data = await response.json();

        const weatherDetails = `
            <h2>${data.name}</h2>
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
        weatherResult.innerHTML = weatherDetails;
    } catch (error) {
        weatherResult.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
});
