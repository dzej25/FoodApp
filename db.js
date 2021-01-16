const { connect } = require("mongoose");
require("dotenv").config();
const uri = 'mongodb+srv://jakubzyla:mafiozzo123@cluster0.ipvxf.mongodb.net/<dbname>?retryWrites=true&w=majority'

const dbConnection = async () => {
  try {
    const db = await connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (db) {
      console.log("mongoDB connected");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dbConnection,
};
