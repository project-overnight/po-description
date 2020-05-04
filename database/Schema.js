const mongoose = require('mongoose');

const { Schema } = mongoose;

const FurnitureSchema = new Schema({
  type: String,
  count: Number,
});
const RoomSchema = new Schema({
  room: String,
  furniture: [FurnitureSchema],
});

const PlaceDetailsSchema = new Schema({
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  title: String,
  maxGuests: Number,
  bedrooms: Number,
  beds: Number,
  baths: Number,
  host: String,
  email: String,
  description: String,
  arrangements: [RoomSchema],
  amenities: {
    basics: [Boolean],
    extras: Map,
  },
});

const Furniture = mongoose.model('Furniture', FurnitureSchema);
const Room = mongoose.model('Review', RoomSchema);
const PlaceDetail = mongoose.model('PlaceDetail', PlaceDetailsSchema);

module.exports = { Furniture, Room, PlaceDetail };
