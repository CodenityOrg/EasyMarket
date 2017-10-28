const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const photoSchema = new Schema({
    name: String,
    metadata:Object,
    thumbnail:String,
    url:String,
    createdAt:{type:Date, default: new Date()}
});

module.exports = mongoose.model("Photo",photoSchema);
