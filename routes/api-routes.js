const express = require('express'); 
const router = express.Router();
const { getCategory, getSpecialization, getUniversity } = require('../controllers/api-controller');

router.get('/api/categories', getCategory);

router.get('/api/universities', getUniversity);

router.get('/api/specializations', getSpecialization);

module.exports = router;