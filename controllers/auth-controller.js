const createPath = require('../helpers/create-path');
const User = require('../models/user')
const Role = require('../models/role')
const bcrypt = require('bcryptjs')
const { validationResult } = require("express-validator")
const jwt = require("jsonwebtoken")
const { secret } = require('../config')

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles
  }
  return jwt.sign(payload, secret, { expiresIn: '24h' })
}

class authContoller {
  async registration(req, res) {
    try {
      const { username, password, name, surname } = req.body
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors })
      }
      const candidate = await User.findOne({ username })
      if (candidate) {
        return res.status(400).json({ message: 'Пользователь с таким именем уже существует' })
      }
      
      const userRole = await Role.findOne({ value: "USER" })
      const hashPassword = bcrypt.hashSync(password, 7)
      const user = new User({ username, password: hashPassword, name, surname, roles: [userRole.value] })

      await user.save()
      res.redirect('/account');
      // return res.json({ message: "Пользователь успешно зарегистрирован" })

    } catch (e) {
      console.log(e)
      res.status(400).json( {message: 'Registration error'} )
    }
  }

  async login(req, res) {
    try {
      const {username, password} = req.body
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors })
      }
      const user = await User.findOne({ username })
      if (!user) {
        return res.status(400).json({message: 'Пользователь не найден'})
      } 

      const validPassword = bcrypt.compareSync(password, user.password)
      if (!validPassword) {
        return res.status(400).json({message: 'Введен невеный пароль'})
      }

      const token = generateAccessToken(user._id, user.roles)
      res.redirect('/account');

    } catch (e) {
      console.log(e)
      res.status(400).json( {message: 'Login error'} )
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find()
      res.json(users)
    } catch (e) {

    }
  }

  async authPage(req, res) {
    const title = 'auth';
    res.render(createPath('authorization'), { title })
  }
  
  async regPage(req, res){
    const title = 'reg';
    res.render(createPath('registration'), { title })
  }
}



module.exports = new authContoller()