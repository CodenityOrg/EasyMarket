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

module.exports = {
  create: {
    type: MarketType,
    args: {
      input: {
        type: MarketInputType,
      },
    },
    resolve: async (rootValue, { input }) => {
      const newMarket = await new Market(input).save();
      newMarket._id = newMarket._id.toString();
      return newMarket;
    },
  },
};
