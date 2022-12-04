const Category = require('../models/category')
const createPath = require('../helpers/create-path');
const University = require('../models/university');

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath('error(404)', { title: 'Error' }));
}

const getHome = (req, res) => {
  const title = 'home';
  Category
    .find()
    .then((categories) => {
      University
        .find()
        .then((universities) => {
          res.render(createPath('index'), { title, categories, universities })
        })
        .catch((error) => handleError(res, error))
    })
    .catch((error) => handleError(res, error));
}

const redirectHome = (req, res) => {
  res.redirect('/');
}

module.exports = {
  getHome,
  redirectHome
}