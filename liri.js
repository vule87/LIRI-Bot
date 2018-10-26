require("dotenv").config();

var keys = require("./keys.js");

var request = require('request');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var spotify = new Spotify(keys.spotify);