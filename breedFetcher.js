// Write the logic to fetch the Siberian data from the API endpoint using request.

// set the api url creating a variable
// input the breed id on terminal


const request = require("request");

const breed = process.argv[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    return console.log("Error: ", error);
  }

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    return console.log("Breed Not Found");
  }

  //Access the first entry in the data array and print out the description for the user.
  console.log(data[0]['description']);

});