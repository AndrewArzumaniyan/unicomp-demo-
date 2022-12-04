const path = require('path');

const createPath = (page) => path.resolve(__dirname, '../dist', `${page}.ejs`);

module.exports = createPath;