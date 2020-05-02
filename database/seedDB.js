const { PlaceDetail } = require('./Schema.js');
const { generateData } = require('./generateData.js');

const mockData = generateData(100);

mockData.forEach((datum) => {
  PlaceDetail.insertMany(datum);
});
