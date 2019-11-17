import { Photon } from '@generated/photon'
import { server, makeMergedSchema } from '@hammerframework/api'

import * as todo from 'src/graphql/todo'

const schema = makeMergedSchema([todo])

const photon = new Photon()

export const handler = server({
  schema,
  context: {
    photon,
  },
}).createHandler()
