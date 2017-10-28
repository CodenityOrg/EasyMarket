const {
  GraphQLString,
  GraphQLList,
  GraphQLID
} = require("graphql/type");

const Market = require("../models/market");
const MarketType = require("../types/market");

const utils = require("../utils/index");

const markets = {
  type: new GraphQLList(MarketType),
  args: {
    id:{
      name:"id",
      type:GraphQLID
    },
    name:{
      name:"name",
      type: GraphQLString
    },
    address:{
      name:"address",
      type: GraphQLString
    }
  },
  resolve: (source, args, root, ast)=>{
    Market.create({
        name:args.name,
        address:args.address
    }, (err, user) => {
        if(err) throw err;
        return user;
    });
  }
}

module.exports = markets;
