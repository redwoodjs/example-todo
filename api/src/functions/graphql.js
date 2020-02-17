import { server, makeMergedSchema, makeServices } from '@redwoodjs/api'
import importAll from '@redwoodjs/api/importAll.macro'

const schemas = importAll('api', 'graphql')
const services = importAll('api', 'services')

export const handler = server({
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
}).createHandler()
