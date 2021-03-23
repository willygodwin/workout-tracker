require('dotenv').config()
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');
const router = require(path.join(__dirname,'routes','routes.js'));

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_DSN, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we are connected");
});

app.use(router);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });