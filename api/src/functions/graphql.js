import { server, makeMergedSchema } from '@redwoodjs/api'

import * as todo from 'src/graphql/todo'

const schema = makeMergedSchema([todo])

export const handler = server({
  schema,
}).createHandler()
