const express = require('express'); 
const router = express.Router();
const { getHome, redirectHome } = require('../controllers/home-controller');

router.get('/', getHome);

router.get('/home', redirectHome);

module.exports = router;