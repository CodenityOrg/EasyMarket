const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {type:String, unique:true},
    facebookId: String,
    name: String,
    password: String,
    lastname: String,
    city: String,
    cellphone: String,
    createdAt:{ type: Date, default: Date.now}
});

module.exports = mongoose.model("User",userSchema);
