const mongoose = require("mongoose");
require("dotenv").config();
const DBConnect = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database Connection Failed");
    }
    
}

module.exports = DBConnect;