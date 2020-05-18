import path from 'path';
import { makeSchema } from '@nexus/schema';
import { nexusPrismaPlugin } from 'nexus-prisma';

import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';
import Election from './resolvers/Election';
import Ballot from './resolvers/Ballot';
import Trail from './resolvers/Trail';

export const schema = makeSchema({
  shouldGenerateArtifacts: true,
  types: [Mutation, Query, Trail, Election, Ballot],
  plugins: [nexusPrismaPlugin()],
  // Tells nexus where to look for types when generating the graphql schema
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
  // Tells nexus where to output the generated graphql schema and types
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },
});
