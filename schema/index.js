// graphql imports
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');
const {
  GraphQLDateTime,
} = require('graphql-iso-date');

// model imports
const Hiscore = require('../models/hiscore');

// hiscore
const HiscoreType = new GraphQLObjectType({
  name: 'Hiscore',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    score: { type: GraphQLInt },
    time: { type: GraphQLInt },
    speed: { type: GraphQLFloat },
    createdAt: { type: GraphQLDateTime },
  })
})

// root queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hiscore: {
      type: HiscoreType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args){
        return Hiscore.findById(args.id);
      }
    },
    hiscores: {
      type: new GraphQLList(HiscoreType),
      resolve(parent, args){
        return Hiscore.find({}).sort('-speed').limit(10);
      }
    },
  }
})

// mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addHiscore: {
      type: HiscoreType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        score: {type: new GraphQLNonNull(GraphQLInt)},
        time: {type: new GraphQLNonNull(GraphQLInt)},
        speed: {type: new GraphQLNonNull(GraphQLFloat)},
      },
      resolve: (parent, args) => new Hiscore({ ...args }).save()
    },
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})