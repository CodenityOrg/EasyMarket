const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID,
  GraphQLBoolean
} = require("graphql/type");

const Market = require("../models/market");

const MarketType =  new GraphQLObjectType({
  name: "market",
  fields:()=>({
    id:{
      type: GraphQLID
    },
    name:{
      type: GraphQLString
    },
    address:{
        type: GraphQLString
    }
  })
});

const MarketInputType =  new GraphQLInputObjectType({
  name: "marketInput",
  fields:()=>({
    name:{
      type: GraphQLString
    },
    address:{
        type: GraphQLString
    }
  })
});

module.exports = {
  "MarketType": MarketType,
  "MarketInputType": MarketInputType
};
