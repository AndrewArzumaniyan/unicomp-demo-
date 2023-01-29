const express = require('express'); 
const { openAcc } = require('../controllers/account-controller'); 
const router = express.Router();

router.get('/account', openAcc);

module.exports = router;