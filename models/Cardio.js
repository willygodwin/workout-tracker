const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    name: {
        type: String,
        unique: true
      },
      type: {
        type: String
      }, 
      distance: {
        type: Number
      }, 
      duration: {
        type: Number
      }, 
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;
