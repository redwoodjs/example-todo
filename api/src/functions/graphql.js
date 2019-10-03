import { graphQLServerlessFunction } from '@hammerframework/hammer-api'
import { Photon } from '@generated/photon'

import * as todo from 'src/graphql/todo'

const server = graphQLServerlessFunction({
  context: {
    photon: new Photon(),
  },
  schemaTypes: [todo]
})

export const handler = server.createHandler()
