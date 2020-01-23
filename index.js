const express = require('express');
const formidableMiddleware = require('express-formidable');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(formidableMiddleware());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/le-bon-coin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const userRoutes = require('./routes/user');
app.use(userRoutes);
const offerRoutes = require('./routes/offer');
app.use(offerRoutes);

app.all('*', (req, res) => {
  res.json({ message: 'all routes.' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server has started.');
});