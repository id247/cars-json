const fs = require('fs');
const colors = require('./colors');
const manufacturers = require('./manufacturers');
const cars = require('./cars');

const db = {
  colors,
  manufacturers,
  cars
};

module.exports = () => db;
