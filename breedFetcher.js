const request = require('request');

let cat = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${cat}`;

const fetchBreedDescription = function(breedName, callback) {
  request(url, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback('Breed not found', null);
      }
    }
  });
};

module.exports = {fetchBreedDescription};