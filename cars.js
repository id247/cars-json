const colors = require('./colors');
const manufacturers = require('./manufacturers');

const getRandomNumber = max => Math.round(Math.random() * max);

const getRandomItemFromCollection = collection =>
  collection[getRandomNumber(collection.length - 1)];

const cars = [];

for (var i = 0; i < 200; i++) {
  const id = getRandomNumber(89999) + 10000;
  const manufacturer = getRandomItemFromCollection(manufacturers);
  const model = getRandomItemFromCollection(manufacturer.models);
  const color = getRandomItemFromCollection(colors);
  const mileageNumber = getRandomNumber(99999) + 100000;
  const fuelType = getRandomItemFromCollection(['Petrol', 'Diesel']);

  cars.push({
    id,
    manufacturerName: manufacturer.name,
    modelName: model.name,
    color,
    mileage: {
      number: mileageNumber,
      unit: 'km'
    },
    fuelType,
    pictureUrl: `https://loremflickr.com/g/900/300/${manufacturer.name} ${
      model.name
    }`,
    pictureThumb: `https://loremflickr.com/g/100/75/${manufacturer.name} ${
      model.name
    }`
  });
}

module.exports = cars;
