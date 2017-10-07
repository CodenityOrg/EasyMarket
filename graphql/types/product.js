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
      type: new GraphQLList(GraphQLString)
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
      resolve: (product) => {
				return Market.findOne({
					_id: product.marketId.toString()
				});
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
      resolve: (product) => {
				return Photo.findOne({
					_id: product.photo.toString()
				});
			}
    },
    atributes:{
      type: new GraphQLList(AtributeType),
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
      resolve: (product) => {
				return Atribute.find({
					_id: {
            $in: product.atributes.map((id) => id.toString())
          }
				});
			}
      // resolve: (product,args,root,asts)=>{
      //   let filters = utils.processArgsInCollection(product.atributes,args);
      //   return Atribute.find(filters);
      // }
    }
  })
});

module.exports = ProductType;
