const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require("graphql/type");


const ToDoMongo = require('../../mongoose/todo');
const User = require('../../mongoose/user');
var exports = module.exports={};
module.exports.getProjection =function getProjection(fieldASTs) {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = true;
    return projections;
  }, {});
}

function getProjection(fieldASTs) {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = true;
    return projections;
  }, {});
}


var todoType = new GraphQLObjectType({
  name: 'todo',
  description: 'todo item',
  fields: () => ({
    itemId: {
      type: (GraphQLInt),
      description: 'The id of the todo.',
    },
    item: {
      type: GraphQLString,
      description: 'The name of the todo.',
    },
    category: {
      type: GraphQLString,
      description: 'The category of the todo.',
    },
    completed: {
      type: GraphQLBoolean,
      description: 'Completed todo? '
    }
  })
});

var userType = new GraphQLObjectType({
  name: 'user',
  description: 'user item',
  fields: () => ({
    userId: {
      type: (GraphQLInt),
      description: 'The id of the user.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the user.',
    },
    age: {
      type: GraphQLInt,
      description: 'The age of the user.',
    },
    friends: {
      type: new GraphQlList(userType),
      resolve:(user) =>{
        return User.find({
          _id:{$in: user.friends.map((id) => id.toString())
          }
        });
      }
    },
    completed: {
      type: GraphQLBoolean,
      description: 'Completed todo? '
    }
  })
});


var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      todo: {
        type: new GraphQLList(todoType),
        args: {
          itemId: {
            name: 'itemId',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve: (root, {itemId}, source, fieldASTs) => {
          var projections = getProjection(fieldASTs);
          var foundItems = new Promise((resolve, reject) => {
              ToDoMongo.find({itemId}, projections,(err, todos) => {
                  err ? reject(err) : resolve(todos)
              })
          })

          return foundItems;
        }
      }
    }
  })

});

exports.schema = schema;
