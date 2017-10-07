const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const atributeSchema = new Schema({
    name: String,
    value: String,
    createdAt:{ type: Date, default: Date.now}
});

module.exports = mongoose.model("Atribute",atributeSchema);
