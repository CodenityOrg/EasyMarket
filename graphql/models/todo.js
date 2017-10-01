var mongoose = require('mongoose');
// create a schema
var Schema = mongoose.Schema;
var toDoSchema = new Schema({
    itemId: Number,
    item: String,
    category: String,
    completed: Boolean
});
// we need to create a model using it
// var ToDo = mongoose.model('ToDo', toDoSchema);
module.exports = mongoose.model('ToDo',toDoSchema);
