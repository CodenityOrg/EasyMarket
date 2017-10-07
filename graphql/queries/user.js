const {
  GraphQLString,
  GraphQLList,
  GraphQLID
} = require("graphql/type");

const User = require("../models/user");
const UserType = require("../types/user");

const utils = require("../utils/index");

const users = {
  type: new GraphQLList(UserType),
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
    return User.find(filters);
  }
}

module.exports = users;
