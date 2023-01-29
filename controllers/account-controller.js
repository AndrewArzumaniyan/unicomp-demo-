const createPath = require('../helpers/create-path')

const openAcc = (req, res) => {
  const title = 'account'
  res.render(createPath('account'), {title});
}

module.exports = {
  openAcc
}