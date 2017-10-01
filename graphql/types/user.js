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

const User = require('../models/user');

const UserType = new GraphQLObjectType({
  name: 'user',
  fields:()=>({
    id:{
      type: GraphQLID
    },
    name:{
      type: GraphQLString
    },
    lastname:{
      type: GraphQLString
    },
    email:{
      type: GraphQLString
    },
    city:{
      type: GraphQLString
    },
    cellphone:{
      type: GraphQLString
    }
  })
});

module.exports = UserType;
