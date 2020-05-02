const mongoose = require('mongoose');
const { PlaceDetail } = require('./Schema');

mongoose.connect('mongodb://localhost:27017/po-description',
  { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('err', console.error.bind(console, 'connection error:'));
// eslint-disable-next-line no-console
db.once('open', () => console.log('Database connected...'));
const query = (id) => PlaceDetail.find({ id });

module.exports = { query };
