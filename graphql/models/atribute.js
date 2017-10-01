var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var atributeSchema = new Schema({
    name: String,
    value: String,
    createdAt:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('Atribute',atributeSchema);
