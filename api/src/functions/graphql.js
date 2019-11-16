import { Photon } from '@generated/photon'
import { ApolloServer, makeExecutableSchema } from '@hammerframework/hammer-api'

import * as todo from 'src/graphql/todo'

const schema = makeExecutableSchema({
  typeDefs: [todo.schema],
  resolvers: [todo.resolvers],
})

const photon = new Photon()

export const handler = new ApolloServer({
  schema,
  context: {
    photon,
  },
}).createHandler()
