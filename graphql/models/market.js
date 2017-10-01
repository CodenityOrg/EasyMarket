var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var marketSchema = new Schema({
    name: String,
    address: String,
    createdAt:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('Market',marketSchema);
