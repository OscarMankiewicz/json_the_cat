const request = require('request');

let cat = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${cat}`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data[0].description);
    } else {
      console.log('Breed not found');
    }
  }
});

