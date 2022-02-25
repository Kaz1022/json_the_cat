// Write the logic to fetch the Siberian data from the API endpoint using request.

// set the api url creating a variable
// input the breed id on terminal


const request = require("request");


const fetchBreedDescription = function(breedname, callback) {

  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedname}`;

  request(url, (error, response, body) => {
    // If URL is wrong...
    if (error) {
      return callback(error, null);
    }

    // If breed not found
    if (body === '[]') {
      error = "Breed Not Found";
      return callback(error, null);
    }

    const data = JSON.parse(body);
    return callback(null, data[0]['description']);

  });

};

module.exports = { fetchBreedDescription };