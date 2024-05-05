let express = require('express');
let app = express();
let router = require('./routes/routes')

app.use("/", express.json(), router)

module.exports = app;