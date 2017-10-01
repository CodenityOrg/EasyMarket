const {
  GraphQLString,
  GraphQLList,
  GraphQLID
} = require("graphql/type");

const Photo = require('../models/photo');
const PhotoType = require('../types/photo');

const utils = require('../utils/index');

const photos = {
  type: new GraphQLList(PhotoType),
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
    return Photo.find(filters);
  }
}

module.exports = photos;
