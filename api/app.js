const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const APIAuth = require('./routes/users');
const APIGigs = require('./routes/gigs');
const APISearch = require('./routes/third-parties/songkick');
const PORT = process.env.PORT || 3001;
const app = express();
const models = require("./models");

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/', APIAuth);
app.use('/api/gigs', APIGigs);
app.use('/api/search', APISearch);

models.sequelize.sync().then(() => {
    app.listen(PORT, function () {});
})

module.exports = app;