const apiKey = 4d6a2621f6f84a82a79121544231203;

function displayWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`)
  .then(response => {
    console.log(response); 
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
      
      fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`)
        .then(response => response.json())
        .then(data => {
          const weatherDiv = document.getElementById('localWeather');
          const temperature_c = data.current.temp_c;
          const temperature_f = data.current.temp_f;
          const feelslike_c = data.current.feelslike_c;
          const feelslike_f = data.current.feelslike_f;
          const condition = data.current.condition.text;
          const condition_icon = data.current.condition.icon;
          const location = data.location.name;
          weatherDiv.innerHTML = `<img src="${condition_icon}"> ${location} feels like ${feelslike_c}°C (${feelslike_f}°F )`;
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          document.getElementById('localWeather').innerHTML = 'Unable to retrieve weather data.';
        });
    }, error => {
      console.error('Error getting location:', error);
      document.getElementById('localWeather').innerHTML = 'Unable to retrieve your location.';
    });
  } else {
    document.getElementById('localWeather').innerHTML = 'Geolocation is not supported by your browser.';
  }
}
