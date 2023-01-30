const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const apiRoutes = require('./routes/api-routes')
const homeRoutes = require('./routes/home-routes')
const marketRoutes = require('./routes/market-routes')
const authRoutes = require('./routes/authorization-routes')
const regRoutes = require('./routes/registration-routes')
const accRoutes = require('./routes/account-routes')
const createPath = require('./helpers/create-path')

const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));


app.listen(PORT, '0.0.0.0' ,(error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }))

app.use(express.static('./dist/css'))
app.use(express.static('./dist/fonts'))
app.use(express.static('./dist/images'))
app.use(express.static('./dist/js'))

// app.use(authRoutes);
// app.use(regRoutes);
app.use(accRoutes);
app.use(homeRoutes);
app.use(marketRoutes);
app.use(apiRoutes);

app.get('/notready', (req, res) => {
  const title = 'notready'
  res.render(createPath('notready'), {title});
});

app.use((req, res) => {
  const title = '404'
  res
    .status(404)
    .render(createPath('error(404)'), {title})
});
