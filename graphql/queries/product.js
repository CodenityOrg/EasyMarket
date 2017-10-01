const {
  GraphQLString,
  GraphQLList,
  GraphQLID
} = require("graphql/type");

const Product = require('../models/product');
const ProductType = require('../types/product');

const utils = require('../utils/index');

const products = {
  type: new GraphQLList(ProductType),
  args: {
    id:{
      name:'id',
      type:GraphQLID
    },
    name:{
      name:'name',
      type: GraphQLString
    }
  },
  resolve: (source, args, root, ast)=>{
    let filters = utils.processArgs(args);
    return Product.find(filters);
  }
}

module.exports = products;
