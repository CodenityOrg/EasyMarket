const mongoose = require("mongoose");
// create a schema
const Schema = mongoose.Schema;
const toDoSchema = new Schema({
    itemId: Number,
    item: String,
    category: String,
    completed: Boolean
});
// we need to create a model using it
// var ToDo = mongoose.model('ToDo', toDoSchema);
module.exports = mongoose.model("ToDo",toDoSchema);
