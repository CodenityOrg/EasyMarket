const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: String,
    price: [String],
    marketId:{ref:"Market",type:Schema.Types.ObjectId},
    atributes :[{ref:"Atribute",type:Schema.Types.ObjectId}],
    photo :{ref:"Photo",type:Schema.Types.ObjectId},
    updatedAt:{ type: Date, default: Date.now},
    createdAt:{ type: Date, default: Date.now}
});

module.exports = mongoose.model("Product",productSchema);
