const { Schema, model } = require('mongoose');

const RoleCchema = new Schema({
  value: { type: String, unique: true, default: "USER" }
});

module.exports = model('Role', RoleCchema);