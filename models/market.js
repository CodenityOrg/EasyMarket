const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const marketSchema = new Schema({
    name: String,
    address: String,
    createdAt:{ type: Date, default: Date.now}
});

module.exports = mongoose.model('Market',marketSchema);