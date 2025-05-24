const mongoose = require("mongoose");
const dbgr = require("debug")("development: mongoose");
const config = require("config");

mongoose
    .connect(`${config.get("MONGODB_URI")}/scatch`)
    .then(() => {
        dbgr("MongoDb Connected");
    })
    .catch((err) => {
        dbgr("Connection Error: ", err);
    });

module.exports = mongoose.connection;