const mongoose = require('mongoose');
const { PlaceDetail } = require('./Schema.js');
const { generateData } = require('./generateData.js');

const mockData = generateData(100);

mongoose.connect('mongodb://localhost:27017/po-description',
  { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('err', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  PlaceDetail.insertMany(mockData)
    .then((result) => {
      // eslint-disable-next-line no-console
      console.log('db loaded', result.length);
    })
    // eslint-disable-next-line no-console
    .catch((err) => { console.log('found err', err); })
    .finally(() => {
      db.close(() => {
        // eslint-disable-next-line no-console
        console.log('connection closed');
      });
    });
});


// Promise.all(promises)
//   .then((result) => {
//     console.log('db loaded', result);
//   });
