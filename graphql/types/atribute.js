const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID,
  GraphQLBoolean
} = require("graphql/type");

const Atribute = require("../models/atribute");

const AtributeType = new GraphQLObjectType({
  name: "atribute",
  fields:()=>({
    id:{
      type: GraphQLID
    },
    name:{
      type: GraphQLString
    },
    value:{
        type: GraphQLString
    }
  })
});

module.exports = AtributeType;
