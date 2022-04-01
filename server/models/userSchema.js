const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    }
    
   
});

const users4 = new mongoose.model("users4",userSchema);


module.exports = users4;