const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specializationSchema = new Schema({
  id: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Specialization = mongoose.model('Specialization', specializationSchema);

module.exports = Specialization;