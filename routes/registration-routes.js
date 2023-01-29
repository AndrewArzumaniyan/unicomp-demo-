const express = require('express'); 
const router = express.Router();
const controller = require('../controllers/auth-controller');
const { check } = require("express-validator")

router.get('/reg',controller.regPage);
router.post('/reg', [
  check('username', "E-mail не может быть пустым").notEmpty(),
  check('name', "Поле имя не может быть пустым").notEmpty(),
  check('surname', "Поле фамилия не может быть пустым").notEmpty(),
  check('username', "Пароль должен содержать от 4 до 10 символов").isLength({ min: 4 })
], controller.registration);

module.exports = router;