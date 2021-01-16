const { Schema, model } = require("mongoose");
const mongooes = require('mongoose');
// Create Schema

const imgSchema = new mongooes.Schema({
  images: {
    data: Buffer,
    contentType: String,
  },
  header: String,

  ingridient: String,

  prescribe: String,

  _id: Schema.Types.ObjectId
});

const Img = model("Image", imgSchema);


module.exports = {
Img,
};
