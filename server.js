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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", { useNewUrlParser: true });

app.use(router);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });