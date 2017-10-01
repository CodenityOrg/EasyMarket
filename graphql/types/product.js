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

const Product = require('../models/product');
const Market = require('../models/market');
const Photo = require('../models/photo');
const Atribute = require('../models/atribute');

const MarketType = require('./market');
const PhotoType = require('./photo');
const AtributeType = require('./atribute');

const utils = require('../utils/index');

const ProductType = new GraphQLObjectType({
  name: 'product',
  fields:()=>({
    id:{
      type: GraphQLID
    },
    name:{
      type: GraphQLString
    },
    price:{
      type: GraphQLList(GraphQLString)
    },
    marketId:{
      type: MarketType,
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
      resolve: (product)=>{
        let filters = utils.processArgsInCollection(product.market,args);
        return Market.find(filters);
      }
    },
    photo:{
      type: PhotoType,
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
      resolve: (product)=>{
        let filters = utils.processArgsInCollection(product.photo,args);
        return Photo.find(filters);
      }
    },
    atributes:{
      type: GraphQLList(AtributeType),
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
      resolve: (product)=>{
        let filters = utils.processArgsInCollection(product.photo,args);
        return Atribute.find(filters);
      }
    }
  })
});

module.exports = ProductType;
