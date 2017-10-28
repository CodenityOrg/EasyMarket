const MarketQuery = require('./queries/market');
const PhotoQuery = require('./queries/photo');
const AtributeQuery = require('./queries/atribute');
const UserQuery = require('./queries/user');
const ProductQuery = require('./queries/product');
const MarketMutation = require('./mutations/market');

const {
  GraphQLObjectType,
  GraphQLSchema
} = require("graphql/type");

 const query = new GraphQLObjectType({
   name: 'Query',
   fields:()=>({
     atributes:AtributeQuery,
     photos:PhotoQuery,
     markets:MarketQuery,
     users:UserQuery,
     products:ProductQuery
   })
 });
 const mutation = new GraphQLObjectType({
   name: 'Mutation',
   fields:()=>({
     markets:MarketMutation
   })
 });

 module.exports = new   GraphQLSchema({
   query:query,
   mutation:mutation
 });
