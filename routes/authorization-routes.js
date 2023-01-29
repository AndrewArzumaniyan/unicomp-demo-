const express = require('express'); 
const router = express.Router();
const contoller = require('../controllers/auth-controller');
const { check } = require("express-validator") 

router.get('/auth', contoller.authPage);
router.post('/auth', [
  check('username', 'Поле логина не может быть пустым').notEmpty(),
  check('password', 'Поле пароля не может быть пустым').notEmpty()
], contoller.login);

module.exports = router;