const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');

const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const Election = require('./resolvers/Election');
const Ballot = require('./resolvers/Ballot');
const Trail = require('./resolvers/Trail');

const { typeDefs } = require('./schema');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Mutation,
    Query,
    Trail,
    Election,
    Ballot,
  },
  resolverValidationOptions: { requireResolversForResolveType: false },
});

module.exports.server = new ApolloServer({
  schema,
  context: (req) => ({ ...req }),
});
