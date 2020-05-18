import { ApolloServer } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

import { schema } from './schema';

const db = new PrismaClient();

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers: {
//     Mutation,
//     Query,
//     Trail,
//     Election,
//     Ballot,
//   },
//   resolverValidationOptions: { requireResolversForResolveType: false },
// });

export default new ApolloServer({
  schema,
  context: (req) => ({ ...req, db }),
});
