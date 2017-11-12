const {
  GraphQLString,
  GraphQLList,
  GraphQLID
} = require("graphql/type");

const Market = require("../models/market");
const MarketType = require("../types/market").MarketType;
const MarketInputType = require("../types/market").MarketInputType;

const utils = require("../utils/index");

// const marketMutations = {
//   createMarket : {
//     type: MarketType,
//     args: {
//       market:{ type:MarketInputType }
//     },
//     resolve: (value,{market})=>{
//       return Market.create({
//         name:market.name,
//         address:market.address
//       }, (err, user) => {
//         if(err) throw err;
//         return user;
//       });
//     }
//   },
// };
//

const marketMutations = {
  createMarket: {
    type: MarketType,
    args: {
      input: {
        type: MarketInputType,
      },
    },
    resolve: (rootValue, { input }) => {
      return Market.create({
        name:market.name,
        address:market.address
      });
    },
  },
};


module.exports = marketMutations;
