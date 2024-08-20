// Replace with your API key from WeatherAPI
const apiKey = 'YOUR_WEATHERAPI_KEY';

function displayWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Fetch weather data from WeatherAPI
      fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`)
        .then(response => response.json())
        .then(data => {
          const weatherDiv = document.getElementById('weather');
          const temperature_c = data.current.temp_c;
          const temperature_f = data.current.temp_f;
          const feelslike_c = data.current.feelslike_c;
          const feelslike_f = data.current.feelslike_f;
          const condition = data.current.condition.text;
          const location = data.location.name;

          weatherDiv.innerHTML = `${condition} in ${location} where it feels like ${feelslike_c}°C (${feelslike_f}°F)`;
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          document.getElementById('weather').innerHTML = 'Unable to retrieve weather data.';
        });
    }, error => {
      console.error('Error getting location:', error);
      document.getElementById('weather').innerHTML = 'Unable to retrieve your location.';
    });
  } else {
    document.getElementById('weather').innerHTML = 'Geolocation is not supported by your browser.';
  }
}

// Call the function to display weather on page load
displayWeather();
