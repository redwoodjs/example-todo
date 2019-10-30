import { Photon } from '@generated/photon'
import { server } from '@hammerframework/hammer-api'

import * as todo from 'src/graphql/todo'

const photon = new Photon()

export const handler = server({
  context: {
    photon,
  },
  types: [todo],
}).createHandler()
