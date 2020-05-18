import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';

import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { prisma } from './generated';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
});

export default new ApolloServer({
  schema,
  context: (req) => ({ ...req, db: prisma }),
});
