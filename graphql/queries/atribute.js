const {
  GraphQLString,
  GraphQLList,
  GraphQLID
} = require("graphql/type");

const Atribute = require("../models/atribute");
const AtributeType = require("../types/atribute");

const utils = require("../utils/index");

const atributes = {
  type: new GraphQLList(AtributeType),
  args: {
    id:{
      name:"id",
      type:GraphQLID
    },
    name:{
      name:"name",
      type: GraphQLString
    }
  },
  resolve: (source, args, root, ast)=>{
    let filters = utils.processArgs(args);
    return Atribute.find(filters);
  }
}

module.exports = atributes;
