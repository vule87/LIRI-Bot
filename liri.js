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

    case "do-what-it-says":
        doit();
        break;
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

// Spotify
function spotify(input) {
    if (!input){
        input = "Ace of Base"
    }
    var spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'track', query: input}, function (err, data) {
        var items = data.tracks.items[0];

        if (err) {
            return console.log('Error occurred: ' + err);
        };
        // console.log(items);
        console.log("Artist: " + items.artists[0].name);
        console.log("Song: " + items.name);
        console.log("Preview: " + items.preview_url);
        console.log("Album: " + items.album.name);
    });
};

function movie(input) {
    if (!input){
        input = "Mr. Nobody"
    }

    var movieUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=" + keys.OMDB.id;
    console.log(keys.OMDB.id)
    request(movieUrl, function (err, response, body) {

        if (!err && response.statusCode === 200) {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Released Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Produced Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    });
}

function doit(input) {
    fs.readFile("random.txt", "utf8", function(err, data) {

        if (err) {
          return console.log(err);
        }
      
        var dataArr = data.split(",");
        type = dataArr[0];
        input = dataArr[1];

        switch (type) {
            case "concert-this":
                concerts(input);
                break
        
            case "spotify-this-song":
                spotify(input);
                break;
        
            case "movie-this":
                movie(input);
                break;
        };
      
        console.log(dataArr);
      
      });
}
