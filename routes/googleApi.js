const express = require("express");
const router = express.Router();
const GooglePlaces = require("googleplaces");
const config = require("./config");
const googlePlaces = new GooglePlaces(config.apiKey, config.outputFormat);

function runApi() {

    let request = {
        location: {lat: 40.744301, lng: -73.864304},
        radius: 8047,
        query: "Miami",
        types: ["tourist_attraction"]
    }

//search for PLACES to visit
    googlePlaces.textSearch(request, (status, response) => {
        let results = response.results;
        console.log("OK");

        //check tags for parks / zoo for nature
        // meuseums
        // etc for types of places

        console.log(results[0])
        for (let i = 0; i < results.length; i++) {
            if (i == 0) {
                console.log("Around 10:00 AM visit: " + results[i].name);
                let recommendedPlace = {
                    typeOfPlace: "placeToVisit",
                    name: results[i].name,
                    image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + results[i].photos[0].photo_reference + "&key=AIzaSyB9ynvcjMr-hzd7VVpQIANMULn_zq-GZ1g",
                    map: "https://www.google.com/maps/search/?api=1&query=" + results[i].name.split(' ').join('+'),
                    likes: 0,
                    reviews: [],
                    location: results[i].formatted_address,
                    tag: results[i].types
                }
                console.log(recommendedPlace);

            }
            else if (i == 1) {
                console.log("After lunch around 1:00 PM: " + results[i].name);
            }
            else if (i == 2) {
                console.log(results[i])
                console.log("Around 5:00 PM visit: " + results[i].name);
            }
            else {
                break;
            }
        }

    });


//Search for RESTAURANT
    let request2 = {
        location: {lat: 40.744301, lng: -73.864304},
        radius: 8047,
        query: "Miami",
        types: ["restaurant"]
    }

    googlePlaces.textSearch(request2, (status, response) => {
        let results = response.results;

        console.log("OK");


        for (let i = 0; i < results.length; i++) {

            if (i == 0) {
                console.log("Eat lunch around 12:00 PM at: " + results[i].name);
                let recommendedPlace = {
                    typeOfPlace: "restaurant",
                    name: results[i].name,
                    image: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + results[i].photos[0].photo_reference + "&key=AIzaSyB9ynvcjMr-hzd7VVpQIANMULn_zq-GZ1g",
                    map: "https://www.google.com/maps/search/?api=1&query=" + results[i].name.split(' ').join('+'),
                    likes: 0,
                    reviews: [],
                    location: results[i].formatted_address,
                    tag: results[i].types
                }

                console.log(recommendedPlace);
            }

            else if (i == 1) {
                console.log("Eat dinner around 8:00 PM at: " + results[i].name);
            }

            else {
                console.log(results[i]);
                break;
            }
        }

    });
}
var exports = (module.exports = runApi);