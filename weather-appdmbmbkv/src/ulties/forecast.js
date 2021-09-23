const weather = require('../api/weather');

const forecast = async () => {
  const response = await weather.get('/current', {
    params: {
      access_key: f4c7a81ddac836ebe5749eab68badb99,
    },
  });
  return response;
};

module.exports = forecast;
