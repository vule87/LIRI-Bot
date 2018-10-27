require("dotenv").config();

var keys = require("./keys.js");

var request = require('request');
var fs = require('fs');
var Spotify = require('node-spotify-api');
var moment = require('moment');
var type = process.argv;
var action = type[2];
var input = type[3];

switch (action) {
    case "concert-this":
        concerts(input);
        break

    case "spotify-this-song":
        spotify(input);
        break;

    case "movie-this":
        movie(input);
        break;

    case "my-tweets":
        twitter(input);
        break;

    case "do-what-it-says":
        doit();
        break;
};

// Spotify
function spotify(input) {
    var spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'track', query: input, limit: 1 }, function (err, data) {
        var items = data.tracks.items[0];

        if (err) {
            return console.log('Error occurred: ' + err);
        };
        // console.log(items);
        console.log(items.artists[0].name);
        console.log(items.name);
        console.log(items.preview_url);
        console.log(items.album.name);
    });
};

// Concerts/Band in Town
function concerts(input) {
    var queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    console.log(queryURL);
    request(queryURL, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            console.log("Venue: " + JSON.parse(body)[0].venue.name);
            console.log("Location: " + JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.region);
            console.log("Date of concert: " + moment(JSON.parse(body)[0].datetime).format("MM/DD/YYYY"));
        }
    })
}