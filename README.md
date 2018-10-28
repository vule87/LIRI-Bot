# LIRI-Bot

## About
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Functionality

### Commands
    
   * `node ./liri.js concert-this <insert "Artist">`

   * `node ./liri.js spotify-this-song <insert "song">`

   * `node ./liri.js movie-this <insert "movie name">`

   * `node ./liri.js do-what-it-says`

### What it does
1. Bands In Town

`node ./liri.js concert-this <insert "Artist">`

This command will provide info in regard to the next concert of your favorite artist (provide that they actually have scheduled to do so). It will provide:

* Name of the venue

* Venue location

* Date of the Event

2. Spotify

`node ./liri.js spotify-this-song <insert "song">`

 This command will show the following information about the song in your terminal/bash window using Spotify API. It will provide:

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
* If no song is provided then your program will default to "The Sign" by Ace of Base.

3. OMBD

`node ./liri.js movie-this <insert "movie name">`

This will output the following information to your terminal/bash window using OMBD API. It will provide:

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.

4. Do-what-it-says

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

* Feel free to edit the text in random.txt to test out the other features

### Demonstration

https://drive.google.com/open?id=1r9374Pn_WK27Zjh7MIWP9uC1jLZZv3Th
