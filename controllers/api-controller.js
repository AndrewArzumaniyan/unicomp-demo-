const Category = require('../models/category')
const University = require('../models/university')
const Specialization = require('../models/specialization')

const handleError = (res, error) => {
  res.status(500).send(error);
}

const getCategory = (req, res) => {
  Category
    .find()
    .then((categories) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.status(200).json(categories) 
    })
    .catch((error) => handleError(res, error));
}

const getUniversity = (req, res) => {
  University
    .find()
    .then((universities) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.status(200).json(universities) 
    })
    .catch((error) => handleError(res, error));
}

const getSpecialization = (req, res) => {
  Specialization
    .find()
    .then((specializations) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.status(200).json(specializations) 
    })
    .catch((error) => handleError(res, error));
}

module.exports = {
  getCategory,
  getUniversity,
  getSpecialization
}