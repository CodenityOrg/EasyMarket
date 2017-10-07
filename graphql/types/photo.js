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

const Photo = require("../models/photo");

const PhotoType = new GraphQLObjectType({
  name: "photo",
  fields:()=>({
    id:{
      type: GraphQLID
    },
    name:{
      type: GraphQLString
    },
    metadata:{
      type: GraphQLString
    },
    thumbnail:{
      type: GraphQLString
    },
    url:{
      type: GraphQLString
    }
  })
});

module.exports = PhotoType;
