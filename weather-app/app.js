const geocoding = require('./utils/geocoding');
const weather = require('./utils/weatherstack');

const command = process.argv[2];

geocoding(command, (error, data) => {
  if (error) {
    return console.log(error);
  }
  weather(data.longitude, data.latitude, (error, weatherData) => {
    if (error) {
      return console.log(error);
    }
    console.log(data.location, weatherData.temperature);
  });
});
