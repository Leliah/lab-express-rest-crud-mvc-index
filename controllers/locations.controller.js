const express = require("express");
const locations = express.Router();
//GETTING ARRAY OF LOCATIONS FROM MODELS
const locationsArray = require("../models/location.model.js");

locations.get("/", (req, res) => {
  res.json(locationsArray);
});

module.exports = locations;