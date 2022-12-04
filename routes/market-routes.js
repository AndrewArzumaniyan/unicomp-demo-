const express = require('express'); 
const { getMarket } = require('../controllers/market-controller'); 
const router = express.Router();

router.get('/market', getMarket);

module.exports = router;