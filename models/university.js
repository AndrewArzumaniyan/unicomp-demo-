const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
const Schema = mongoose.Schema;

const universitySchema = new Schema({
  id: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  "price": {
    type: String,
    required: false,
  },
  "campus": {
    type: String,
    required: false,
  },
  "ENTgrants": {
    type: String,
    required: false,
  },
  "lang": {
    type: String,
    required: false,
  },
  "internalGrants": {
    type: String,
    required: false,
  },
  "magistracy": {
    type: String,
    required: false,
  },
  "doctoral": {
    type: String,
    required: false,
  },
  "univerType": {
    type: String,
    required: false,
  },
  "exchangeStudy": {
    type: String,
    required: false,
  },
  "priceMagistracy": {
    type: String,
    required: false,
  },
  "priceDoctoral": {
    type: String,
    required: false,
  },
  "city": {
    type: String,
    required: false,
  },
  "img": {
    type: String,
    required: false,
  },
  "subscipt": {
    type: Boolean,
    required: false,
  },
});

const University = mongoose.model('University', universitySchema);

module.exports = University;