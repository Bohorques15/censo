const express = require('express');
const morgan = require('morgan');
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  { DB } = require('./config/DB'),
  itemRoutes = require('./routes/censo');

mongoose.Promise = global.Promise;
mongoose.connect(DB, { mongoClient: true })
  .then(() => console.log('Db is conencted'))
  .catch(err => console.error(err));

const app = express();
var port = process.env.PORT || 4000;

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/censos', itemRoutes);

// start the server
var server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
