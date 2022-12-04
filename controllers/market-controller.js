const createPath = require('../helpers/create-path')

const getMarket = (req, res) => {
  const title = 'market'
  res.render(createPath('unimarket'), {title});
}

module.exports = {
  getMarket
}